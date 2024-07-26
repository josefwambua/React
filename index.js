// // // var name = 'josef';
// // // name ='JOSEF';
// // // alert(name);

// // // // another way to define a variable, u can use const - constant

// // // const pi = 3.1423;
// // // alert(pi);

// // // // using let
// // // //Works within a scope 
// // // // does not get wasted on the window
// // // if(true){
// // //     let age = 32;
// // //     alert(age);
// // // }

// // // // Template Strings
// // // let fname = 'John';
// // // let lname = 'steve';
// // // let Age = prompt('Guess Johns age')

// // // // string concatenate(fname, lname)
// // // // old way
// // // // let result = fname  +   lname   +  Age  + " years old";
// // // // alert(result);

// // // // new way
// // // let result = `${fname}  ${lname}  is ${Age}  years old`;
// // // alert(result);

// // // // default parameters
// // // function welcome(user, message) {
// // //     alert(`Hello ${user}, ${message}`);

// // // }
// // // welcome("Josef", 'Good morning')

// // // // Arrow functions
// // // // single line arrow functions
// // // let greeting =()=> alert(`hello everyone`);
// // // greeting('Good afternoon');


// // // //multiline arrow functions
// // // let CreateBlog = (title, body) => {
// // //     if(!title){
// // //         throw new Error('A title is missin');
// // //     }
// // //     if(!body){
// // //         throw new Error('Body cant be empty');
// // //     }
// // //     return alert(`${title} - ${body}`);
// // // }

// // // CreateBlog('blog Title', 'blog body');

// // // // Arrow functions and this keyword
// // // let school = {
// // //     // array of school classes
// // //     //propeties
// // //     classes  : ['pre-school', 'Grade one', 'Junior Secondary'],
// // //     // add method
// // //     printWithDash : function() {
// // //         setTimeout(()=> console.log(this.classes.join(' - ')), 3000);

// // //     }

// // // };
// // // school.printWithDash();

// // // object destructuring
// // // let thingsToDo = {
// // //     morning: "Workout",
// // //     afternoon : "Work" ,
// // //     evening : "Code",
// // //     night:  ["sleep", "Dream"]
// // // };
// // // let {morning, afternoon } = thingsToDo;
// // // console.log(morning,'-' ,afternoon);
 
// // // example two
// // let uniStudent = ({name, university}) => {
// //     console.log(`${name} from ${university}`)
// // }
// // uniStudent({
// // name: 'Josef',
// // university : 'KCA'
// // });

// // destructuring an array
// // let [,,firstmountain] = ['Mt.kenya','Mt.Kilimanjaro', 'Mt.Elgon']
// // console.log(firstmountain);

// // Restructuring
// var adventureClimbing = {
//  name :'Everest',
//  height : 8879,
//     output() {
//     console.log(`Mt. ${this.name} is ${this.height} tall.` )
// }
// }
// adventureClimbing.output();
 
// spread Operators normally the three ... to combine two operators to one or two
// on arrays
var mountains = ['everest', 'kenya','kilimanjaro'];
var mountainsFromEa = ['Elgon','Suswa'];
var allmtns = [...mountains,...mountainsFromEa];
console.log(allmtns);

// on objects
var day = {
    breakfast: 'toast with milk',
    lunch : 'chicken with rice curry'
}

var night = {
    dinner : "Mukimo"
}
var picnic ={...day,...night}
console.log(picnic);

// rest
var rivers =['muvwana', 'kyanganga','miu','kyemunzu'];
var [first, ...rest] = rivers;
console.log(rest);


// classes
function Holiday(destination, days){
    this.destination = destination;
    this.days = days;
}
Holiday.prototype.info = function(){
    console.log(this.destination +  " | " + this.days + ' days');
}

 var kca = new Holiday('Uganda', 6);
 console.log(kca.info());


 class School{
    constructor(courses, fee){
        this.courses = courses;
        this.fee = fee;
    }
    info(){
        console.log(`${this.courses} is ${this.fee} per semester `);
    }
 }

 class newCourses extends School{
    constructor(courses, fee, newFee){
        super(courses, fee)
        this.newFee = newFee;
    }
    info(){
        super.info();
        console.log(`and  fee for newCourse is ${this.newFee.join('and your')} `);
    }
 }
const schoolActivities = new newCourses ('Programming',"$45,000", ["modern javascript"]);
schoolActivities.info();