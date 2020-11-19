

/*Practica 8*/
/********
 *propiedades computadas segundo ejemplo
**********/

const APP = new Vue({

    el:'#app_computadas',
    data:{
            mensaje:'Hola Jounnerth',
            contador:98

    },
    methods:
    { 
        contador_resta(){

            this.contador--;
            if(this.contador < 0)
            {
                this.contador = 0;
            }

        },
        contador_suma(){

            this.contador++;
            if(this.contador > 100)
            {
                this.contador = 100;
            }

        }        
    },
    computed:{
        invertido()
        {
            return this.mensaje.split('').reverse().join('');
        },
        color_barra()
        {
            if(this.contador > 0 && this.contador < 10)
            {
                return  'bg-danger';
            }
            else if(this.contador >= 10 && this.contador < 50)
            {
                return  'bg-warning';
            }
            else if(this.contador >= 50 && this.contador < 80)
            {
                return  'bg-success';
            }
            else if(this.contador >= 80 && this.contador < 100)
            {
                return  'bg-primary';
            }

            

        }
    }
});


