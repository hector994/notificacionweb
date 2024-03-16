let btn = document.querySelector('#envio');
let asunto = document.querySelector('#asunto');
let mensaje = document.querySelector('#mensaje');
btn.addEventListener('click', function (e) {
    e.preventDefault();
    alert("Notificacion enviada")
    asunto.value = "";
    mensaje.value = "";
});
