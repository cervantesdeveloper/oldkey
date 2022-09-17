const d = document,
    w = window,
    screenHeight = window.innerHeight;

export default function rotateComponent(componentSelector){
    let components = d.querySelectorAll(componentSelector),
        lowBreakpoint = screenHeight * .75,
        highBreakpoint = lowBreakpoint - 512,
        degrees = 0;

        w.addEventListener("scroll", ()=>{
            if(lowBreakpoint > components[0].getBoundingClientRect().y && highBreakpoint < components[0].getBoundingClientRect().y){
                degrees = Math.abs( Math.floor(components[0].getBoundingClientRect().y) - lowBreakpoint) / 100;
                components[0].style.transform = `rotate(${degrees}deg)`;
            }

            if(lowBreakpoint > components[1].getBoundingClientRect().y && highBreakpoint < components[1].getBoundingClientRect().y){
                degrees = Math.abs( Math.floor(components[1].getBoundingClientRect().y) - lowBreakpoint) / 100;
                components[1].style.transform = `rotate(-${degrees}deg)`;
            }

            if(lowBreakpoint > components[2].getBoundingClientRect().y && highBreakpoint < components[2].getBoundingClientRect().y){
                degrees = Math.abs( Math.floor(components[2].getBoundingClientRect().y) - lowBreakpoint) / 90;
                components[2].style.transform = `rotate(${degrees}deg)`;
            }
            
        })
}

            