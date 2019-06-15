
(() => {
    'use strict'

    let catalogModule = angular.module("mainApp");




    catalogModule.controller('catalogController', function(){
        let vm = this;
        vm.c = 'this is my test result';

        let setDefaults = () => {
            loadData();
            vm.inicatalog();
        }
        
        let loadData = () => {
            vm.ptabHeaders = JSON.parse (localStorage.getItem("tab-headers"));
            vm.catalog = JSON.parse (localStorage.getItem("catalog"));

            if(!vm.ptabHeaders) {
            vm.ptabHeaders= ["Marca", "Modelo", "Precio", "Memoria RAM", "Almacenamiento Interno", "Bateria", "Tamaño de la Pantalla", "Sistema Operativo", "Imagen Frontal URL", "Imagen Lateral URL"];
            localStorage.setItem ("tab-headers", JSON.stringify(vm.ptabHeaders));
            }
            if (!vm.catalog) {
                vm.catalog = [
                    { id: 1, marca: "test",  modelo: "Test", precio: "test", ram: 'test', ai: "test", bateria: "test", tp: "test", so: "test", if: "test", il: "test" }
                ];
            vm.catalog.forEach (catalog => catalog.id = getRandomId());
            saveData();

            }
        }
        vm.inicatalog = () => {
            vm.catalog = {};
        }

        let getRandomId = () => {
            return Math.floor(Math.random() * (+100 - +1)) + +1;
        }

        let saveData = () => {
            localStorage.setItem("catalog", JSON.stringify(vm.catalog));
        }


        vm.savecatalog = () => {
            if (vm.catalog.marca && vm.catalog.modelo && vm.catalog.precio && vm.catalog.ram && vm.catalog.ai && vm.catalog.bat && vm.catalog.screen && vm.catalog.so &&vm.catalog.if && vm.catalog.il) {
                if (vm.catalog.id) {
                    vm.catalog.forEach(catalog => { if (catalog.id == vm.catalog.id) catalog = vm.catalog; });
                } else {
                    vm.catalog.id = getRandomId();
                    vm.catalog.push(vm.catalog);
                }
                saveData();
                vm.inicatalog();    
            }
        }

        setDefaults();

    });


}


)();