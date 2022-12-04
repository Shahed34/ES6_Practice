const person=["abdullha",26,56,"agrabad"];

const [name,age,weight,address]=person;
// console.log(name,age,weight,address);

// In object Destucturing
const persons={
    name:'faroq',
    address:"sholosohor",
    Age:56,
    profession:"Student",
    Email:"ah@gmail.com"
}
const {name:nameObj,address:addressObj,Age:AgeObj,profession:professionObj,Email:EmailObj}=persons;
console.log(nameObj,addressObj,AgeObj,professionObj,EmailObj);

// nested Object

const nestedObj={
    anotherObj:{
        anotherObjNew:{
            title:'Javascript nested Object'
        }
    }
}

const {anotherObj:{anotherObjNew:{title}}}=nestedObj;
console.log(title);