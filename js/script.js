var btnAboutMe=document.getElementById('btnAboutMe')
var btnEducation=document.getElementById('btnEducation')
var btnExperince=document.getElementById('btnExperince')
var btncontacts=document.getElementById('btncontacts')
var btnHoppies=document.getElementById('btnHoppies')


var homeaboutme =document.getElementById("home-aboutme")
var homeEducation =document.getElementById("home-Education")
var homeExperince =document.getElementById("home-Experince")
var homecontacts =document.getElementById("home-contacts")
var homeHoppies =document.getElementById("home-Hoppies")


function displayAboutMe(){
    homeaboutme.style.transform="translateX(0)";
    homeEducation.style.transform="translateX(100%)";
    homeExperince.style.transform="translateX(100%)";
    homecontacts.style.transform="translateX(100%)";
    homeHoppies.style.transform="translateX(100%)";

btnAboutMe.style.color="#ff7846";
btnEducation.style.color="#000";
btnExperince.style.color="#000";
btncontacts.style.color="#000";
btnHoppies.style.color="#000";

AboutMe.style.transitionDelay="0.5s";
Education.style.transitionDelay="0s";
Experince.style.transitionDelay="0s";
contacts.style.transitionDelay="0s";
Hoppies.style.transitionDelay="0s";
}

function displayEducation(){
    homeaboutme.style.transform="translateX(100%)";
    homeEducation.style.transform="translateX(0)";
    homeExperince.style.transform="translateX(100%)";
    homecontacts.style.transform="translateX(100%)";
    homeHoppies.style.transform="translateX(100%)";

btnAboutMe.style.color="#000";
btnEducation.style.color="##ff7846";
btnExperince.style.color="#000";
btncontacts.style.color="#000";
btnHoppies.style.color="#000";

AboutMe.style.transitionDelay="0s";
Education.style.transitionDelay="0.5s";
Experince.style.transitionDelay="0s";
contacts.style.transitionDelay="0s";
Hoppies.style.transitionDelay="0s";
}

function displayExperince(){
    homeaboutme.style.transform="translateX(100%)";
    homeEducation.style.transform="translateX(100%)";
    homeExperince.style.transform="translateX(0)";
    homecontacts.style.transform="translateX(100%)";
    homeHoppies.style.transform="translateX(100%)";

btnAboutMe.style.color="#000";
btnEducation.style.color="#000";
btnExperince.style.color="#ff7846";
btncontacts.style.color="#000";
btnHoppies.style.color="#000";

AboutMe.style.transitionDelay="0s";
Education.style.transitionDelay="0s";
Experince.style.transitionDelay="0.5s";
contacts.style.transitionDelay="0s";
Hoppies.style.transitionDelay="0s";
}

function displaycontacts(){
    homeaboutme.style.transform="translateX(100%)";
    homeEducation.style.transform="translateX(100%)";
    homeExperince.style.transform="translateX(100%)";
    homecontacts.style.transform="translateX(0)";
    homeHoppies.style.transform="translateX(100%)";

btnAboutMe.style.color="#000";
btnEducation.style.color="#000";
btnExperince.style.color="#000";
btncontacts.style.color="#ff7846";
btnHoppies.style.color="#000";

AboutMe.style.transitionDelay="0s";
Education.style.transitionDelay="0s";
Experince.style.transitionDelay="0s";
contacts.style.transitionDelay="0.8s";
Hoppies.style.transitionDelay="0s";
}

function displayHoppies(){
    homeaboutme.style.transform="translateX(100%)";
    homeEducation.style.transform="translateX(100%)";
    homeExperince.style.transform="translateX(100%)";
    homecontacts.style.transform="translateX(100%)";
    homeHoppies.style.transform="translateX(0)";

btnAboutMe.style.color="#000";
btnEducation.style.color="#000";
btnExperince.style.color="#000";
btncontacts.style.color="#000";
btnHoppies.style.color="#ff7846";

AboutMe.style.transitionDelay="0s";
Education.style.transitionDelay="0s";
Experince.style.transitionDelay="0s";
contacts.style.transitionDelay="0s";
Hoppies.style.transitionDelay="0.5s";

}
