const frmEmail = document.getElementById("form")
frmEmail.addEventListener("submit",sendEmail)

const serviceId = "service_zw6uwdy"
const templateId = "template_nn3pg6d"
const apiKey = "x7CK8s6bu5DEEWPju"

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail,apiKey)
    .then( (reuslt) => Swal.fire("su mensaje se ha enviado con exito."))
    .catch(error => {
        Swal.fire({
            icon: "error",
            title: "Oopss",
            text : "No ha sido posible enviar el mensaje",
        });
    });
}   