// Reverse the Words
let sen = "Code challenges ignite minds"
let new_sen=[]
for(let itr=sen.length,n=0;itr>=0;itr--,n++){
    new_sen[n]=sen[itr];
}
console.log(new_sen.join(""));

// Find Vowel Count

let aconunt=0,ecount=0,ocount=0,icount=0,ucount=0
for(let itr = 0;itr<new_sen.length;itr++){
    if(new_sen[itr]=="e"||new_sen[itr]=="u"||new_sen[itr]=="i"||new_sen[itr]=="o"||new_sen[itr]=="a"){
    aconunt++;
    
}}

console.log("count of vowle is:"+aconunt);



// //  Get the Square of the Vowel Count


let c3=aconunt*aconunt
console.log(c3);



// Find the Nth Character in the Secret Word
let secret ="Process"
let N = 0;
    N=((c3)%(secret.length) );
console.log(N);
console.log(secret[N-1]);

console.log("the answer RunTimeERROR");
    // the answer of the Code Hunt Challenge:1 is {RunTimeERROR}
