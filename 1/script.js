let counter = 0;
const goodsCounterElement = document.getElementById('counter');
const goodsCounterElementTwo = document.getElementById('menu-counter');
const itemsList = document.getElementById('itemsList');
const items = new Map(); 
const loader = document.querySelector('.loader');
const overlay = document.querySelector(".overlay");

function addItemToCart(id, title, price) {
	counter++;
	goodsCounterElement.innerText = counter;
	goodsCounterElementTwo.innerText = counter;
	if (items.has(id)) {
		items.get(id).quantity++;
	} else {
		items.set(id, {
		title: title,
		price: price,
		quantity: 1,
		gameID: id
		});
	};
}

function openPopup() {
	loader.style.visibility = 'visible';
	setTimeout(function () {
		overlay.style.visibility = 'visible';
		let template = ``;
		items.forEach(({title, price, quantity, gameID})=>{
			template += `
			<div class="item item-${gameID}">
				<span>${title}</span>
				<span>За 1 шт: ${price} руб.</span>
				<span>Кол-во: ${quantity}</span>
				<span>Общая цена: ${price*quantity}</span>
				<div style="height: 10px; width: 10px; background-color: red;" onclick="deleteItem(${gameID})"></div>
			</div>
			`;
		});
	loader.style.visibility = 'hidden';
	itemsList.innerHTML = template;
	}, 2000); 
}

function quitPopup() {
  overlay.style.visibility = 'hidden';
}


function deleteItem (gameID) {
	const currentItem = document.querySelector(".item-"+gameID);
	currentItem.remove();
	counter -= items.get(gameID).quantity;
	goodsCounterElement.innerText = counter;
	goodsCounterElementTwo.innerText = counter;
	items.delete(gameID);
}