'use strict';
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const closeModal = () =>{
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
}
const openModal = () => {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');

};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click',closeModal);
document.addEventListener('keydown',(e)=>{
    if(e.key=== 'Escape' && !modalWindow.classList.contains('hidden'))
    {
       closeModal();
    }
})