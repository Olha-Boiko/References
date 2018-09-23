const modal = document.querySelector("#modal-window");
const modalOverlay = document.querySelector("#modal-overlay");
const closeButton = document.querySelector("#close-button");
const openModal = document.getElementsByClassName('source');
const authorList = document.querySelector('#authorList');
const handlingButton = document.querySelector('#handling-button');
const resultField = document.querySelector('#result')

//------Create form-elements----------------

// Add new block with class tmp
function addNameBlock(html) {
  const authorNameLabel = document.createElement('div');
  authorNameLabel.className = "tmp";
  authorNameLabel.innerHTML = (html) ? html : '<lable for="mainName">Прізвище автора:</lable> <input name="mainName" class="main-name" /><lable for="authorName"> Його ініціали:</lable><input name="authorName" class="name" /></br></br>';
  return authorNameLabel;
}
// Clean blocks with class tmp
function removeNameBlocks() {
  const blocks = document.querySelectorAll('.tmp');
  blocks.forEach(function (el){
    el.remove();
  });
}

function runSelect() {
 removeNameBlocks();
 const numberOfAuthors = document.getElementById('number-of-authors').value;
 switch (numberOfAuthors) {
     case '1': authorList.appendChild(addNameBlock());

       break;
     case '2': authorList.appendChild(addNameBlock());
               authorList.appendChild(addNameBlock());

       break;
     case '7': for (let i = 1; i < 7; i++) {
               authorList.appendChild(addNameBlock());
             }
             authorList.appendChild(addNameBlock('<lable for="last-author-main-name">Прізвище ОСТАННЬОГО автора</lable> <input name="last-author-main-name"/><lable>  Його ініціали</lable for="last-author-name"> <input name="last-author-name" class="name" /> </br></br>'));
       break;
     case 'more-then-8': for (let i = 0; i < 6; i++) {
                          authorList.appendChild(addNameBlock());
                         }
                         authorList.appendChild(addNameBlock('<lable for="last-author-main-name">Прізвище ОСТАННЬОГО автора</lable> <input name="last-author-main-name"/><lable>  Його ініціали</lable for="last-author-name"> <input name="last-author-name" class="name" /> </br></br>'));
                         break;
     case 'organisation': authorList.appendChild(addNameBlock('<lable for="organization-name">Назва установи, що підготувала дану працю: <input name="organization-name"/> </br></br>'));
       break;
   }
}


openModal.item(0).addEventListener('click', function (){
  showModalWindow();
  authorList.style.display = 'block';
});

closeButton.addEventListener('click', closeModalWindow);

//-----------Form handling----------------
handlingButton.addEventListener('click', function(){
  let result = document.metaData.mainName.value + ', ' + document.metaData.authorName.value + ' (' + document.metaData.year.value +')' + '. ' + document.metaData.title.value + '. ' + document.metaData.location.value + ": " + document.metaData.publisher.value + '.'
  resultField.appendChild(addResultBlock(result));

  closeModalWindow();
})






function showModalWindow (){
  modal.style.display = 'flex';
  modalOverlay.style.display = 'flex';
}

function closeModalWindow(){
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
function addResultBlock(content) {
  const resultBlock = document.createElement('div');
  resultBlock.className = "refference";
  resultBlock.textContent = (content) ? content : ' ';
   return resultBlock
}
