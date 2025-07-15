let typed = new Typed("#typed-text", {
      strings: ["Front-end Developer", "Software Engineer", "Programmer"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 500,
      loop: true
    });

    function toggleMenu() {
      const menu = document.querySelector('ul');
      menu.classList.toggle('show');
      const hdr = document.querySelector('header')
    }
  function closeMenu() {
    const menu = document.querySelector('ul');
    menu.classList.remove('show');
    const hdr = document.querySelector('header')
    hdr.style.display = 'none'
    document.body.style.overflow = 'auto';
  }


    const form = document.querySelector('form');

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const errorName = document.querySelector('.errorName');
      const errorEmail = document.querySelector('.errorEmail');

      let isValid = true;
      let regexResult = regex.test(email.value);

      if(name.value.length <= 2){
        errorName.textContent = "Name should be greater than 2 characters";
        isValid = false;
      }

      if(!regexResult){
        errorEmail.textContent = "Invalid Email.";
        isValid = false;
      }

      if(isValid){
        const formData = new FormData(form);

        const scriptURL = 'https://script.google.com/macros/s/AKfycbzS325nMCJW9kTyyrpd2bltOIO7xW0zvUugpx7femxjC3HDa9GcrEQQs1dOsjWI7KyZ/exec';
        
        fetch(scriptURL, {
          method: 'POST',
          body: formData
        })
        .then(res => res.text())
        .then(data => {
          document.getElementById('formSubmitted').textContent = "Message sent successfully."
          form.reset();
        })
        .catch(error => {
          alert('error')
        })
      }
    })