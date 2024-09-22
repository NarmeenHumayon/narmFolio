var responseData
fetch("/static/languages/english.json")
  .then((response) => 
    response.json() // Return the promise
  )
  .then((data) => {
    responseData=data; // Now data is available
  console.log(responseData)
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
  }) 