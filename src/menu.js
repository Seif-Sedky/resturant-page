import menuImg from './imgs/menu.png'

function displayMenu() {
    const content = document.querySelector("#content");
    let menu = document.createElement('img');
    menu.src = menuImg;

    content.style.display = 'flex';
    content.style.justifyContent = 'center';
    content.style.alignItems = 'center';

    content.appendChild(menu);

}

export default displayMenu;