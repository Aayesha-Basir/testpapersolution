//Displaying the even no only from the array of numbers
let num=[0,1,2,3,4,-4,5,-5,6,7,8,9,10,-1,-2,-3]
let pusharray=[];
let func= num.forEach(function(a){
  if(a % 2 === 0 && a>=0){
    pusharray.push(a);
  }
})
console.log(pusharray)
let display=document.getElementById('one');
display.innerHTML="Displaying even no from the list of num:"+" "+pusharray.join(',');



//calculating the total sum of an array
let calculate= num.reduce(function(a,b){
           return a+b
});
console.log("The total sum of num in an array is"+" "+ calculate);
let show=document.getElementById('two');
show.innerHTML="The total sum of num in an array is"+" "+ calculate;


//Filtering all the -ve no and displaying only +ve no as output
let filter=num.filter(function(b){
 return b>=0
})
console.log("After filtering the data we get:"+" "+filter);
let hide=document.getElementById('three');
hide.innerHTML="After filtering the data of num we get:"+" "+filter

//palindrome function
let str="welcome";
let rev=str.split("").reverse().join("");
console.log("Data:"+ " "+str)
let check=function(str){
    console.log("reverseData:"+""+rev);
    if(rev===str){
        return true
    }
    else{
        return false
    }
}
console.log(check(str));
let hello=document.getElementById('five');
hello.innerHTML="Data:"+" "+str+" ,"+"reverse:"+" "+rev+" ,"+"Palindrome Output:"+" "+check(str);


//split("") convert the each string in an items of an array whereas split() convert the string in a single item in array
console.log("SplitData:"+" "+str.split(""));

//join()is used in array to add the (, or * or anything) in whole items. Here in our case it is used 
let joined= ["n","o","n"];
let out=joined.join("");
let revstr=out.split("").reverse().join("");
let fun=function(joined){
    //console.log("Join function used to convert the array in a string:"+" "+out);
    if(revstr===out){
        return true
    }
    else {
        return false
    }
}
console.log(fun(joined))
let hey=document.getElementById('four');
hey.innerHTML="Data:"+" "+out+" ,"+"reverse:"+" "+revstr+" ,"+"Palindrome Output:"+" "+fun(joined);



