const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handKeyUp(event){
    if(event.keyCode === 32){
        if(!isJumping){
        jump();
        }
    }
}

function jump (){
    isJumping = true;    

    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            let downInterval = setInterval (() => {
                if (position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                position -= 20;
                dino.style.bottom = position + 'px';
                }
            },20);
        } else {
        position += 20;  // mesmo que: position = position + 20
        dino.style.bottom = position + 'px'; //valores do css
        }
    }, 20);
}

function creatCactus(){
    const cactus = document.createElement('div');
    let cactusPositon = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPositon < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPositon > 0 && cactusPositon < 60 && position < 60){
            //Gave over

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de jogo!</h1>'
        } else {
            cactusPositon -=10;
            cactus.style.left = cactusPositon + 'px';
        }
    },20);
    setTimeout(creatCactus, randomTime);
}

creatCactus();
document.addEventListener('keyup', handKeyUp);