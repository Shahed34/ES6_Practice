let number=[41,52,63];
function add(a,b,c){
    const addnum=a+b+c;
    return addnum;
}
const passArgu=add(...number);
console.log(passArgu);
// that means we can make general number on from arry by spreed Operator