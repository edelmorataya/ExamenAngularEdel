
(() => {
  'use strict'

  let galleryModule = angular.module('mainApp');

  galleryModule.controller('galleryController', function(){
      let vm = this;
      vm.slides1 = JSON.parse (localStorage.getItem("products"));

      

  });

}


)();