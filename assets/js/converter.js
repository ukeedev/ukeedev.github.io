const buy_rate = "12.34";
const sell_rate = "56.78";

var vm1 = new Vue({
  el: '#buyU',
  data:{
    usdt: 1,
    hkd: buy_rate,
  },
  watch: {
    usdt: function (value){
      this.hkd = parseFloat((value * buy_rate).toPrecision(5));
    },
    hkd: function (value){
      this.usdt = parseFloat((value / buy_rate).toPrecision(5));
    }
  }
});

var vm2 = new Vue({
    el: '#sellU',
    data:{
      usdt: 1,
      hkd: sell_rate,
    },
    watch: {
      usdt: function (value){
        this.hkd = parseFloat((value * sell_rate).toPrecision(5));
      },
      hkd: function (value){
        this.usdt = parseFloat((value / sell_rate).toPrecision(5));
      }
    }
  });

//document.getElementById("current_buy_1").innerHTML = buy_rate;
//document.getElementById("current_buy_2").innerHTML = buy_rate;
//document.getElementById("current_sell_1").innerHTML = sell_rate;
//document.getElementById("current_sell_2").innerHTML = sell_rate;