// Getting the theme (dark mode or light mode) from local storage
var mode = window.localStorage.getItem("mode") 

// if the theme is currently stored (meaning its not null) and if mode is dark mode then change to dark mode
// Otherwise by default its light mode
if(mode != null){
  if(mode == "dark"){
    changeModeToDark();
    document.getElementById("checkbox").checked=true;
  }
}

// Get language from local storage and set our pages language to that value
// by default its english 
var language = window.localStorage.getItem("language") 
if(language != null){
  load_from_json(language)
}else{
  load_from_json("english")
}

// Function to load from json file
// the json file is picked based of the language chosen by the user
// and then all the data is injected into the DOM
function load_from_json(language){
  window.localStorage.setItem("language",language)
  document.getElementById("lang_dd").textContent = language
  var responseData
fetch(`/static/languages/${language}.json`)
  .then((response) => 
    response.json() // Return the promise
  )
  .then((data) => {
responseData=data; // Now data is available 
console.log(responseData)
//Inject data into DOM 
document.getElementsByClassName("about")[0].textContent = responseData.about;
document.getElementsByClassName("project")[0].textContent = responseData.projectstxt;
document.getElementById("project").textContent = responseData.projectstxt;
document.getElementsByClassName("award")[0].textContent = responseData.awardstxt;
document.getElementsByClassName("education")[0].textContent = responseData.educationtxt;
document.getElementById("education").textContent = responseData.educationtxt;
document.getElementById("contact").textContent = responseData.contact;
document.getElementById("skills").textContent = responseData.skillstxt;
document.getElementById("awards").textContent = responseData.awardscertif;
document.getElementById("awards").textContent = responseData.awardscertif;
document.getElementById("profile").textContent = responseData.profilehead;
document.getElementById("profiletxt").textContent = responseData.profiletxt;
document.getElementsByClassName("experiences")[0].textContent = responseData.experiencetxt;
document.getElementById("experience").textContent = responseData.experiencetxt;
document.getElementById("reference").textContent = responseData.referencetxt
document.getElementsByClassName("references")[0].textContent = responseData.referencetxt
var injection = ""
responseData.experience.forEach(element =>{
    injection+=`<div class="edu-card">
          <div class="e_head">
            <h3 class="e_name">${element.name}</h3>
            ${element.datetime}
          </div>
          <div class="institute">${element.institute}</div>
          ${element.description}
        </div>` 
})
document.getElementById("experience-inject").innerHTML = injection;
injection = ""

responseData.projects.forEach(element => {
    injection+=`<div class="project-card">
          <div class="p_head">
            <h3 class="p_name">${element.name}</h3>
            ${element.datetime}
          </div>
          ${element.description}
        </div>`
});
document.getElementById("projects_inject").innerHTML = injection
injection=""
responseData.awards.forEach(element => {
    injection+=`<div class="project-card">
          <div class="p_head">
            <h3 class="p_name">${element.name}</h3>
            ${element.datetime}
          </div>
          ${element.description}
        </div>`
});
document.getElementById("awards_inject").innerHTML=injection
injection=""
responseData.education.forEach(element =>{
    injection+=`<div class="edu-card">
          <div class="e_head">
            <h3 class="e_name">${element.name}</h3>
            ${element.datetime}
          </div>
          <div class="institute">${element.institute}</div>
          ${element.description}
        </div>`
})
document.getElementById("education_inject").innerHTML=injection
injection = ""
responseData.skills.forEach(element=>{
  injection+=`<div class="skill-box">
          <span class="title">${element.name}</span>

          <div class="skill-bar">
            <span class="skill-per html" style="width: ${element.proficiency}">
              <span class="tooltip">${element.proficiency}</span>
            </span>
          </div>
        </div>`
}) 
document.getElementById("skill_inject").innerHTML=injection
injection = ""
responseData.references.forEach(element=>{
  injection+=`<div class="reference-card">
          <div class="e_head">
            <h3 class="r_name">${element.name}</h3> 
          </div>
          <div class="occupation">${element.occupation}</div>
          <div><svg xmlns="http://www.w3.org/2000/svg" style="margin-right:10px" width="10" height="10" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> ${element.phone}</div>
          <div><svg xmlns="http://www.w3.org/2000/svg" style="margin-right:10px" width="10" height="10" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg><a href="mailto:${element.email}">${element.email}</a> </div>
        </div>
  `
})
document.getElementById("reference-inject").innerHTML = injection
}) }

// function to switch mode when our checkbox (switch) is clicked
function switchMode(e){
  if(e.checked){
    window.localStorage.setItem("mode","dark")
    changeModeToDark() 
  }else{
    window.localStorage.setItem("mode","light")
    changeModeToLight()  
  }
}

//  these functions (changeModeToDark & changeModeToLight) changes the src of our link tags to css files of corresponding theme 
function changeModeToDark(){
  var maincss = document.getElementById("maincss")
  var leftcss = document.getElementById("leftcss")
  var rightcss = document.getElementById("rightcss")
  maincss.setAttribute("href","static/css/dark/portfolio.css")
  leftcss.setAttribute("href","static/css/dark/left_side.css")
  rightcss.setAttribute("href","static/css/dark/right_side.css")
}
function changeModeToLight(){
  var maincss = document.getElementById("maincss")
  var leftcss = document.getElementById("leftcss")
  var rightcss = document.getElementById("rightcss")
  maincss.setAttribute("href","static/css/portfolio.css")
  leftcss.setAttribute("href","static/css/left_side.css")
  rightcss.setAttribute("href","static/css/right_side.css")
}