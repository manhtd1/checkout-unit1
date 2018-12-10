const begin = Date.now()
console.log('start',begin);
function add1(a,b){
    setTimeout(()=>{
        console.log(a+b)
        let end= Date.now()-begin;
        console.log(end)
    },1000)
}

function add2(a,b){
    setTimeout(()=>{
        console.log(a+b)
        let end= Date.now()-begin;
        console.log(end)
    },2000)
}
function add3(a,b){
    setTimeout(()=>{
        console.log(a+b)
        let end= Date.now()-begin;
        console.log(end)
    },3000)
}
add1(4,4)
add2(3,4)
add3(2,4)
