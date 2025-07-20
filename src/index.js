import './style.css';
import displayHome from "home.js";
import displayAbout from "about.js";
import displayMenu from "menu.js";




//design landing page 
function displayLandingPage() {
    const content = document.querySelector("#content");
}

//"Meals you’ll remember. Moments you’ll relive."





function addEventListeners() {
    const content = document.querySelector("#content");
    const navs = document.querySelector("#navs");

    //event delegation
    navs.addEventListener(e, (e) => {
        if (e.target.classList.contains("nav")) {
            clear(content);
            displayNewPage(e.target);
        }
    });


}

function clear(content) {
    while (content.firstChild) {
        parentElement.removeChild(content.firstChild);
    }
}

function displayNewPage(buttonClicked) {
    switch (buttonClicked.id) {
        case "home":
            displayHome();
            break;
        case "menu":
            displayMenu();
            break;
        case "about":
            displayAbout();
            break;
    }

    buttonClicked.style.backgroundColor = "black";
    buttonClicked.style.color = "white";

}

addEventListeners();
displayLandingPage();
