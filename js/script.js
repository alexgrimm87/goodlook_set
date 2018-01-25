$(document).ready(function(){ 

$('ul.tabs-caption').on('click', 'li:not(.active)', 
  function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
});
 
$(function(){
  var purchaseCount = 2500;
  $("#purchase-counter").html(purchaseCount);
  $("#purchase").keyup(function() {
  var revText = this.value.length;
    if (this.value.length > purchaseCount)
        {
        this.value = this.value.substr(0, purchaseCount);
        }
    var cnt = (purchaseCount - revText);
    if(cnt <= 0){$("#purchase-counter").html('0');}
    else {$("#purchase-counter").html(cnt);}
  });
});

$(function(){
  var returnCount = 2500;
  $("#return-counter").html(returnCount);
  $("#return").keyup(function() {
  var revText = this.value.length;
    if (this.value.length > returnCount)
        {
        this.value = this.value.substr(0, returnCount);
        }
    var cnt = (returnCount - revText);
    if(cnt <= 0){$("#return-counter").html('0');}
    else {$("#return-counter").html(cnt);}
  });
});

$(function(){
  var paymentCount = 2500;
  $("#payment-counter").html(paymentCount);
  $("#payment").keyup(function() {
  var revText = this.value.length;
    if (this.value.length > paymentCount)
        {
        this.value = this.value.substr(0, paymentCount);
        }
    var cnt = (paymentCount - revText);
    if(cnt <= 0){$("#payment-counter").html('0');}
    else {$("#payment-counter").html(cnt);}
  });
});

$("#form").validate({
  errorElement: "em",
  rules: {
    name: {
      required: true,
      minlength: 3
    },
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: {
      required: 'Заполните поле',
      minlength: 'Длина должна быть не менее 3х символов'
    },
    email: {
      required: 'Заполните поле'
    }
  }
});

$("#phone").mask("+9 999 9999999");

});