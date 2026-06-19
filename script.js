// เงินฉันเหลือ 40%
function calculateMyMoney(){


let money =
Number(document.getElementById("myMoney").value);


// คำนวณจาก 40%
let state = money * 1.5;


// จำกัดรัฐไม่เกิน 200
state = Math.min(state,200);


// ยอดซื้อรวม
let total = money + state;



document.getElementById("myResult").innerHTML =

`
เงินฉัน ${money} บาท <br>
ซื้อของรวมได้ ${total.toFixed(2)} บาท <br>
รัฐออก ${state.toFixed(2)} บาท
`;

}





// ราคาของ
function calculateProduct(){


let price =
Number(document.getElementById("productPrice").value);


// รัฐออก 60% แต่ไม่เกิน 200
let state = Math.min(price * 0.6, 200);


// เราจ่ายส่วนที่เหลือ
let me = price - state;



document.getElementById("productResult").innerHTML =

`
ราคาของ ${price} บาท <br>
🏛️ รัฐออก ${state.toFixed(2)} บาท <br>
👤 เราจ่าย ${me.toFixed(2)} บาท
`;

}




// เงินรัฐเหลือ
function calculateState(){


let state =
Number(document.getElementById("stateMoney").value);


// จำกัดไม่เกิน 200
state = Math.min(state,200);



let total = state / 0.6;


document.getElementById("stateResult").innerHTML =

`
รัฐเหลือ ${state} บาท <br>
ซื้อของรวมได้ ${total.toFixed(2)} บาท<br>
เราจ่าย ${(total - state).toFixed(2)} บาท
`;

}