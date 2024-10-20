AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "ETL with Python",
    cardImage: "assets/images/project-page/py.webp",
    description: "ETL process and data processing using Python.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/IbrahimaGN/mon-premier-projet-python",
  },
  {
    title: "web App with HTML",
    cardImage: "assets/images/project-page/legume.webp",
    description: "My first project building a web application using HTML/CSS.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Githublink: "https://github.com/IbrahimaGN/projet_html_css",
  },
  {
    title: "RESTful API",
    cardImage: "assets/images/project-page/API.webp",
    description: "Implementation and consumption of a RESTful API.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/IbrahimaGN/Projet_dev",
  },
  {
    title: "Power BI Dashboard",
    cardImage: "assets/images/project-page/PBI.webp",
    description: "Interactive sales management dashboard.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Githublink: "https://github.com/IbrahimaGN/power_bi_certification",
  },
  {
    title: "Excel Dashboard",
    cardImage: "assets/images/project-page/excel.webp",
    description: "Interactive sales management dashboard.",
    tagimg:"",
    Githublink: "https://github.com/IbrahimaGN/Excel_certification",
  },
  {
    title: "Indexing and Search",
    cardImage: "assets/images/project-page/ELK.webp",
    description: "Data scraping on smartphones and creation of a search engine with visualization.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Githublink: "https://github.com/IbrahimaGN/projet_indexation",
  },
  {
    title: "Business Intelligence",
    cardImage: "assets/images/project-page/BI.webp",
    description:
      "Data generation, ETL process, and data visualization.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Githublink: "https://github.com/IbrahimaGN/Business-intelligence",
  },
  {
    title: "Django-Mongo crud",
    cardImage: "assets/images/project-page/mongo.webp",
    description: "Building a TODO-LIST app.",
    tagimg:"",
    Githublink: "https://github.com/IbrahimaGN/Crud_diango_mongodb",
  },
  {
    title: "Django-Neo4j crud",
    cardImage: "assets/images/project-page/neo4j.webp",
    description: "Building a TODO-LIST app.",
    tagimg:"",
    Githublink: "https://github.com/IbrahimaGN/Crud_diango",
  },
  {
    title: "Flask crud app",
    cardImage: "assets/images/project-page/flask.webp",
    description: "Building a TODO-LIST app using flask.",
    tagimg:"",
    Githublink: "https://github.com/IbrahimaGN/Application-web-gestion-des-taches-avec-flask-html-et-css",
  },
  {
    title: "D3js vizualisation",
    cardImage: "assets/images/project-page/D3.webp",
    description: "Building a dashboard using the D3.js JavaScript library.",
    tagimg:
      "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Githublink: "https://github.com/IbrahimaGN/D3js_viz",
  },
  {
    title: "Web Data Scraping",
    cardImage: "assets/images/project-page/WS.webp",
    description: "Scraping data from websites.",
    tagimg:
      "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "",
    Githublink: "https://github.com/IbrahimaGN/Scraping-web",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
                   6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
