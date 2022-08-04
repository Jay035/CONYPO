const preloader = document.getElementById('preloader');
const menu = document.querySelector('.mobile--menu');
const menuBtn = document.querySelector('nav');
const menuItem = document.querySelectorAll('.menu--item');
const modal = document.getElementById('form__submit--modal');
const inputField = document.querySelectorAll('input');
const donateButtons = document.querySelectorAll('.donate');

// EVENT LISTENERS
document.getElementById('close--btn').addEventListener('click', closeMenu);
document.getElementById('submit').addEventListener('click', submitForm);

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
        console.log('click')
        showDonateModal();
    })
})

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let fullName = id('name'),
    email = id('email'),
    StateOfOrigin = id('StateOfOrigin'),
    LGA = id('LGA'),
    StateOfResidence = id('StateOfResidence'),
    City = id('city'),
    PhoneNo = id('PhoneNo'),
    errorMessage = classes('error');

    PhoneNo.value.maxLength = 11;

// submit form function
function submitForm(e){
    e.preventDefault();

        if(fullName.value === "" || email.value === "" || StateOfOrigin.value === "" || LGA.value === "" || StateOfResidence === "" || City.value === "" || PhoneNo.value === ""){
            inputEmpty();
        }
        else if(fullName.value !== "" && email.value !== "" && StateOfOrigin.value !== "" && LGA.value !== "" && StateOfResidence !== "" && City.value !== "" && PhoneNo.value !== ""){
            
            let params = {
                name : fullName.value,
                email : email.value,
                StateOfOrigin : StateOfOrigin.value,
                LGA : LGA.value,
                StateOfResidence : StateOfResidence.value,
                City : City.value,
                PhoneNo: PhoneNo.value
            }
            emailjs.send("service_8zy8chf","template_6bq1uj4", params)
                .then(res => {
                    success();
                    // clear input values after form has been submitted
                    document.getElementById('modal__donate--button').addEventListener('click', () => {
                        inputField.value = ""
                    })
                }).catch(
                    error()
                )
        }
        else{
            // success();
            // errorMessage[serial].textContent = '';
            // id.style.borderBottom = '2px solid green';
            // e.returnValue = true;
        }
}
// success modal
function success(){
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal--content">
            <p>Welcome to the coalition of Nigerian youths for Peter Obi. Pls invite your family and friends to join us in the fight for a better Nigeria. Also follow our social media accounts to stay informed on all activities of the group.</p>
            <a href="" id="modal__donate--button" class="donate">DONATE</a>
            <!-- social-media-links -->
            <div id="modal__social__media--links" class="social__media--links">
                <a href=""><i class="ri-facebook-box-line"></i></a>
                <a href=""><i class="ri-twitter-fill"></i></a>
                <a href=""><i class="ri-instagram-fill"></i></a>
            </div>
        </div>
    `;
    
    swal({
        // title: "YAY!",
        content: modal,
        icon: "success",
        button: "OKAY",
    });
}

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

function inputEmpty(){
    swal({
        title: "Oops...!",
        text: "Input fields cannot be empty",
        icon: "error",
        button: "OKAY",
    });
}