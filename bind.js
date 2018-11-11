var mouse = {
	name: 'Mickey',
	sayHi: function(){
		console.log('hi, my name is', this.name);
	}
}

var say = mouse.sayHi.bind(mouse);

var cat = {
	name: 'tom'
}

var say =cat.sayHi.bind(cat);