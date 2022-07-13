const buy_rate = "8.16";
const sell_rate = "7.53";

const input_currency_1 = document.querySelector('#input_currency_1');
const output_currency_1 = document.querySelector('#output_currency_1');
const input_amount_1 = document.querySelector('#input_amount_1');
const output_amount_1 = document.querySelector('#output_amount_1');

input_currency_1.addEventListener('change', compute_1);
output_currency_1.addEventListener('change', compute_1);
input_amount_1.addEventListener('input', compute_1);
output_amount_1.addEventListener('input', compute_1);

document.getElementById("output_amount_1").value = buy_rate;
document.getElementById("current_buy_1").innerHTML = buy_rate;
document.getElementById("current_buy_2").innerHTML = buy_rate;
//document.getElementById("goBuy").addEventListener("click", compute_1);

function compute_1(){
    const new_rate_1 = buy_rate;
    output_amount_1.value = (input_amount_1.value * new_rate_1).toFixed(2);
}

//compute_1();

const input_currency_2 = document.querySelector('#input_currency_2');
const output_currency_2 = document.querySelector('#output_currency_2');
const input_amount_2 = document.querySelector('#input_amount_2');
const output_amount_2 = document.querySelector('#output_amount_2');

input_currency_2.addEventListener('change', compute_2);
output_currency_2.addEventListener('change', compute_2);
input_amount_2.addEventListener('input', compute_2);
output_amount_2.addEventListener('input', compute_2);

document.getElementById("output_amount_2").value = sell_rate;
document.getElementById("current_sell_1").innerHTML = sell_rate;
document.getElementById("current_sell_2").innerHTML = sell_rate;
//document.getElementById("goSell").addEventListener("click", compute_2);

function compute_2(){
    const new_rate_2 = sell_rate;
    output_amount_2.value = (input_amount_2.value * new_rate_2).toFixed(2);
}