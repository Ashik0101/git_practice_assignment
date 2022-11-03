
let string = "jahaj";
function reverse(string){
    let bag="";
    for(let i=string.lengt-1;i>=0;i--){
        bag += string[i];
    }
    return bag;
}
let ans = reverse(string);
if(ans == string){
    console.log(string , "is Palindromic");
}else{
    console.log("Not Palindromic");
}