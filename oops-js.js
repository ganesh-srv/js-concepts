
// Here "this" has a contextual scope
let person = {
    name: 'Ganesh',
    greet: function() {
      console.log('Hello, ' + this.name);
    }
  };
  
//   person.greet(); 
  

//   When a function is used as a constructor (i.e., called with the new keyword), this refers to the newly created instance.

function Human(name) {
    this.name = name;
  }
  
  let x = new Human('Ganesh Srv');
//   console.log(x.name);
  


  function greet() {
    console.log('Hello, ' + this.name);
  }
  
  let s = { name: 'John' };
//   greet.call(s);
  

// Usage of call, apply and bind

function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }

let temp  = { name: 'Ganesh' };
// greet.apply(temp, ['Hello', '!']); 


let bindX = greet.bind(temp);
// bindX('Bye','!');