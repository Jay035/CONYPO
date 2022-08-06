const firebaseConfig = {
    apiKey: "AIzaSyD-4IUeNqvpQSt2vVIywR4ZhRAmmTAmcfU",
    authDomain: "conypo-contactform.firebaseapp.com",
    databaseURL: "https://conypo-contactform-default-rtdb.firebaseio.com",
    projectId: "conypo-contactform",
    storageBucket: "conypo-contactform.appspot.com",
    messagingSenderId: "564285993844",
    appId: "1:564285993844:web:5ab9b9dbfbd406f5edb221",
    measurementId: "G-KDZC9MGV9E"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
const contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

// submit form function
function submitForm(e){
    e.preventDefault();

    let fullName = getInputVal('name'),
        email = getInputVal('email'),
        StateOfOrigin = getInputVal('StateOfOrigin'),
        LGA = getInputVal('LGA'),
        StateOfResidence = getInputVal('StateOfResidence'),
        City = getInputVal('city'),
        PhoneNo = getInputVal('PhoneNo');
    
        // save messages
        saveMessages(fullName, email, StateOfOrigin, StateOfResidence, LGA, City, PhoneNo);
        // show success modal
        success();
        // reset form
        document.getElementById('contactForm').reset();

}

function saveMessages(fullName, email, StateOfOrigin, StateOfResidence, LGA, City, PhoneNo){
    let newContactForm = contactFormDB.push();
    newContactForm.set({
        name : fullName,
        email : email,
        StateOfOrigin : StateOfOrigin,
        LGA : LGA,
        StateOfResidence : StateOfResidence,
        City : City,
        PhoneNumber: PhoneNo
    })
}

// function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// success modal
function success(){
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal--content">
            <p>Welcome to the coalition of Nigerian youths for Peter Obi. Pls invite your family and friends to join us in the fight for a better Nigeria. Also follow our social media accounts to stay informed on all activities of the group.</p>
            <!-- social-media-links -->
            <div id="modal__social__media--links" class="social__media--links">
                <a href="https://www.facebook.com/Coalition-of-Nigerian-Youths-for-Peter-Obi-103615315776915/"><i class="ri-facebook-fill"></i></a>
                <a href="https://twitter.com/CONYPO_"><i class="ri-twitter-fill"></i></a>
                <a href="https://www.instagram.com/conypo_org_/"><i class="ri-instagram-fill"></i></a>
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

// show error when any of the input fields is empty
function inputEmpty(){
    swal({
        title: "Oops...!",
        text: "Input fields cannot be empty",
        icon: "error",
        button: "OKAY",
    });
}