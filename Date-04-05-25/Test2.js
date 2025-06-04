// Find the Largest Prime Number in an Array
    let arr = [12, 5, 18, 7, 21, 17, 9, 29, 33, 3];
    let max=0,n=0;
    function isprime(n){
        let count=0;
        for(let itr=1;itr<=n;itr++){
            if(n%itr==0){
                count++
                if(count>2){
                    return false
                }
            }
            
        }
        return true
    }
    for(let itr =0;itr<=arr.length;itr++){
        if(isprime(arr[itr])){
            n=arr[itr];
            if(n>max){
                max = n;
            }
        }
    }
    console.log(max);
    
    let temp=0,sum=0
    while(max!=0){
         temp=Math.floor(max%10);
         sum+=temp;
         max=Math.floor(max/10);
    }
    console.log(sum);

    let sec="Innovation"
    c3=(sum%(sec.length))
    console.log(c3);
    console.log(sec[c3-1]);
    

    console.log("Index is the answer");
    
    
    // the answer of the Code Hunt Challenge:2 is {index}