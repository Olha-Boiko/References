const modal = document.querySelector("#modal-window");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openModal = document.getElementsByClassName('source');
const authorList = document.querySelector('#authorList');
//------create form-elements
const authorNameLabel = document.createElement('div');
 authorNameLabel.innerHTML = '<lable for="main-name">Прізвище автора</lable> <input name="main-name" id="main-name"/><lable>  Його ініціали</lable> <input /> </br></br>'
function runSelect() {
const numberOfAuthors = document.querySelector('#number-of-authors').value;
return numberOfAuthors;
}
/*  switch ()
    case :*/


openModal.item(0).addEventListener('click', function (){
  showModalWindow();
  authorList.style.display = 'block';
    switch (strNumber) {
      

    }

  authorList.appendChild(authorNameLabel);

});








function showModalWindow (){
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
}


closeButton.addEventListener('click', function (){
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
})
