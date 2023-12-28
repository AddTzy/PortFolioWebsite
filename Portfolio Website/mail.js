const firebaseConfig = {
    apiKey: "AIzaSyB3EHLsiErAkXshdAmUquZjExDsj4M2fIY",
    authDomain: "contact-me-portfolio-fc876.firebaseapp.com",
    databaseURL: "https://contact-me-portfolio-fc876-default-rtdb.firebaseio.com",
    projectId: "contact-me-portfolio-fc876",
    storageBucket: "contact-me-portfolio-fc876.appspot.com",
    messagingSenderId: "810407294762",
    appId: "1:810407294762:web:49d9cd628331d3db04d053"
  };

firebase.initializeApp(firebaseConfig);

var contactFormDb = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();  
    
    var nameis = getElementVal("namezz");
    var emailid = getElementVal("emailzz");
    var subject = getElementVal("subjectzz");
    var messageInc = getElementVal("messagezz");

    // console.log(name, emailid, subject, messageInc);
    saveMessages(nameis, emailid, subject, messageInc);

    document.querySelector(".alert").style.display = "block"; 

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();
}

const saveMessages = (nameis, emailid, subject, messageInc) => {
    var newContactForm = contactFormDb.push();

    newContactForm.set({
        name:nameis,
        emailid:emailid,
        subject:subject,
        message:messageInc
    })
} 

const getElementVal = (id) => {
    return document.getElementById(id).value;
}