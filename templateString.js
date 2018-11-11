function greeting(name){
  return 'Hi,' + name + "!";

}
//template sring có thể viết biểu thức javascript hàm xuống dòng ...
function greeting2 (name){
  return `hi, ${name}!`;
}
var result = greeting('duc');
console.log(result);
var result2 = greeting2('duc');
console.log(result2);