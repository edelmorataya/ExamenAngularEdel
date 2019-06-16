
(() => {
  'use strict'

  let galleryModule = angular.module('mainApp');

  galleryModule.controller('galleryController', function(){
      let vm = this;
      vm.slides1 = JSON.parse (localStorage.getItem("products"));


      vm.getActiveSlide = function () {
        var activeSlide = slides.filter(function (s) { 
          return s.active;
        })[0];
        
        alert(slides.indexOf(activeSlide));
        
      };

      vm.setActiveSlide = function (idx) {
        console.log("runproperly")
        vm.slides1[idx].active=true;
      };
    

  });

}


)();