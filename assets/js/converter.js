const buy_rate = "8.16";
const sell_rate = "7.53";

var vm1 = new Vue({
  el: '#buyU',
  data:{
    usdt: 1,
    hkd: buy_rate,
  },
  watch: {
    usdt: function (value){
      this.hkd = value * buy_rate;
    },
    hkd: function (value){
      this.usdt = value / buy_rate;
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
        this.hkd = value * sell_rate;
      },
      hkd: function (value){
        this.usdt = value / sell_rate;
      }
    }
  });

document.getElementById("current_buy_1").innerHTML = buy_rate;
document.getElementById("current_buy_2").innerHTML = buy_rate;
document.getElementById("current_sell_1").innerHTML = sell_rate;
document.getElementById("current_sell_2").innerHTML = sell_rate;