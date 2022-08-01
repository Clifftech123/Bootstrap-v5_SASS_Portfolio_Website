const modal = document.querySelector('.mod'),
 btn =document.getElementById('modalbnt'), close = document.querySelector('.close');
  
//BTN EVENT LISTENER
btn.addEventListener('click',openModal);
close.addEventListener('click',closeModal);
mod.addEventListener('click',closeModal);

//FUNCTIONS


// open modal function
function openModal(e){
    e.preventDefault();
    modal.style.display = "block";
}

// close modal function
function closeModal(){ 
    modal.style.display = "none";
}
