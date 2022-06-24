const increment = 50;
const t = 50;

const buildDot = (id, color) => `<div class='dot' id='dot-${id}' style='background-color:${color}'></div>`;


const draw = () => {
    const n = document.getElementById('ndots').value;

    let dots = '';

    if(!isNaN(n)){
        for(i=0; i < n*increment; i++){
            dots += buildDot(i, 'rgb(15, 126, 160)');
        }
    }

    let drawDiv = document.getElementById('draw');

    drawDiv.innerHTML = dots;
};

const delay = ms => new Promise(res => setTimeout(res, ms));

const detonated = async () => {
    const redDot = buildDot(-1, '#993333');

    let drawDiv = document.getElementById('draw');

    drawDiv.innerHTML += redDot;
    
    const n = document.getElementById('ndots').value;

    let destroy;
    for(i=0; i < n*increment; i++){
        destroy = document.getElementById('dot-'+i);
        destroy.remove();
        await delay(t);
    }


};