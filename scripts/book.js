const mainName = document.querySelector('#main-name');

const mainNameLabel_1 = document.createElement('label');
const mainNameInput_1 = document.createElement('input');
const labelText = document.createTextNode('Прізвище автора');
const initialsLabel_1 = document.createElement('label');
const initialsInput_1 = document.createElement('input');


function getOption(el)
  {
   let option = el.options[el.selectedIndex].value;
   console.log(option)
   for (let i = 1; i < option; i++) {
   	mainNameLabel_1.appendChild(labelText);
  //  mainNameInput_1.appendChild();
    initialsLabel_1.appendChild(labelText);
   // initialsInput_1.appendChild();
   }
  }
//numAuthors.addEventListener('bluer', createField);

/*
function createField (el){
  if (el.options[el.selectedIndex].value == '2') {
   // mainNameLabel_1.appendChild(labelText);
  //  mainNameInput_1.appendChild();
   // initialsLabel_1.appendChild(labelText);
  //  initialsInput_1.appendChild();
  console.log('1')
  }
  console.log('2')
}
*/