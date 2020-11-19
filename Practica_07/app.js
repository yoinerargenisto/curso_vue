

/*Practica 7*/
/********
 *propiedades computadas
**********/

const APP = new Vue({

    el:'#app_computadas',
    data:{
            mensaje:'Hola Jounnerth'
    },
    articulo_nuevo:'',   
    methods:
    {     
    },
    computed:{
        invertido()
        {
            return this.mensaje.split('').reverse().join('');
        }
    }
});


