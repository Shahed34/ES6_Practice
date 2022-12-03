//  just using break or continue
var numbers=[0,2,5,3,6,9,8,7,8,5,8];

for(let number of numbers){
    // complex condition ar use kora lage nay
    if(number===6){
        break;
    }
    //console.log(number);
}
// for findin Index 
let numberForMap=[10,50,60,9,50,85,65,25,26,90,80];

const findind=numberForMap.findIndex(number=>number===80);
console.log(findind);

