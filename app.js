(function(){
    emailjs.init("l4aBZhBLd_9C4_w4G");
 })();
const vue = new Vue({
    el: '#app',
    data(){
        return {
            from_name: '',
            from_email: '',
            message: '',
            subject: '',
        }
    },
    methods: {
        enviar(){
            let data = {
                from_name: this.from_name,
                from_email: this.from_email,
                message: this.message,
                subject: this.subject,
            };
            
            emailjs.send("service_emrkgz9","template_dsm9ahj", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    alert('El correo se ha enviado de forma exitosa');
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                alert('Ocurrió un problema al enviar el correo');
               console.log("FAILED. error=", err);
            });
        }
    }
});

function scroll(distance, section,origin,duration){

    ScrollReveal({ distance: distance }).reveal(section, {
        origin: origin,
        delay: 275,
        duration: duration,
        reset: true,
    });
};


scroll('150px','.intro','top',2000);
scroll('100px','.aboutMe','right',1500);
scroll('100px','.studies','left',1500);
scroll('150px','.contact','bottom',2000);

