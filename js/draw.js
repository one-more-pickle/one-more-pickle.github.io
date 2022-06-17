
const buildDot = (color) => `<div class='dot' style='background-color:${color}'></div>`;


const draw = () => {
    const n = document.getElementById('ndots').value;

    let dots = '';

    if(!isNaN(n)){
        for(i=0; i < n; i++){
            dots += buildDot('aquamarine');
        }
    }

    let dotsDiv = document.createElement("div");
    dotsDiv.innerHTML = dots;

    let drawDiv = document.getElementById('draw');

    console.log(drawDiv)
    drawDiv.appendChild(dotsDiv)

};