let budget =document.getElementById('budget')
let balancevalue=document.getElementById('balancevalue')

function add_balance(){
    balancevalue.innerText=budget.value-total_value.innerText
}

var apple = 10
var mango  =20
var banana  =5



let addApple = document.getElementById('addApple')
let addMango = document.getElementById('addMango')
let addBanana = document.getElementById('addBanana')

let minusApple = document.getElementById('minusApple')
let minusMango = document.getElementById('minusMango')
let minusBanana= document.getElementById('minusBanana')

let appleQty =document.getElementById('appleQty')
let mangoQty =document.getElementById('mangoQty')
let bananaQty =document.getElementById('bananaQty')


let total_value =document.getElementById('total_value')

// apple quantity inc and dec
addApple.onclick=function(){
    if(balancevalue.innerText>0 && balancevalue.innerText>=apple){
    appleQty.innerText=parseInt(appleQty.innerText)+1
    total_value.innerText=parseInt(total_value.innerText)+1*apple
    balance_add(apple)
    }

}
minusApple.onclick=function(){
    if(total_value.innerText>0 && appleQty.innerText>0){
    applecon.innerText=parseInt(appleQty.innerText)-1
    total_value.innerText=parseInt(total_value.innerText)-1*apple
    balance_minus(apple)
    }

}

// mango quantity inc and dec


addMango.onclick=function(){
    if(balancevalue.innerText>0 && balancevalue.innerText>=mango){
    mangoQty.innerText=parseInt(mangoQty.innerText)+1
    total_value.innerText=parseInt(total_value.innerText)+1*mango
    balance_add(mango)
    }

}
minusMango.onclick=function(){
    if(total_value.innerText>0 && mangoQty.innerText>0){
    mangoQty.innerText=parseInt(mangoQty.innerText)-1
    total_value.innerText=parseInt(total_value.innerText)-1*mango
    balance_minus(mango)
    }


}

// banana quantity inc and dec
addBanana.onclick=function(){
    if(balancevalue.innerText>0 && balancevalue.innerText>=banana){
    bananaQty.innerText=parseInt(bananaQty.innerText)+1
    total_value.innerText=parseInt(total_value.innerText)+1*banana
    balance_add(banana)
    }
    
}
minusBanana.onclick=function(){
    if(total_value.innerText>0 && bananaQty.innerText>0){
    bananaQty.innerText=parseInt(bananaQty.innerText)-1
    total_value.innerText=parseInt(total_value.innerText)-1*banana
    balance_minus(banana)
    }


}


function balance_minus(value){
    if(total_value.innerText>=0){
    balancevalue.innerText=parseInt(balancevalue.innerText)+value
    }
}
function balance_add(value){
    if(value<=balancevalue.innerText){
    balancevalue.innerText=parseInt(balancevalue.innerText)-value
    }
}