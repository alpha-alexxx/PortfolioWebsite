/*
####################################
#       author: Ahmed Zougari      #
#       follow: @zougari47         #
####################################


This was a short example, you can add your custome validtion like check email with Regular expressions.
happy coding.
*/

document.querySelector('button').addEventListener('click', (e)=>{
    e.preventDefault();
    const contactForm = document.querySelector('#form');
    const name = document.querySelector('[name="name"]');
    const email = document.querySelector('[name="email"]');
    const phone = document.querySelector('[name="phone"]');
    const message = document.querySelector('[name="content"]');
    // validation before sending the data
    if(name.value.length===0 || name.value.length===0 || name.value.length===0){
      alert('please fill the inputs')
    }else{
      let data = new FormData(contactForm);  
      fetch("_url_here", { method: "POST", body: data });
      alert('Thank you. your form was submited');
      contactForm.reset()
    }
  })