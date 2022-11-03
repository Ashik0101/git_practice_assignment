function checkPrime(num){
    let count = 0;
    for(let i=1;i<num;i++){
        if(num % 2==0){
            count++;
        }
    }
    if(count == i){
        console.log(num , "is Prime Number");
    }else{
        console.log(num, "is not a Prime Number");
    }

}
checkPrime(34);