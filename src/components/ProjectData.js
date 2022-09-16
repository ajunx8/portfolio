import portfolioImg from '../assets/img/portfolio.png'
import foodJournalImg from '../assets/img/foodJournal.png'
import spaceExploreImg from '../assets/img/spaceExplore.png'
import naughtsAndCrossesImg from '../assets/img/naughtsAndCrosses.png'
import climChangeImg from '../assets/img/climChange.png'

const ProjectData = [
  {
    title: 'Portfolio',
    description: 'React',
    type: 'Latest',
    type2: 'Solo',
    image: portfolioImg,
    appLink: '.',
    githubLink: 'https://github.com/ajunx8/portfolio'
  },
  {
    title: 'The Food Journal',
    description: 'Ruby on Rails',
    type: 'Solo',
    image: foodJournalImg,
    appLink: 'https://food-journal-2.herokuapp.com',
    githubLink: 'https://github.com/ajunx8/foodjournal'
  },
  { 
    title: 'Survival Space Exploration',
    description: 'Ruby on Rails',
    type: 'Solo',
    image: spaceExploreImg,
    appLink: 'https://fierce-coast-57097.herokuapp.com/',
    githubLink: 'https://github.com/ajunx8/project1'
  },
  {
    title: 'Naughts and Crosses',
    description: 'HTML, CSS & Javascript',
    type: 'Solo',
    image: naughtsAndCrossesImg,
    appLink: 'https://ajunx8.github.io/project0/',
    githubLink: 'https://github.com/ajunx8/project0'
  },
  {
    title: 'Climate Change Info Page',
    description: 'React, Supabase',
    type: 'Group',
    image: climChangeImg,
    appLink: 'https://silver-heliotrope-303072.netlify.app/',
    githubLink: 'https://github.com/ajunx8/climchange-app'
  }
]

export default ProjectData