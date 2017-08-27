(function () {
  'use strict';
  console.log('jd init');

  var foo1 = setInterval(function () {
    console.log('foo1');
    
    var box = document.querySelector('.trend-max-min-price');
    if(box) {
      console.clear();
      console.dir(box);

      var foo2 = setInterval(function () {
        console.log('foo2');

        var btn = document.querySelector('#gwd_price_history_btn');
        var e = document.createEvent('HTMLEvents');
        e.initEvent('mouseover', true, false); // 事件的类型，事件是否起泡，是否可以用 preventDefault() 取消事件
        btn.dispatchEvent(e);

        var max = box.querySelector('.t-max-pri').innerHTML;
        var min = box.querySelector('.t-min-pri').innerHTML;

        if(max && min) {
          console.log(max, min);
          clearInterval(foo2);
        }
      }, 3000);

      clearInterval(foo1);
    }
  }, 3000);

})();
