const preloader = document.getElementById('preloader');
const menu = document.querySelector('.mobile--menu');
const menuBtn = document.querySelector('nav');
const menuItem = document.querySelectorAll('.menu--item');
const modal = document.getElementById('form__submit--modal');
const inputField = document.querySelectorAll('input');
const donateButtons = document.querySelectorAll('.donate');

// EVENT LISTENERS
document.getElementById('close--btn').addEventListener('click', closeMenu);

// Hide preloader
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        preloader.classList.toggle('loaded');
    }, 2000);
})

// display menu function
menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
})

// close menu function
function closeMenu() {
    menu.classList.remove('active')
}

// close menu when a menu item is clicked on
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu();
    })
})

// show donate modal when donate button is clicked
donateButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        showDonateModal();
    })
})


function showDonateModal(){
    swal({
        title: "Hello!",
        text: "Thanks for your interest in donating to our project fund. Please register by filling out the form and you'll be informed when we start making donations. Collectively our contributions will help us to achieve our goals ❤️",
        // icon: "success",
        button: "OKAY",
    });
}

function error(){
    swal({
        title: "Oops...!",
        text: "Something went wrong....Kindly check your internet connection and try again",
        icon: "error",
        button: "OKAY",
    });
}