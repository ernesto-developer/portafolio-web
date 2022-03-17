const buttonSend = document.getElementById('btnSend');
const inputs     = document.querySelectorAll('.form__input');

const regExpList = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.,
    email:  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    asunto: /^[a-zA-Z0-9][a-zA-Z0-9/s]/,
    mensaje: /^[a-zA-Z0-9][a-zA-Z0-9/s]/,
};

const fields = {
    nombre: false,
    email: false,
    asunto: false,
    mensaje: false
};

const validarTextovacio = (input, field)=>{
    if(input.value == ''){
        fields[field] = false;
        console.log('incorrecta ' + input.value);
        
    }else{
        console.log('correcta ' + input.value);
        fields[field] = true;
    }
};

const validarFormulario = (e) => {

    switch (e.target.name){
        case "nombre":
            validarField(regExpList.nombre, e.target,'nombre');
            break;
        case "email":
            validarField(regExpList.email, e.target, 'email');
            break;
            case 'asunto':
            validarField(regExpList.asunto, e.target, 'asunto');
            break;
        case 'mensaje':
            validarField(regExpList.mensaje, e.target, 'mensaje');
            break;
    }   
};

const validarField = (expresion, input, field) => {

    if(expresion.test(input.value)){
        console.log('correcta ' + input.value);
        
        fields[field] = true;

    }else{
        console.log('incorrecta ' + input.value);
        fields[field] = false;
    }

};


inputs.forEach(input => {
   input.addEventListener('keyup', validarFormulario);
   input.addEventListener('blur', validarFormulario);
   
});


buttonSend.addEventListener('click',(e) => {

    if(fields.nombre && fields.email && fields.asunto && fields.mensaje){

        console.log('tu mensaje se envio');
        
    }else{
        
        console.log(fields.nombre);
        console.log(fields.email);
        console.log(fields.asunto);
        console.log(fields.mensaje);
        console.log("te falta un parametro");
    }


});