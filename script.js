/*
              _                        __                
          ___| |_ ___  _ __ _ __ ___  / _| ___  _ __ ___ 
         / __| __/ _ \| '__| '_ ` _ \| |_ / _ \| '__/ __|
        _\__ \ || (_) | |  | | | | | |  _| (_) | |  \__ \
       (_)___/\__\___/|_|  |_| |_| |_|_|  \___/|_|  |___/
      
       Script created by Stormfors: www.stormfors.com
*/

/*-------------------------------------*/
/*            Variables                */
/*-------------------------------------*/

let fetchUrl =
  "https://duunitori.fi/api/v1/44f5a1598398895d5145fd18bc6fa8be88fd7887/jobentries?format=json";
let containerAttribute = "[stormfors=container]";
let itemAttribute = "[stormfors=item]";
let titleAttribute = "[stormfors=title]";
let jobList = [];

/*-------------------------------------*/
/*            Initiate Script          */
/*-------------------------------------*/

fetchData();

/*-------------------------------------*/
/*            Functions                */
/*-------------------------------------*/

function fetchData() {
  fetch(fetchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched data from jobbland:", data);
      jobList = data.results;
      createJobs();
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

function createJobs() {
  console.log("Creating jobs...");
  let jobContainer = document.querySelector(containerAttribute);
  let jobItem = document.querySelector(itemAttribute);
  if (jobContainer && jobList.length > 0) {
    jobContainer.innerHTML = "";
    jobList.forEach((job) => {
      let jobItemClone = jobItem.cloneNode(true);
      jobItemClone.querySelector(titleAttribute).textContent = job.heading;
      jobItemClone.href = job.link;
      console.log(job.heading, jobItemClone);
      jobContainer.appendChild(jobItemClone);
    });
  }
}
