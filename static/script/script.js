function load_from_json(language){var responseData
fetch(`/static/languages/${language}.json`)
  .then((response) => 
    response.json() // Return the promise
  )
  .then((data) => {
responseData=data; // Now data is available 
//Insert data into DOM 

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
var injection = ""
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
  }) }
load_from_json("english")