const btn = document.getElementById('button');
const inputs = document.querySelectorAll('input');
const isSend = document.getElementById('isSend');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.innerHTML = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_jfyhude';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerHTML = 'Enviar';
        inputs.forEach(input => {
          input.value = '';
        })
        isSend.innerHTML = 'Mensaje Enviado'
        setTimeout(() => {
          isSend.innerHTML = ''
        }, 10000);
      }, (err) => {
        btn.innerHTML = 'Enviar';
        isSend.innerHTML = 'ERROR: No enviado'
        setTimeout(() => {
          isSend.innerHTML = ''
        }, 10000);
      });
  });