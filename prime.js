function checkPrime(number){
    let factors = 0;
    for(let i=1;i<=number;i++){
        if(number % i==0){
            factors++;
        }
        return factors;
    }


    if(factors == 2){
        console.log(number , "is Prime Number");
    }else{
        console.log(number, "is not a Prime Number");
    }
}

checkPrime(34);