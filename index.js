const buttonSend = document.getElementById('btnSend');
const inputs     = document.querySelectorAll('.form__input');
const button     = document.getElementById('btnSend');

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

button.classList.add("btn__desactivado");

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

const validarField = (expresion, input, field, ) => {

    var typeField;
    field != 'mensaje'? typeField = 'input': typeField = 'textarea';

    

    if(expresion.test(input.value)){

        document.querySelector(`#grupo__${field}`).classList.remove("form__input__incorrecto");
        document.querySelector(`#grupo__${field} ${typeField} `).classList.remove("form__input__incorrecto");
        document.querySelector(`#grupo__${field} i`).classList.remove("form__input__incorrecto", "fa-times-circle");
        document.querySelector(`#grupo__${field} i`).classList.add("form__input__correcto", "fa-check-circle");
        document.querySelector(`#text__error__${field}`).classList.remove("activo");
        document.querySelector(`#text__error__${field}`).classList.add("inactivo");


        fields[field] = true;

        if (fields.nombre && fields.email && fields.asunto && fields.mensaje) {
            button.classList.add("btn__activado");
        } else {
            button.classList.add("btn__desactivado");
        }

    }else{
        console.log('incorrecta ' + input.value);
        document.querySelector(`#grupo__${field}`).classList.add("form__input__incorrecto");
        document.querySelector(`#grupo__${field} ${typeField} `).classList.add("form__input__incorrecto");
        document.querySelector(`#grupo__${field} i`).classList.remove("form__input__correcto","fa-check-circle");
        document.querySelector(`#grupo__${field} i`).classList.add("form__input__incorrecto","fa-times-circle");
        document.querySelector(`#text__error__${field}`).classList.remove("inactivo");
        document.querySelector(`#text__error__${field}`).classList.add("activo");

        fields[field] = false;
    }

};


for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
}

