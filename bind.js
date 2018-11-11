// var mouse = {
// 	name: 'Mickey',
// 	sayHi: function(){
// 		console.log('hi, my name is', this.name);
// 	}
// }

// var say = mouse.sayHi.bind(mouse);

// var cat = {
// 	name: 'tom';
// }

// var say = cat.sayHi.bind(cat);
//method bind tạo ra một function mới và set thánh biến cat

var btn = document.getElementById('btn');

var mouse = {
	name: ' Mickey',
	sayHello: function(){
		alert('My name is' + this.name);
	}
};

btn.addEventListener('click', mouse.sayHello.bind(mouse));