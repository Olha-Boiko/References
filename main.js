const modal = document.querySelector("#modal-window");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openModal = document.getElementsByClassName('source');
const authorList = document.querySelector('#authorList');
//------create form-elements----------------

// Add new block with class tmp
function addBlock(html) {
  const authorNameLabel = document.createElement('div');
  authorNameLabel.className = "tmp";
  authorNameLabel.innerHTML = (html) ? html : '<lable for="main-name">Прізвище автора:</lable> <input class="main-name" /><lable for="last-author-name"> Його ініціали:</lable><input name="last-author-name" class="name" /></br></br>';
  return authorNameLabel;
}
// Clean blocks with class tmp
function removeBlocks() {
  const blocks = document.querySelectorAll('.tmp');
  blocks.forEach(function(el){
    el.remove();
  });
}

function runSelect() {
 removeBlocks();
 const numberOfAuthors = document.getElementById('number-of-authors').value;
 switch (numberOfAuthors) {
     case '1': authorList.appendChild(addBlock());

       break;
     case '2': authorList.appendChild(addBlock());
               authorList.appendChild(addBlock());

       break;
     case '7': for (let i = 0; i < 7; i++) {
               authorList.appendChild(addBlock());
             }
       break;
     case 'more-then-8': for (let i = 0; i < 6; i++) {
                          authorList.appendChild(addBlock());
                         }
                         authorList.appendChild(addBlock('<lable for="last-author-main-name">Прізвище ОСТАННЬОГО автора</lable> <input name="last-author-main-name"/><lable>  Його ініціали</lable for="last-author-name"> <input name="last-author-name" class="name" /> </br></br>'));
                         break;
     case 'organisation': authorList.appendChild(addBlock('<lable for="organization-name">Назва установи, що підготувала дану працю: <input name="organization-name"/> </br></br>'));
       break;
   }
}


openModal.item(0).addEventListener('click', function (){
  showModalWindow();
  authorList.style.display = 'block';



});








function showModalWindow (){
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
}


closeButton.addEventListener('click', function (){
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
})
