require('dotenv').config()
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// server used to send emails
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(port, () => console.log(`Server Running On Port ${port}`));

if (process.env.NODE_ENV === 'production') {
  console.log('process.env is "production"')
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

const createTransporter = async () => {
  try {
    console.log("@@@@@@@@@ 1")
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
    console.log("@@@@@@@@@ 2", oauth2Client)

    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });
    console.log("$$$$$$$$$ 1 client id", process.env.CLIENT_ID)
    console.log("$$$$$$$$$ 2 client secret", process.env.CLIENT_SECRET)
    console.log("$$$$$$$$$ 3 refresh token", process.env.REFRESH_TOKEN)

    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        console.log("######## 1")
        if (err) {
          console.log("######## 2", err)
          reject();
        }
        resolve(token);
      });
    });
    console.log("@@@@@@@@@ 4")

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });
    console.log("@@@@@@@@@ 5")

    return transporter;
  } catch (err) {
    console.log("Error running transporter", err);
    throw err;
  }
};

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: email,
    to: process.env.EMAIL,
    subject: "Portfolio Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  const sendEmail = async (emailOptions) => {
    try {
      let emailTransporter = await createTransporter();
      console.log("@@@@@@@ 2", emailTransporter)
      await emailTransporter.sendMail(emailOptions, (error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({ code: 200 });
        }
      });
      console.log("@@@@@@@@@@ 3")
    } catch (err) {
      console.log("Error Running sendEmail", err);
      throw err;
    }
  }

  return sendEmail(mail);

  // contactEmail.sendMail(mail, (error) => {
  //   if (error) {
  //     res.json(error);
  //   } else {
  //     res.json({ code: 200 });
  //   }
  // });
});

// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     accessToken,
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     refreshToken: process.env.REFRESH_TOKEN
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });