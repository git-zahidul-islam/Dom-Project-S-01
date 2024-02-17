// onload function create
window.onload = function () {
    main()
};
function main() {
    const root = document.getElementById('root');
    const colorBtn = document.getElementById('color-btn');
    colorBtn.addEventListener('click', function () {
        const rgbColor = colorGenerator()
        root.style.backgroundColor = rgbColor;
    });

}
// step 1 : click event 

function colorGenerator() {
    // rgb(0,0,0) rgb(255,255,255)
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    return `rgb(${red},${green},${blue})`
}
// step 2 : random color generate

// step 3 : added 

