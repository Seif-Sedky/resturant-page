import './style.css';
import displayHome from "./home.js";
import displayAbout from "./about.js";
import displayMenu from "./menu.js";
import img1Src from "./imgs/img1.png";
import img2Src from "./imgs/img2.png"





//design landing page 
function displayLandingPage() {
    const content = document.querySelector("#content");

    // Create container for the images and quote
    const heroContainer = document.createElement('div');
    heroContainer.style.position = 'relative';
    heroContainer.style.width = '75%';
    heroContainer.style.minHeight = '76vh';
    heroContainer.style.margin = '0 auto';
    heroContainer.style.marginTop = '4vh';
    heroContainer.style.display = 'flex';
    heroContainer.style.justifyContent = 'center';
    heroContainer.style.alignItems = 'center';

    // Create images
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');

    img1.src = img1Src;
    img2.src = img2Src;

    // Style first image (top-left, rotated)
    img1.style.position = 'absolute';
    img1.style.width = '50%';
    img1.style.height = '75%';
    img1.style.objectFit = 'cover';
    img1.style.borderRadius = '12px';
    img1.style.left = '5%';
    img1.style.top = '5%';
    img1.style.transform = 'scaleX(-1)';
    img1.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.4)';
    img1.style.zIndex = '1';


    // Style second image (bottom-right, rotated opposite)
    img2.style.position = 'absolute';
    img2.style.width = '50%';
    img2.style.height = '65%';
    img2.style.objectFit = 'cover';
    img2.style.borderRadius = '12px';
    img2.style.right = '5%';
    img2.style.bottom = '8%';
    img2.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.4)';
    img2.style.zIndex = '2';


    // Create quote
    let quote = document.createElement("p");
    quote.textContent = "\"Meals you'll remember. Moments you'll relive.\"";
    quote.style.position = 'absolute';
    quote.style.fontSize = "2.5vw";
    quote.style.fontStyle = "italic";
    quote.style.fontWeight = "600";
    quote.style.textAlign = "center";
    quote.style.color = "#2c2c2c";
    quote.style.backgroundColor = "rgba(248, 247, 240, 0.90)";
    quote.style.padding = "20px 30px";
    quote.style.borderRadius = "10px";
    quote.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
    quote.style.maxWidth = "80%";
    quote.style.zIndex = "10";
    quote.style.lineHeight = "1.4";
    quote.style.border = "2px solid rgba(200, 122, 91, 0.3)";
    quote.style.alignSelf = "start";
    quote.style.marginTop = "15vh";



    // Add elements to container
    heroContainer.appendChild(img1);
    heroContainer.appendChild(img2);
    heroContainer.appendChild(quote);

    // Add container to content
    content.appendChild(heroContainer);
}






function addEventListeners() {
    const content = document.querySelector("#content");
    const navs = document.querySelector("#navs");

    //event delegation
    navs.addEventListener("click", (e) => {
        if (e.target.classList.contains("nav")) {
            clear(content);
            for (let child of navs.children) {
                child.classList.remove("selected");
            }
            displayNewPage(e.target);
        }
    });


}

function clear(content) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
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

    buttonClicked.classList.add('selected');

}

addEventListeners();
displayLandingPage();
