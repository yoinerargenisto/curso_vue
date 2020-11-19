

/*Instanciar Vue*/

const APP = new Vue({

    el:'#app_input_texto',
    data:{
        texto:[
            {contenido_uno:'',contenido_dos:''},
        ]
    },   
    methods:{
        mostar_consola()
        {
            console.log(this.texto.contenido_uno);
        },
        mostar()
        {
            alert(this.texto.contenido_dos);
        }
    }
});


