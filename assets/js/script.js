$(document).ready(function(){
    $("#sell").hide();
    $("#goSell").click(function(){
        $("#buy").hide();
        $("#sell").show();
    });
    $("#goBuy").click(function(){
        $("#buy").show();
        $("#sell").hide();
    });
});

$(document).on('keydown', 'input[pattern]', function(e){
    var input = $(this);
    var oldVal = input.val();
    var regex = new RegExp(input.attr('pattern'), 'g');
  
    setTimeout(function(){
      var newVal = input.val();
      if(!regex.test(newVal)){
        input.val(oldVal); 
      }
    }, 1);
  });