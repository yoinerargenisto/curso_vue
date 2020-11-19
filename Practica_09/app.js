

/*Practica 9*/
/********
 *propiedades ciclo de vida
**********/

const APP = new Vue({

    el:'#app_ciclo',
    data:{
            mensaje:'ciclo de vida de Vue'

    },
    beforeCreate()
    {
        console.log('beforeCreate');
    },
    created()
    {
        console.log('created');
    },
    beforeMount()
    {
        console.log('beforeMount');
    },
    mounted()
    {
        console.log('mounted');
    },
    beforeUpdate()
    {
        console.log('beforeUpdate');
    },
    updated()
    {
        console.log('updated');
    },
    beforeDestroy()
    {
        console.log('beforeDestroy');
    },
    destroyed()
    {
        console.log('destroyed');
    },
    methods:
    { 
        cambiar_saludo()
        {
            this.mensaje='mensaje cambiado';
        }
    
    },
    computed:
    {

        
    }
});


