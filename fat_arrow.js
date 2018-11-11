// var a = {
//   name: 'duc',
//   run: function(){
//     var run2 = function(){
//       console.log(this.name);
//     }
//     run2();
//   }
// };
// a.run();

var a = {
  name: 'duc',
  run: function(){
    var run2 = function(){
      console.log(this.name);
    }
    run2.bind(a)();// bind trả về 1 hàm nên bind(a)()
  }
};
a.run();

var a = {
  name: 'duc',
  run: function(){
    var run2 = function(){
      console.log(this.name);
    }.bind(a);
    run2();
  }
};
a.run();// this là context trong function
var a = {
  name: 'duc',
  run: function(){
    var that = this;
    var run2 = function(){
      console.log(that.name);
    }
    run2();
  }
};
a.run();

// 
var a = {
  name: 'duc',
  run: function(){
    var run2 = () => {
      console.log(this.name);
    }
    run2();
  }
};
a.run();
// cái arrow function expression không có context ($this)


var a = {
  foo: 'bar',
  run: function(){
    setTimeout(
         function(){
        console.log(this.foo);
      }.bind(this),2000);
  }
};
a.run();