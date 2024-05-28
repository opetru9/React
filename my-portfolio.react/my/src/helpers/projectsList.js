import forest from "../img/projects/forest-3d.jpg";
import e_shop from "../img/projects/e-shop.png";
import notes from "../img/projects/notes.jpg";
import brochure from "../img/projects/brochure.jpg";
import sea_battle from "../img/projects/sea_battle.jpg";
import sushi from "../img/projects/sushi-bar.jpg";
import snake from '../img/projects/snake.jpg'
import weather from '../img/projects/weather.jpg'

const projectsList = [
  {
    title: "Brochure Website",
    skills: "JS, HTML, CSS, Figma",
    description:
      "I created a brochure site based on a design mockup from Figma. It's a prototype website where I can easily replace placeholder content with real data at any time. The site features an elegant, responsive design that adapts seamlessly to different screen sizes. With well-defined sections and a clean layout, it offers a professional and polished presentation of the content.",
    img: brochure,
    gitHubLink:
      "https://github.com/opetru9/Random-projects/tree/main/relvise-website",
    demoLink: "http://staticrelvise.s3-website.eu-west-3.amazonaws.com/",
    id: 0,
  },
  {
    title: " Sushi-bar ",
    skills: "React, JS, MUI, Node.js, HTML, CSS, SCSS",
    description:
      "I've developed a comprehensive informational website for an existing sushi bar restaurant using Material-UI for the user interface components. The project is set to be completed with real data and deployed on the web soon. The website provides visitors with the most relevant information about the restaurant, including its menu, location, opening hours, and contact details. Product rendering is handled dynamically through JavaScript logic, while the HTML structure primarily consists of the navbar and footer elements to ensure a consistent layout across all pages. Material-UI has been instrumental in creating a visually appealing and user-friendly interface.",
    img: sushi,
    gitHubLink: "https://github.com/opetru9/ronin-sushi-restaurant",
    demoLink: "http://staticronin.s3-website.eu-west-3.amazonaws.com/",
    id: 1,
  },
  {
    title: "Landing 3D-Page ",
    skills: "JS, HTML, CSS",
    description:
      "This project is a stylish landing page designed with parallax scrolling. Thanks to JavaScript, it incorporates a 3D effect as the mouse moves across the site",
    img: forest,
    gitHubLink:
      "https://github.com/opetru9/Random-projects/tree/main/parallax-3d-Forest",
    demoLink: "http://staticforest.s3-website.eu-west-3.amazonaws.com/",
    id: 2,
  },
  {
    title: "Snake Game",
    skills: "React, JS, HTML, CSS",
    description:
      "Classic Snake game using React and JavaScript, a well-known game where you have to eat objects on the map to increase the size and speed of the snake's movement. The game ends when the snake hits obstacles on the map or when it hits itself. In my case, winning is achieved after eating 50 objects",
    img: snake,
    gitHubLink:
      "https://github.com/opetru9/react/tree/main/snake-game.react/snake-game",
    demoLink: "http://staticsnake.s3-website.eu-west-3.amazonaws.com/",
    id: 3,
  },
  {
    title: "Notes Website",
    skills: "JS, HTML, CSS",
    description:
      "This site is built in a notes format, allowing you to create your to-do list. It enables you to declare a task as completed with a visual effect of cutting the task off, removing it, or adding a new task at any time.",
    img: notes,
    gitHubLink:
      "https://github.com/opetru9/Random-projects/tree/main/notes%20with%20array.js",
    demoLink: "http://staticnotes.s3-website.eu-west-3.amazonaws.com/",
    id: 4,
  },
  {
    title: "Sea Battle Game",
    skills: "JS, HTML, CSS",
    description:
      "This is a sea-battle game format where the goal is to shoot the ship from the shore as it moves at different distances and directions from the shore. Every time a ship is destroyed, another one immediately appears in a different area. Additionally, you are equipped with a radar that shows the position of the ship in real-time to aid better coordination. For each ship destroyed, you earn 10 points, and likewise, 10 points are deducted when you miss the ship. The game ends when you either lose all 100 points from the beginning or reach 200 points.",
    img: sea_battle,
    gitHubLink:
      "https://github.com/opetru9/JavaScript_Advanced/tree/main/sea-battle-game.js-advanced",
    demoLink: "http://staticsea.s3-website.eu-west-3.amazonaws.com/",
    id: 5,
  },
  {
    title: "Mini fullstack e-shop",
    skills: "Docker, Postgres, Node.js, JS",
    description:
      "This site is a mini e-shop executed as a full-stack project. Essentially, I've created a database using Docker Compose and PostgreSQL. I've implemented the logic for adding a product, client, order, or payment. Additionally, I've built a Node.js server that hosts the website and renders different pages based on the declared paths. The site allows you to choose a product, enter personal details, which are then added to the database in the client table. You can then place an order, which in turn will also be added to the database. Finally, you can proceed to pay for the product, and the payment information will similarly be inserted into the database. As the title suggests, it's a mini full-stack website.",
    img: e_shop,
    gitHubLink: "https://github.com/opetru9/mini_e-shop.full-stack",
    id: 6,
  },
  {
    title: "Weather API website",
    skills: "JS ( AJAX, Fetch ), CSS ",
    description:
      "The classic weather website where you enter the name of the city and receive current weather data for the specified city using the 'weatherApi'. Additionally, the data is retrieved, saved in local storage, and cleared after an hour. This update was made to always store fresh information and to save resources.",
    img: weather,
    gitHubLink:
      "https://github.com/opetru9/JavaScript_Advanced/tree/main/API-ajax-fetch-promises.js/AJAX/get-weather.ajax.js",
    demoLink: "http://staticweatherr.s3-website.eu-west-3.amazonaws.com/",
    id: 7,
  },
];

export default projectsList
