
(() => {
    'use strict'

    let homeModule = angular.module("mainApp");

    homeModule.controller('homeController', function(){
        let vm = this;
        vm.test = 'this is my test result';

    });

}


)();