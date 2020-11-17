/*
const goods = [{id: 1, name: "Цельнометаллическая шестеренка: Отмщение", textPrice: "550 руб.", price: 550},
			 {id: 2, name: "Аид", textPrice: "450 руб.", price: 450},
			 {id: 3, name: "Врата Балдура 3", textPrice: "1800 руб.", price: 1800}
			];
*/

let counter = 0;
const goodsCounterElement = document.getElementById('counter');
const itemsList = document.getElementById('itemsList');
let items = new Map();


function addItemToCart(id, title, price) {
	counter++;
	goodsCounterElement.innerText = counter;
	if (items.has(id)) {
		items.get(id).quantity++;
	} else {
		items.set(id, {
		title: title,
		price: price,
		quantity: 1,
		});

	};
}

function openPopup() {
	let template = ``;
	items.forEach(({title, price, quantity})=>{
		template += `
		<div class="item-block">
			<span>${title}</span>
			<span>За 1 шт: ${price} руб.</span>
			<span>Кол-во: ${quantity}</span>
			<span>Общая цена: ${price*quantity} </span>
		</div>
		`;});
	itemsList.innerHTML = template;
	document.querySelector(".overlay").style.visibility = 'visible';
}

function quitPopup() {
  document.querySelector(".overlay").style.visibility = 'hidden';
}
