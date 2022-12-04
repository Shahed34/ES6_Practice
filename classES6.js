class child6{
    constructor(name,dob){
        this.name=name;
        this.dob=dob;
    }
    currentAge(){
        console.log(`${this.name} is ${2022-this.dob} years old`);
    }
}
const sultan=new child6('sultan',1995);
const nayem=new child6("nayem",1994);
console.log(sultan.name,sultan.dob);
console.log(sultan.currentAge());
console.log(nayem.currentAge());    