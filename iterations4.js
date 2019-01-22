
let num1 = 47
let count = 0

while(num1 > 1){
    if(num1 % 3 === 0){
        num1 = num1 / 3;
    
    }
    else{
        num1 = num1+1;
    }
    document.write(num1 + " ");
    count++
}
document.write(count);