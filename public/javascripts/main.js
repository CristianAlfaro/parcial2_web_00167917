var form = (document.forms.formAsociaciones);
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("hola1");
    let data= {
        name: form.name.value,
        departamento: form.departamento.value,
        años: form.años.value
    }
    console.log(data);
    fetch('/asociaciones',{
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(res => {
        console.log("guardado en base de datos");
    })
    .catch(err => {
        console.log("algo anda mal")
    })
})