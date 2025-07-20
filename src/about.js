import './about.css';

function displayAbout() {
    const content = document.querySelector("#content");

    // Main container
    const container = document.createElement('div');
    container.className = 'about-container';

    // Hero section
    const heroSection = document.createElement('div');
    heroSection.className = 'about-hero';

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'About Lostro';
    mainTitle.className = 'about-main-title';

    const subtitle = document.createElement('p');
    subtitle.textContent = 'Where culinary artistry meets warm hospitality';
    subtitle.className = 'about-subtitle';

    heroSection.appendChild(mainTitle);
    heroSection.appendChild(subtitle);

    // Story section
    const storySection = document.createElement('div');
    storySection.className = 'about-story';

    const storyTitle = document.createElement('h2');
    storyTitle.textContent = 'Our Story';
    storyTitle.className = 'about-story-title';

    const storyText = document.createElement('p');
    storyText.innerHTML = `Founded in the heart of the city, Lostro began as a dream to create more than just a dining experience. 
    Our passionate chefs craft each dish with locally-sourced ingredients, creating flavors that tell a story of tradition, 
    innovation, and love. From our intimate dining room bathed in warm candlelight to our carefully curated wine selection, 
    every detail is designed to create moments that linger long after the last bite.`;
    storyText.className = 'about-story-text';

    storySection.appendChild(storyTitle);
    storySection.appendChild(storyText);

    // Contact section
    const contactSection = document.createElement('div');
    contactSection.className = 'about-contact-grid';

    // Contact info card
    const contactCard = document.createElement('div');
    contactCard.className = 'contact-card';

    const contactTitle = document.createElement('h3');
    contactTitle.textContent = 'Visit Us';
    contactTitle.className = 'contact-title';

    const address = document.createElement('div');
    address.className = 'contact-info';
    address.innerHTML = `
        <p><strong>Address:</strong><br>
        123 Culinary Boulevard<br>
        Downtown District<br>
        City, State 12345</p>
        
        <p><strong>Phone:</strong><br>
        (555) 123-4567</p>
        
        <p><strong>Email:</strong><br>
        hello@lostro.restaurant</p>
    `;

    contactCard.appendChild(contactTitle);
    contactCard.appendChild(address);

    // Hours card
    const hoursCard = document.createElement('div');
    hoursCard.className = 'hours-card';

    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours';
    hoursTitle.className = 'hours-title';

    const hours = document.createElement('div');
    hours.className = 'hours-list';
    hours.innerHTML = `
        <p class="hours-item">
            <span><strong>Monday - Thursday</strong></span>
            <span>5:00 PM - 10:00 PM</span>
        </p>
        <p class="hours-item">
            <span><strong>Friday - Saturday</strong></span>
            <span>5:00 PM - 11:00 PM</span>
        </p>
        <p class="hours-item">
            <span><strong>Sunday</strong></span>
            <span>4:00 PM - 9:00 PM</span>
        </p>
        <p class="hours-note">
            Reservations recommended
        </p>
    `;

    hoursCard.appendChild(hoursTitle);
    hoursCard.appendChild(hours);

    contactSection.appendChild(contactCard);
    contactSection.appendChild(hoursCard);

    // Reservation button
    const reservationSection = document.createElement('div');
    reservationSection.className = 'reservation-section';

    const reservationBtn = document.createElement('button');
    reservationBtn.textContent = 'Make a Reservation';
    reservationBtn.className = 'reservation-btn';

    reservationSection.appendChild(reservationBtn);

    // Assemble everything
    container.appendChild(heroSection);
    container.appendChild(storySection);
    container.appendChild(contactSection);
    container.appendChild(reservationSection);

    content.appendChild(container);
}
export default displayAbout;