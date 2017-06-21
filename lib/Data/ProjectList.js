const Projects = [
  {
    title: 'Turing Overflow',
    description: 'This application was our final project at Turing School of Software. We decided to make a replica of stack overflow for the school community to use during their journey from module 1 to graduating in module 4. We built this application using React, Redux & React router frontend with a Node, Express server and a Knex js and postgreSQL database.',
    image: 'images/turing_overflow.png',
    gitHubRepo: 'https://github.com/stacimcwilliams/Turing_OverFlow',
    siteURL: 'https://turing-overflow.herokuapp.com/',
    techUsed: ['Javascript ', 'React ', 'Redux ', 'React Router ', 'Node ', 'Express ', 'Knex ', 'postgreSQL ', 'Mocha ', 'Chai ', 'Chai http ', 'HTML5 ', 'SCSS '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'I Wanna Ride',
    description: 'This application was a personal driven project where I decided to use React & Redux and also build my own backend database with Node, Express, SQL & postgreSQL. The application is designed to match mountain bike riders who want to ride a trail but don\'t want to ride it alone. The app allows users to add the date, time and location where they want to ride and will then check the system for other riders with matching details. Create User & User sign in is not yet secure via OAuth. To test use the application, sign in with the credentials mikefen & password',
    image: 'images/I-wanna-ride.png',
    gitHubRepo: 'https://github.com/Mickyfen17/i-wanna-ride',
    siteURL: 'https://i-wanna-ride.herokuapp.com/',
    techUsed: ['Javascript ', 'React ', 'Redux ', 'React Router ', 'Node ', 'Express ', 'SQL ', 'postgreSQL ', 'Jest ', 'Enzyme ', 'HTML5 ', 'SCSS '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'Flexbox Sandbox',
    description: 'This application is to help people become more familiar with CSS flexbox concepts. The application is built in React and allows the user to apply parent and child flexbox properties and see how they interact with each other. This user has the ability to add up to 10 div elements and also see the HTML and CSS properties that have been applied via the controls radio buttons.',
    image: 'images/flexbox-sandbox.png',
    gitHubRepo: 'https://github.com/Mickyfen17/flex-sandbox',
    siteURL: 'https://mickyfen17.github.io/flex-sandbox/',
    techUsed: ['Javascript ', 'React ', 'HTML5 ', 'CSS3 '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'Jet-Fuel',
    description: 'This application is based on the bitly url shortener. Using Express.js to create our endpoints and Knex along with postgreSQL to store our data. The user is able to create specific folders and add long urls from any website to that folder. The Express server and Knex/postgreSQL DB will then create a shortened url that can be used anywhere to redirect a user back to the original long url.',
    image: 'images/jet-fuelled.png',
    gitHubRepo: 'https://github.com/Mickyfen17/jet-fuel',
    siteURL: 'https://jet-fuelled.herokuapp.com/',
    techUsed: ['Javascript ', 'jQuery ', 'HTML5 ', 'SCSS ', 'Node ', 'Express ', 'Knex ', 'postgreSQL ', 'Mocha ', 'Chai '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'Movie Tracker',
    description: 'This application was a first introduction to Redux, Express, SQL & postgreSQL. The application allows users to log in and view the most recently released movies. Once the user is logged in they are able to favorite multiple movies which would be saved to their account. Create User & User sign in is not yet secure via OAuth. To test use the application, sign in with the credentials test@test.com & password.',
    image: 'images/movie-tracker.png',
    gitHubRepo: 'https://github.com/Mickyfen17/movie_tracker',
    siteURL: 'https://movie-track.herokuapp.com/',
    techUsed: ['Javascript ', 'React ', 'Redux ', 'React Router ', 'Node ', 'Express ', 'SQL ', 'postgreSQL ', 'Jest ', 'Enzyme ', 'HTML5 ', 'CSS3 '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'Weathrly',
    description: 'Mobile weather application built in React JS and tested with Mocha and Enzyme. It utilizes Weather Underground’s API to render on demand weather forecasts to a stylish and accessible user interface that supports an auto-complete location search.',
    image: 'images/weathrly.png',
    gitHubRepo: 'https://github.com/Mickyfen17/weathrly',
    siteURL: 'https://mickyfen17.github.io/weathrly/',
    techUsed: ['Javascript ', 'React ', 'Enzyme ', 'Sinon ', 'HTML5 ', 'CSS3 ', 'ARIA', 'Mocha ', 'Chai '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'GameTime',
    description: 'Desktop replica of the classic arcade game Breakout built using vanilla JavaScript, HTML canvas and Mocha/Chai for testing. The game supports 5 levels of play.',
    image: 'images/game-time.png',
    gitHubRepo: 'https://github.com/Mickyfen17/game-time',
    siteURL: 'https://mickyfen17.github.io/game-time/',
    techUsed: ['Javascript ', 'HTML Canvas ', 'CSS3 ', 'Mocha ', 'Chai'],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: 'SwapiBox',
    description: 'A Star Wars game card  application where card data elements are pulled in using asynchronous promise calls and rendered using React. Users can also flag and retrieve favorites.',
    image: 'images/swapi_box.png',
    gitHubRepo: 'https://github.com/Mickyfen17/SWAPIbox',
    siteURL: 'https://mickyfen17.github.io/SWAPIbox/',
    techUsed: ['Javascript ', 'React ', 'HTML5 ', 'SCSS ', 'Jest ', 'Enzyme'],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
  {
    title: '2DoBox',
    description: 'Fully accessible single page application using Local Storage to keep track of To-Do\'s. Similar aplication to ideaBox but refactored using ES6. Application tested using Mocha, Chai and Selenium.',
    image: 'images/2_do_box.png',
    gitHubRepo: 'https://github.com/Mickyfen17/2DoBox-Pivot',
    siteURL: 'https://mickyfen17.github.io/2DoBox-Pivot/',
    techUsed: ['Javascript ', 'Selenium ', 'HTML5 ', 'SCSS ', 'ARIA', 'Mocha ', 'Chai '],
    icons: {
      git: 'images/github.svg',
      site: 'images/browser.svg',
    },
  },
];

export default Projects;