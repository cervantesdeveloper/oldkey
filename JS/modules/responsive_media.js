const d = document,
    w = window;

export default function responsiveMedia(id, mq){
    let breakpoint = w.matchMedia(mq);

    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = `<h2>"Sueño con pintar y luego pinto mis sueños"</h2><p><i>Vincent van Gogh</i></p>`;
        }
        
    }

    breakpoint.addListener(responsive);
    responsive(breakpoint);
}

