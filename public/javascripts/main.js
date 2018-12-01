onload();

var form = (document.forms.formAsociaciones);
form.addEventListener('submit', function(event){
    event.preventDefault();
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
        if(res.ok){
           onload(); 
        } else {
            alert("puede que estes repitiendo nombre o te falten datos");
        }   
    })
    .catch(err => {
        alert("ocurrio un error en el servidor");
    })
});

function onload(){
    fetch('/asociaciones', {
        method: 'GET'
    }).then(res => res.json())
    .then(data => {
        let filas = "";
        data.forEach(element => {
            filas = filas + `
            <tr>
                <td class="datos">${element._id}</td>
                <td class="datos">${element.name}</td>
                <td class="datos">${element.departamento}</td>
                <td class="datos">${element.años}</td>
                <td class="opciones">
                    <a href="/asociaciones/${element._id}" class="update"><i class="fas fa-pen"></i></a>
                    <a href="/asociaciones/${element._id}" class="delete"><i class="fas fa-eraser"></i></a>
                </td>
            </tr>
            `
        });
        var tabla = document.getElementsByClassName("cuerpoTabla")[0];
        tabla.innerHTML = filas;
        //let btn_delete = document.getElementsByClassName("delete");
        let btn_delete = document.querySelectorAll('.delete');
        let btn_update = document.querySelectorAll('.update');
        btn_delete.forEach(element => {
            element.addEventListener("click", function(event){
                event.preventDefault();
                let url = this["href"];
                fetch(url, {
                    method: 'DELETE'
                }).then(res => res.json())
                .then(res => {
                    alert("se elimino la asociacion");
                    onload();
                }).catch(err => {
                    alert("Ocurrio un error");
                })
            })
        })
        btn_update.forEach(element => {
            element.addEventListener("click", function(event){
                event.preventDefault();
                console.log(element.parentNode.parentNode);
                let url = this["href"];
                let data= {
                    name: form.name.value,
                    departamento: form.departamento.value,
                    años: form.años.value
                }
                console.log(data);
                fetch(url,{
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(res => {
                    if(res.ok){
                       onload(); 
                    } else {
                        alert("puede que estes repitiendo nombre o te falten datos");
                    }   
                })
                .catch(err => {
                    alert("ocurrio un error en el servidor");
                })
            })
        })
    })
}