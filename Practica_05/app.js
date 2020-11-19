

/*Instanciar Vue*/

const APP = new Vue({

    el:'#app_input_texto',
    data:{
        articulos:[
            {id:'1',nombre:'Pollo'},
            {id:'2',nombre:'Carne'},
            {id:'3',nombre:'Jamon'},
            {id:'4',nombre:'Cerdo'},
        ]
    },
    articulo_nuevo:'',   
    methods:{
        key_agregar_articulo()
        {
            m_ultimo = this.articulos.length;
            m_ultimo++;

            if(this.articulo_nuevo =='' || this.articulo_nuevo ==' ' || this.articulo_nuevo.length ==0 )
            {
                alert('el campo Articulo no debe estar vacio')
            }
            else
            {

                this.articulos.push({id:m_ultimo,nombre:this.articulo_nuevo});
                this.articulo_nuevo = '';            
            }
        }
     
    }
});


