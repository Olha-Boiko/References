var modalWindow = {
    _block: null,
    _win: null,
  initBlock: function() {
        _block = document.getElementById('blockscreen'); //Получаем наш блокирующий фон по ID

        //Если он не определен, то создадим его
        if (!_block) {
            var parent = document.getElementsByTagName('body')[0]; //Получим первый элемент тега body
            var obj = parent.firstChild; //Для того, чтобы вставить наш блокирующий фон в самое начало тега body
            _block = document.createElement('div'); //Создаем элемент div
            _block.id = 'blockscreen'; //Присваиваем ему наш ID
            parent.insertBefore(_block, obj); //Вставляем в начало
            _block.onclick = function() { modalWindow.close(); } //Добавим обработчик события по нажатию на блокирующий экран - закрыть модальное окно.
        }
        _block.style.display = 'inline'; //Установим CSS-свойство
    },
  initWin: function(width, html) {
        _win = document.getElementById('modalwindow'); //Получаем наше диалоговое окно по ID
        //Если оно не определено, то также создадим его по аналогии
        if (!_win) {
            var parent = document.getElementsByTagName('body')[0];
            var obj = parent.firstChild;
            _win = document.createElement('div');
            _win.id = 'modalwindow';
            _win.style.padding = '0 0 5px 0';
            parent.insertBefore(_win, obj);
        }
        _win.style.width = width + 'px'; //Установим ширину окна
        _win.style.display = 'inline'; //Зададим CSS-свойство

        _win.innerHTML = html; //Добавим нужный HTML-текст в наше диалоговое окно

        //Установим позицию по центру экрана

        _win.style.left = '50%'; //Позиция по горизонтали
        _win.style.top = '50%'; //Позиция по вертикали

        //Выравнивание по центру путем задания отрицательных отступов
        _win.style.marginTop = -(_win.offsetHeight / 2) + 'px';
        _win.style.marginLeft = -(width / 2) + 'px';
    },
  close: function() {
        document.getElementById('blockscreen').style.display = 'none';
        document.getElementByIdt('modalwindow').style.display = 'none';
    },
  show: function(width, html) {
        modalWindow.initBlock();
        modalWindow.initWin(width, html);
    }
  }
/*
// my code
const blocks = document.querySelectorAll('.source');

const modalWindow = {
	bcGround: null,
	field: null,
	initBcGround: function (){
                  if (!bcGround) {
										let element = document.body.firstChild;
										bcGround = document.createElement('div');
										bcGround.id = 'bcGround';
										document.body.insertBefore(bcGround, element);
									} else {
										bcGround = document.querySelector('#bcGround');
									};
								},
	initField: function (width, html) {

							if (!field) {
								let element = document.body.firstChild;
								field = document.createElement('div');
								field.id = 'modalwindow';
								document.body.insertBrefor(field, element);
							} else {
								field = document.querySelector('#modalwindow');
							};
							field.style.width = width + 'px';
							field.style.display = 'inline';
							field.innerHTML = html;
							field.style.left = '50%';
							field.style.top = '50%';

	},
	close: function () {
					document.querySelector('#bcGround').style.display = 'none';
					document.querySelector('#modalwindow').style.display = 'none';
				},
	show: function (width, html) {
					modalWindow.initBcGround();
					modalWindow.initField();
	}
};

//blocks[0].addEventListener('click', modalWindow.show([600], ['html-текст']));

/*
onclick="modalWindow.show([width], [html-текст])







            _win.style.padding = '0 0 5px 0';


        //Выравнивание по центру путем задания отрицательных отступов
        _win.style.marginTop = -(_win.offsetHeight / 2) + 'px';
        _win.style.marginLeft = -(width / 2) + 'px';
    },*/
