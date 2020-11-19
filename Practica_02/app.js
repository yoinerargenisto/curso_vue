/*Instanciar Vue*/

const APP = new Vue({

    el:'#app_frutas',
    data:{
        frutas:['Manzana','Pera','Naranja','Platano','Guayaba'],
        vegetales:['Pimenton','Zanahoria','Brocoli','Cebolla'],
        usuarios:[
            {id:'01',nombre:'Jounnerth',apellido:'Argenis',edad:'29',roll:'01'},
            {id:'02',nombre:'Argenis',apellido:'Torres',edad:'29',roll:'01'},
            {id:'03',nombre:'Yoiner',apellido:'Olivares',edad:'29',roll:'02'},
            {id:'04',nombre:'Juan',apellido:'Peres',edad:'29',roll:'01'}
        ]
    }
});

