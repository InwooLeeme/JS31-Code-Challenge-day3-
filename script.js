const jsTitle = document.querySelector('.container > h1 > span');
const spaceBar = document.querySelector('.spacing > input');
const blurBar = document.querySelector('.blur > input');
const picture = document.querySelector('img');
const selectColor = document.querySelector('.base__color > input');
const imgBackground = document.querySelector('.imgContainer');

function handleSpace(){
   const spaceValue = parseInt(spaceBar.value);
   imgBackground.style.padding = `${spaceValue}px`;
}

function handleColor(){
    const currentColor = selectColor.value;
    imgBackground.style.backgroundColor = currentColor;
    jsTitle.style.color = currentColor;
}

function handleBlur(){
    const currentBlur = parseInt(blurBar.value);
    picture.style.filter = "blur("+currentBlur+"px)";
}

function init(){
    spaceBar.addEventListener('input',handleSpace);
    selectColor.addEventListener('input',handleColor);
    blurBar.addEventListener('input',handleBlur);
}

init();