///////////quiz
let cnt1=0
let plus=0
let x=[]
let c=0
while(x.length < 4){
    let a=Math.floor(Math.random()*11)
    for(let i=0 ; i<x.length ;i++){
        if(a==x[i]){
            c++
        }
    }
    if(c<=0){
        x.push(a)
    }
    else{
        c=0
    }
}
while (plus<=4) {
    let r=[]
    let y=[]
    let cnt=0
    let b=parseInt(prompt("enter your number"))
    let baghi=0
    while (b!=0) {
        baghi=parseInt(b%10)
        y.push(baghi)
        b=parseInt(b/10)
    }
    let z=0
    let k=0
    for(let i=y.length-1 ; i>=(y.length)/2;i--){
        k=y[i]
        y[i]=y[z]
        y[z]=k
        z++
    }
    if(y.length<4 || y.length>4){
        y="error"
    }
    for(let i=0 ; i<x.length ;i++){
        if(y[i]==x[i]){
            r.push('+')
        }
        else{
            for(let j=0 ; j<x.length ;j++){
                if(y[i]==x[j]){
                        cnt++
                }
            }
            if(cnt==0){
                r.push('-')
            }
            else{
                r.push('*')
            }
        }
        cnt=0
    }
    console.log(x);
    console.log(r);
    console.log(y);
    for(let i=0 ; i<4 ; i++){
        if(r[i]=='+'){
            plus++
        }
    }
    if(plus==4){
        cnt1++
        break
    }
    else{
        plus=0
        cnt1++
    }
}
console.log(cnt1);