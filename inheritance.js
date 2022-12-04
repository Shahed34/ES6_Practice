class personClassMet {
    constructor(name,age,job){
        this.name=name;
        this.age=age;
        this.job=job
    }
}
// class teachersMet{
//     constructor(name,age,job,sub){
//         this.name=name;
//         this.age=age;
//         this.job=job;
//         this.sub=sub;
        
//     }
// }
// above two class want to inherotate so ,we can do like this blow;
class teacherMet extends personClassMet{
    constructor(name,age,job,sub){
        super(name,age,job);
        this.sub=sub;
    }
}
const teacher=new teacherMet("Rafique",26,"teacher","Math");
console.log(teacher);