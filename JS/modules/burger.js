export default function burguer(burger, times, nav, navLink){
    const d = document;

    d.addEventListener("click", e=>{
        if(e.target.matches(burger) || e.target.matches(`${burger} *`)){
            d.querySelector(burger).classList.toggle(times);
            d.querySelector(nav).classList.toggle("inactive");
            d.querySelector(".menu").classList.toggle("menu-scrolled");
        }

        if(e.target.matches(navLink)){
            d.querySelector(burger).classList.remove(times);
            d.querySelector(nav).classList.add("inactive");
            d.querySelector(".menu").classList.toggle("menu-scrolled");
        }
    })
}

