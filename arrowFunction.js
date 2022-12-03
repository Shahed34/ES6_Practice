const arrowFunc=num=>num*5;
const result=arrowFunc(5);
//console.log(result);

const twoAddingFun=(num1,num2)=>{
    const add1=num1+2;
    const add2=num2+2;
    const bothAdd=add1*add2;
    return bothAdd;
}

const addResult=twoAddingFun(5,5);
// console.log(addResult);

const threePram=(num1,num2,num3)=> num1*num2*num3;
//console.log(threePram(3,3,3));

const moreLineMath=(num1,num2)=>{
    const add1=num1+2;
    const add2=num2+2;
    const bothAdd=add1*add2;
    return bothAdd;
}
console.log(moreLineMath(5,5));
// this keyword use in arrow funtion
const lex6={
    afun:()=>
    {
        console.log(this);
        return ()=>console.log(this);
    }
}
console.log(lex6.afun()());
