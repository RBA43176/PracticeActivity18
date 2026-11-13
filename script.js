alert("Script is connected!");

console.log("Welcome to Roy's Portfolio!");
console.warn("Welcome to Roy's Portfolio!");


const container = document.querySelector(".container");

// Example: Change its background color (great for fixing your dark mode!)
if (container) {
  container.style.backgroundColor = "#1e293b";
  container.style.color = "#f8fafc";
}


// 1. Footer Year
function getCurrentYear() {
  return new Date().getFullYear();
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = getCurrentYear();
}

// 2. Experience Calculator
function calculateExperience(startYear) {
  return new Date().getFullYear() - startYear;
}

const expSpan = document.getElementById("expYears");
if (expSpan) {
  expSpan.textContent = calculateExperience(2020);
}

// 3. Project Table Counter
function updateProjectCount() {
  const rows = document.querySelectorAll('table tbody tr');
  console.log("Total projects:", rows.length);

  const countSpan = document.getElementById("projectCount");
  if (countSpan) {
    countSpan.textContent = rows.length;
  }
}

updateProjectCount();

const tableBody = document.getElementById("projectTableBody");
if (tableBody) {
  const observer = new MutationObserver(updateProjectCount);
  observer.observe(tableBody, { childList: true });
}

// 4. Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields");
    return false;
  }

  alert("Message sent!");
  return false;
}

// Practice Activity 18
const projects = [
  {
    title: "Personal Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "portfolio.png",
    description: "A responsive personal website to showcase my coding projects.",
    featured: true
  },
  {
    title: "Weather Dashboard",
    tech: ["JavaScript", "OpenWeather API", "CSS"],
    image: "weather-app.png",
    description: "A live weather tracker that displays 5-day forecasts by city.",
    featured: false
  },
  {
    title: "Task Manager App",
    tech: ["React", "Node.js", "MongoDB"],
    image: "task-manager.png",
    description: "A full-stack to-do list app with user authentication and deadlines.",
    featured: true
  }
];

console.log(projects);

console.log(projects[1].title);

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  backend: ["Node.js", "Express", "PostgreSQL"],
  tools: ["Git", "GitHub", "VS Code", "Docker"]
};

console.log(skills.frontend.length);

skills.backend.push("Python");

console.log(skills.backend); 

