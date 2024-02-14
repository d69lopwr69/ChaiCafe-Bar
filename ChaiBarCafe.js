const slideBar = document.getElementById('slide-bar');
const menu = document.getElementById('hamburger-menu');
const close = document.getElementById('close');

menu.addEventListener('click', () => {
    slideBar.style.transform = 'translateX(0)';
    menu.style.display = 'none' ;
    close.style.display = 'flex';
});

close.addEventListener('click', () => {
    slideBar.style.transform = 'translateX(-100%)';
    menu.style.display = 'flex' ;
    close.style.display = 'none';
});

slideBar.addEventListener('click', () => {
    if (slideBar.style.transform = 'translateX(0%)') {
        slideBar.style.transform = 'translateX(-100%)';
        menu.style.display = 'flex';
        close.style.display = 'none';
    }
});

// JavaScript for footer
const paraLast = document.getElementById('para-footer');

function updateYear() {
    const year = new Date().getFullYear();
    paraLast.innerHTML = `© ${year} ChaiBar Cafe. All rights reserved.`;
}

updateYear(); // Call the function initially to set the footer text

setInterval(updateYear, 1000); // Update the footer text every second
