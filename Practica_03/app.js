

/*Instanciar Vue*/

const APP = new Vue({

    el:'#app_productos',
    data:{
        productos:[
            {id:'01',producto:'Harina',cantidad:'25',precio:'1000',moneda:'BS'},
            {id:'02',producto:'Arroz',cantidad:'10',precio:'900',moneda:'BS'},
            {id:'03',producto:'Pasta',cantidad:'5',precio:'1500',moneda:'BS'},
            {id:'04',producto:'Azucar',cantidad:'0',precio:'800',moneda:'BS'}

        ]
    }
});