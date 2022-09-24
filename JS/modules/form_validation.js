export default function formValidation(form, inputs, loader, response){
    const d = document,
    $form = d.querySelector(form),
    $inputs = d.querySelectorAll(inputs);

    $inputs.forEach(input => {
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("form__error", "hidden");
        input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", e =>{
        if(e.target.matches(".form [required]")){
            let $input = e.target,
                pattern =  $input.pattern || $input.dataset.pattern;

            if(pattern && $input.value !== ""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value) ? d.getElementById($input.name).classList.remove("hidden") : d.getElementById($input.name).classList.add("hidden");
            }

            if(!pattern){
                return $input.value === "" ? d.getElementById($input.name).classList.remove("hidden") : d.getElementById($input.name).classList.add("hidden");
            }
        }
    });

    d.addEventListener("submit", e =>{
        e.preventDefault();

        const $loader = d.querySelector(loader),
            $response = d.querySelector(response);

        $loader.classList.remove("hidden");

        fetch("https://formsubmit.co/ajax/oldkey.ok@gmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(json => {
                console.log(json);
                $loader.classList.add("hidden");
                $response.classList.remove("hidden");
                $response.innerHTML = `<p>${json.message}</p>`;
                $form.reset();
            })
                
            .catch(err => {
                $response.classList.remove("hidden");
                let message = err.statusText || "Hubo un error, intentalo de nuevo";
                $loader.classList.add("hidden");
                $response.innerHTML = `<p>Error ${err.statusText}: ${message}</p>`;
            })
            .finally(()=> {
                setTimeout(()=>{
                    $response.classList.add("hidden");
                    $response.innerHTML = "";
                    }, 3000);
            })
    })
}