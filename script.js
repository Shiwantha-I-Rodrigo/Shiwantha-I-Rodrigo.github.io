const words = ["cybersecurity analyst", "foss fanatic ", "arch aficionado", "checkout my projects below", "security isn’t optional", "monitoring...", "detecting...", "responding!"];
const typingElement = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 120;
const deletingSpeed = 80;
const delayBetweenWords = 1000;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = "# " + currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, delayBetweenWords);
        }
    } else {
        typingElement.textContent = "# " + currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentX = 0;

function getMaxTranslate() {
  const carouselWidth = carousel.scrollWidth;
  const containerWidth = container.clientWidth;
  return carouselWidth - containerWidth;
}

function updateButtons() {
  prevBtn.disabled = currentX <= 0;
  nextBtn.disabled = currentX >= getMaxTranslate();

  prevBtn.style.opacity = prevBtn.disabled ? "0.3" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.3" : "1";
}

nextBtn.addEventListener('click', () => {
  const step = carousel.children[0].offsetWidth + 20; // card + margin
  currentX = Math.min(currentX + step, getMaxTranslate());
  carousel.style.transform = `translateX(${-currentX}px)`;
  updateButtons();
});

prevBtn.addEventListener('click', () => {
  const step = carousel.children[0].offsetWidth + 20;
  currentX = Math.max(currentX - step, 0);
  carousel.style.transform = `translateX(${-currentX}px)`;
  updateButtons();
});

window.addEventListener('resize', () => {
  currentX = Math.min(currentX, getMaxTranslate());
  carousel.style.transform = `translateX(${-currentX}px)`;
  updateButtons();
});

function redirectToPage(link) {
  window.location.href = link;
}

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const pn = document.getElementById("pn");
const project_image = document.getElementById("project_image")
const project_text = document.getElementById("project_text")
const project_btn = document.getElementById("project_btn")
const project_gui_1 = document.getElementById("project_gui_1");
const project_gui_2 = document.getElementById("project_gui_2");

p1.addEventListener('click', () => {
    project_text.textContent = `In 2024, I built a physical home lab that simulates a SOC environment, for gaining hands-on experience with real-world network security. 
    I configured routing protocols such as RIP, OSPF, EIGRP, and BGP, and set up VLAN segmentation and ACLs to keep the network organised and secure. 
    I also deployed VPNs and firewall rules to control access and isolate different network segments. Throughout the project, 
    I analysed network traffic and troubleshot issues, identifying misconfigurations and potential security risks. 
    It was a practical, end-to-end project that deepened my understanding of enterprise networking and cybersecurity.`;
    project_image.src = "res/project1.png";
    project_gui_1.src = "";
    project_gui_2.src = "";
    project_btn.setAttribute('onclick', "redirectToPage('https://github.com/Shiwantha-I-Rodrigo/homelab')");
    project_btn.style.display = 'block';
});

p2.addEventListener('click', () => {
    project_text.textContent = `In 2025, I developed Watch Tower, a SIEM-style web application designed to capture and analyse event logs from across a network. 
    I implemented centralized logging and built logic to aggregate and correlate events, allowing the system to detect anomalies and potential threats. 
    On top of that, I created interactive dashboards to visualise alerts, threat indicators, and incident response data, making it easier to monitor network security in real time. 
    The project gave me hands-on experience with both backend analytics and front-end visualisation in a cybersecurity context.`;
    project_image.src = "res/project2.png";
    project_gui_1.src = "";
    project_gui_2.src = "";
    project_btn.setAttribute('onclick', "redirectToPage('https://github.com/Shiwantha-I-Rodrigo/watch_tower')");
    project_btn.style.display = 'block';
});

p3.addEventListener('click', () => {
    project_text.textContent = `In 2023, I developed ENIGMA, a credential security toolkit designed to strengthen password and file protection. 
    I built a secure, deterministic password generator and integrated file encryption to improve overall credential safety. 
    The project incorporated advanced cryptographic techniques, including memory hardening, to increase the computational effort required for attacks. 
    I also added a password strength evaluation feature to test against common threats like rainbow table attacks, giving users a practical way to assess and improve their security.`;
    project_image.src = "res/project3.png";
    project_gui_1.src = "";
    project_gui_2.src = "";
    project_btn.setAttribute('onclick', "redirectToPage('https://github.com/Shiwantha-I-Rodrigo/enigma')");
    project_btn.style.display = 'block';
});

p4.addEventListener('click', () => {
    project_text.textContent = `I developed a Hotel Reservation & Management Website for Kings Garden View Hotel in Welimada, building a full-stack solution using PHP, JavaScript, SQL, and CSS. 
    The site handles bookings, user management, and secure data storage, with backend logic carefully designed to ensure smooth operation. 
    I also applied secure input validation and handling techniques to protect against common web vulnerabilities, creating a safer and more reliable experience for both staff and guests.`;
    project_image.src = "res/project4.png";
    project_gui_1.src = "";
    project_gui_2.src = "";
    project_btn.setAttribute('onclick', "redirectToPage('https://github.com/Shiwantha-I-Rodrigo/kgvh_2023')");
    project_btn.style.display = 'block';
});

pn.addEventListener('click', () => {
    project_text.textContent = `On the horizon: diving into new experiments that involve wrangling data, outsmarting tricky bugs and building systems so smart they almost think for themselves :) don’t worry, I’ll make sure they stay friendly`;
    project_image.src = "res/projectn.png";
    project_btn.style.display = 'none';
    project_gui_1.src = "";
    project_gui_2.src = "";
});

updateButtons();
typeEffect();