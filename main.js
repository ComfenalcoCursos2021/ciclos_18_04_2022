let w = new Worker("formulario.js");
let form = document.querySelector("#ciclo");
form.addEventListener("submit", (e)=>{
    let input = Array.from(e.target);
    let obj = {
        url: form.action,
        data: {
            method: form.method,
            body: {
                opcion: e.submitter.dataset.boton
            }
        }
    };
    for(let [id, value] of Object.entries(input)){
        if(value.id){
            obj.data.body[value.id] = Number(value.value);
        }
    }
    w.postMessage(obj);
    e.preventDefault();
})
w.addEventListener("message", (e)=>{
    console.count();
    let frag = new DocumentFragment();
    frag.append(e.data);
    document.querySelector(".mensaje").innerHTML = null;
    document.querySelector(".mensaje").insertAdjacentHTML("beforeend", frag.textContent);
})