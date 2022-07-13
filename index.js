const menu = document.querySelector('.mobile--menu');
const menuBtn = document.querySelector('nav');
const menuItem = document.querySelectorAll('.menu--item');
const modal = document.getElementById('form__submit--modal');
const inputField = document.querySelectorAll('input');

// EVENT LISTENERS
document.getElementById('close--btn').addEventListener('click', closeMenu);
document.getElementById('submit').addEventListener('click', submitForm);

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

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let firstName = id('firstName'),
    email = id('email'),
    StateOfOrigin = id('StateOfOrigin'),
    LGA = id('LGA'),
    StateOfResidence = id('StateOfResidence'),
    City = id('city'),
    PhoneNo = id('PhoneNo'),
    errorMessage = classes('error');

    PhoneNo.maxLength = 11;

// submit form function
function submitForm(e){
    e.preventDefault();

    let validator = (id, serial, message) => {
        if(id.value.trim() === ''){
            errorMessage[serial].textContent = message;
            id.style.borderBottom = '2px solid red';
            // e.returnValue = false;
            inputEmpty();
        }
        else if(firstName.value !== "" && email.value !== "" && StateOfOrigin.value !== "" && LGA.value !== "" && StateOfResidence !== "" && City.value !== "" && PhoneNo.value !== ""){
            
            let params = {
                name : firstName.value,
                email : email.value,
                StateOfOrigin : StateOfOrigin.value,
                LGA : LGA.value,
                StateOfResidence : StateOfResidence.value,
                City : City.value,
                PhoneNo: PhoneNo.value
            }
            emailjs.send("service_bjedmzf","template_2eyl4gh", params)
                .then(res => {
                    // console.log('status', res.OK)
                    success();
                    errorMessage[serial].textContent = '';
                        // clear input values after form has been submitted
                    document.getElementById('modal__donate--button').addEventListener('click', () => {
                        inputField.value = ""
                    })
                }).catch(
                    error()
                )
            // modal.classList.remove('hidden')
        }
        else{
            // success();
            errorMessage[serial].textContent = '';
            id.style.borderBottom = '2px solid green';
            // e.returnValue = true;
        }
    };

    validator(firstName, 0, 'First name can\'t be blank');
    validator(email, 1, 'Email can\'t be blank');
    validator(StateOfOrigin, 2, 'State of origin can\'t be blank');
    validator(LGA, 3, 'LGA can\'t be blank');
    validator(StateOfResidence, 4, 'State of Residence can\'t be blank');
    validator(City, 5, 'City can\'t be blank');
    validator(PhoneNo, 6, 'Phone number can\'t be blank');
    
}

function success(){
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal--content">
            <p>We're glad you've joined us in the fight for a better Nigeria. Please do well to donate to fund our campaign and outreach programs. Also follow us on our social media channels to stay informed on all activities.</p>
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