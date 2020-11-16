/*
var goods = [{id: 1, name: "Цельнометаллическая шестеренка: Отмщение", textPrice: "550 руб.", price: 550},
			 {id: 2, name: "Аид", textPrice: "450 руб.", price: 450},
			 {id: 3, name: "Врата Балдура 3", textPrice: "1800 руб.", price: 1800}
			];
*/

var counter = 0;
var goodsCounterElement = document.getElementById('counter');
var itemsList = document.getElementById('itemsList');
var ids = [];
var items = [];

var quantity = 0;

let itemBlock = document.createElement('div');
itemBlock.className = 'item-block'

function addItemToCart(id, title, price) {
	counter++;
	goodsCounterElement.innerText = counter;
	
	items.push({
		id: id,
		title: title,
		price: price,
	});
	if (ids.includes(id)) {
		quantity++
	} else {
		ids.push(id);	
		let itemBlock = document.createElement('div');
		itemBlock.className = 'item-block'
		itemBlock.id = 'Game'+id;
		itemsList.appendChild (itemBlock);
		itemBlock.innerHTML = title + ' ' + price;
	};
}

function popup() {
  document.querySelector("div.items-list-background").style.visibility = 'visible';
}

function popupQuit() {
  document.querySelector("div.items-list-background").style.visibility = 'hidden';
}