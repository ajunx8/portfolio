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
  app.use(express.static('build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  })
}

const createTransporter = async () => {
  const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
  });

  const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
          if (err) {
              reject();
          }
          resolve(token);
      });
  });

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

  return transporter;
};

router.post(`${process.env.REACT_APP_API_URL}`, (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const mail = {
    from: email,
    to: "adrian.greksa@gmail.com",
    subject: "Portfolio Form Submission",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  
  const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions, (error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ code: 200 });
      }
    });
  }

  sendEmail(mail);

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