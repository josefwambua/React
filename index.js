var name = 'josef';
name ='JOSEF';
alert(name);

// another way to define a variable, u can use const - constant

const pi = 3.1423;
alert(pi);

// using let
//Works within a scope 
// does not get wasted on the window
if(true){
    let age = 32;
    alert(age);
}

// Template Strings
let fname = 'John';
let lname = 'steve';
let Age = prompt('Guess Johns age')

// string concatenate(fname, lname)
// old way
// let result = fname  +   lname   +  Age  + " years old";
// alert(result);

// new way
let result = `${fname}  ${lname}  is ${Age}  years old`;
alert(result);

// default parameters
function welcome(user, message) {
    alert(`Hello ${user}, ${message}`);

}
welcome("Josef", 'Good morning')

// Arrow functions
// single line arrow functions
let greeting =()=> alert(`hello everyone`);
greeting('Good afternoon');


//multiline arrow functions
let CreateBlog = (title, body) => {
    if(!title){
        throw new Error('A title is missin');
    }
    if(!body){
        throw new Error('Body cant be empty');
    }
    return alert(`${title} - ${body}`);
}

CreateBlog('blog Title', 'blog body');

// Arrow functions and this keyword
let school = {
    // array of school classes
    //propeties
    classes  : ['pre-school', 'Grade one', 'Junior Secondary'],
    // add method
    printWithDash : function() {
        setTimeout(()=> console.log(this.classes.join(' - ')), 3000);

    }

};
school.printWithDash();