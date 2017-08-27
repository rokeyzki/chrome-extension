(function () {
  'use strict';
  console.log("amazon init");
  window.foo1 = 'hello world';

  var foo1 = setInterval(function () {
    console.clear();
    console.log('foo1');
    if(angular) {
      console.log(angular);

      var pop = document.querySelector("[ng-app='amzscout']");
      // var ngPop = angular.element(pop).scope();

      // console.dir(ngPop);

      clearInterval(foo1);
    }
  }, 3000);
})();