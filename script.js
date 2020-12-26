const jsTitle = document.querySelector('.container > h1 > span');
const spaceBar = document.querySelector('.spacing > input');
const blurBar = document.querySelector('.blur > input');
const picture = document.querySelector('img');

function handleSpace(){
    const currentSpace = spaceBar.value;
    console.log(currentSpace);
    picture.style.padding = `${currentSpace}px`;
}

function init(){
    spaceBar.addEventListener('input',handleSpace);
}

init();