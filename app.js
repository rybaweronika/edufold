const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

/*------------------Form -------------- */

window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  };
/*function sendEmail() {
     Email.send({
         SecureToken: "cc93f76c-290d-4827-b3d2-761e9399e0aa",
         To : 'wwm.ryba@gmail.com',
         From : document.getElementById("email").value,
         Subject : "New Contact Form Enquiry",
         Body :" Name: " + document.getElementById("name").value
                 + " <br> Email: " + document.getElementById("email").value
                 + " <br> Subject: " + document.getElementById("subject").value
                 + " <br> Message: " + document.getElementById("message").value
             }).then(
     message => alert("Message Sent Succesfully")
      ).reset();
      
      return false;
 } */

