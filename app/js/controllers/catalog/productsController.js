
(() => {
    'use strict'

    let productsModule = angular.module("mainApp");

    productsModule.controller('productsController', function(){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            loadData();
            vm.iniproduct();
        }
        
        let loadData = () => {
            vm.ctabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.products = JSON.parse (localStorage.getItem("products"));

            if(!vm.ctabHeaders) {
            vm.ctabHeaders= ["Id", "Marca", "Modelo", "Precio", "Memoria RAM", "Almacenamiento Interno", "Bateria", "Tamaño de la Pantalla", "Sistema Operativo", "Imagen Frontal URL", "Imagen Lateral URL"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.ctabHeaders));
            }
            if (!vm.products) {
                vm.products = [
                    { id: 1, marca: "Sample",  modelo: "Sample", precio: "0.00", ram: 1, ai: 1, bat: 1, screen: "Sample", so: "Sample", if: "img/sample1.jpg", il: "img/sample2.jpg" }
                ];
            vm.products.forEach (product => product.id = getRandomId());
            saveData();

            }
        }
        vm.iniproduct = () => {
            vm.product = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+10 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("products", JSON.stringify(vm.products));
        }


        vm.saveproduct = () => {
            console.log("properlog");
            if (vm.product.marca && vm.product.modelo && vm.product.precio && vm.product.ram && vm.product.ai && vm.product.bat && vm.product.screen && vm.product.so &&vm.product.if && vm.product.il) {
                if (vm.product.id) {
                    vm.products.forEach(product => { if (product.id == vm.product.id) product = vm.product; });
                } else {
                    vm.product.id = getRandomId();
                    vm.products.push(vm.product);
                }
                saveData();
                vm.iniproduct();    
            }
        }
        
        vm.modifyProduct = (product) => {
            vm.product = product;
        }

        vm.deleteProduct = (index) => {
            vm.products.splice(index, 1);
            saveData();
        }

        setDefaults();

    });


}


)();