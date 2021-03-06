//COTIZADOR CONSTRUCTOR

function Seguro(marca, anio, tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}


//Todo lo que se muestra en interfaz
function Interfaz(){
    //Mensaje que se imprime en el HTML
    Interfaz.prototype.mostrarError = function(mensaje, tipo){
        const div = document.createElement('div');

        if(tipo === 'error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML = ` ${mensaje}`;
        formulario.insertBefore(div, document.querySelector('.form-group'));

        setTimeout(function(){
            document.querySelector('.mensaje').remove();
        },4000);
    }
}




//Event listener
const formulario = document.getElementById('cotizar-seguro');



formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //Leer la marca seleccionada del select
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    //Leer el año seleccionado del select
    const anio = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    
    //Lee el valor del radio button
    const tipo= document.querySelector('input[name = "tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();

    //Revisamos que los campos no estenn vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        //Interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisa el formulario e intenta de nuevo', 'error');
        //console.log('Faltan datos');
    }else{
        //Instanciar seguro y mostrar interfaz


        //console.log('todo correcto')

    }



    //console.log(anioSeleccionado);
    //console.log(marcaSeleccionada);
    //console.log('presionado');
});

    
   



const max = new Date().getFullYear(),
      min = max -20;
      

const selectAnios =  document.getElementById('anio');
for(let i=max; i>min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}