AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage: "assets/images/techstack-page/html.png",
    langName: "HyperText Markup Language",
    langDesc: "<li>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/css.png",
    langName: "Cascading Style Sheets",
    langDesc: "<li>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git/Github",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/docker.webp",
    langName: "Docker",
    langDesc: "<li>Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers</li>",
  },
  {
    langImage: "assets/images/techstack-page/ML.webp",
    langName: "Machine Learning",
    langDesc: "<li>Machine Learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed</li>",
  },
  {
    langImage: "assets/images/techstack-page/DP.webp",
    langName: "Deep Learning",
    langDesc: "<li>Deep Learning is a class of machine learning algorithms that use multiple layers to progressively extract higher-level features from the raw input</li>",
  },
  {
    langImage: "assets/images/techstack-page/django.webp",
    langName: "Django",
    langDesc: "<li>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design</li>",
  },
  {
    langImage: "assets/images/techstack-page/flask.webp",
    langName: "Flask",
    langDesc: "<li>Flask is a lightweight WSGI web application framework in Python</li>",
  },
  {
    langImage: "assets/images/techstack-page/excel.webp",
    langName: "Excel",
    langDesc: "<li>Microsoft Excel is a spreadsheet software used for data analysis, calculations, and visualization</li>",
  },
  {
    langImage: "assets/images/techstack-page/tableau.webp",
    langName: "Tableau Desktop",
    langDesc: "<li>Tableau Desktop is a powerful data visualization tool used for transforming data into interactive and shareable dashboards</li>",
  },
  {
    langImage: "assets/images/techstack-page/PBI.webp",
    langName: "Power BI",
    langDesc: "<li>Power BI is a business analytics service that provides interactive visualizations and business intelligence capabilities</li>",
  },
  {
    langImage: "assets/images/techstack-page/hadoop.webp",
    langName: "Hadoop",
    langDesc: "<li>Hadoop is an open-source software framework used for distributed storage and processing of large data sets</li>",
  },
  {
    langImage: "assets/images/techstack-page/qlik.webp",
    langName: "Qlik",
    langDesc: "<li>Qlik is a business intelligence and data visualization software used to turn raw data into actionable insights</li>",
  },
  {
    langImage: "assets/images/techstack-page/ELK.png",
    langName: "Elasticsearch, Logstash, Kibana (ELK)",
    langDesc: "<li>The ELK stack is a set of tools (Elasticsearch, Logstash, Kibana) used for searching, analyzing, and visualizing data in real-time</li>",
  },
  {
    langImage: "assets/images/techstack-page/sql.jpeg",
    langName: "SQL",
    langDesc: "<li>SQL (Structured Query Language) is used for managing and manipulating relational databases</li>",
  },
  {
    langImage: "assets/images/techstack-page/nosql.jpeg",
    langName: "NoSQL",
    langDesc: "<li>NoSQL databases provide a mechanism for storage and retrieval of data that is modeled in means other than tabular relations</li>",
  },
  {
    langImage: "assets/images/techstack-page/talend.webp",
    langName: "Talend",
    langDesc: "<li>Talend is an ETL tool for data integration that enables users to collect, transform, and share data</li>",
  },
  {
    langImage: "assets/images/techstack-page/R.jpeg",
    langName: "R",
    langDesc: "<li>R is a programming language and software environment used for statistical computing and graphics</li>",
  }
];


const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
