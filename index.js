const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('nav');
document.getElementById('close--btn').addEventListener('click', closeMenu)
const menuItem = document.querySelectorAll('.menu--item');

// display menu function
menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
    console.log(menuItem)
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