document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const inputs = document.querySelectorAll('input, textarea');
    const messages = document.querySelectorAll('.index');
    const globalMessage = document.querySelector('.message');
    form.addEventListener('submit', (event)=> {
        event.preventDefault();
        let isValid = true;

        inputs.forEach((input, index) => {
                input.classList.add('animate-3')
                if (input.value.trim() === "") {
                        input.classList.add('error');
                        messages[index].classList.add('block');
                        messages[index].classList.remove('none');
                        isValid = false;
                }
                else{
                        input.classList.remove('error');
                        messages[index].classList.add('none');
                        messages[index].classList.remove('block');
                }
        });

        if (isValid) {
                globalMessage.classList.add('none');
                globalMessage.classList.remove('block');
                form.submit(); 
        }
        else {
                globalMessage.classList.add('block');
                globalMessage.classList.remove('none');
        }
  });
});

