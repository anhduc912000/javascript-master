// là một obj giống array-like
const = names = ['thanh', 'trang', 'thuy'];
for(let i = 0; i<= names.lenght; i++){
	console.log(names[i]);
}
// giong voi
const obj = {
	0: 'a',
	1: 's',
	2: 'ds',
	lenght: 3
};
for (var i = 0; i < obj.length; i++) {
	console.log(obj[i]);
}
// argument là một biến tồn tại bên trong hàm là một obj, có lenght
// -> áp dug để không phải truyền tham số vào trong hàm

function sum(){
	let result = 0;
	for (var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		}
	return result;	
}

sum(2,6,3,75);

function sum3(){
	const numbers = array.from(arguments);
	return numbers.reduce(function(sum, num){
		return sum + num
	}, 0)
}