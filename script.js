const pkName = document.getElementById("pk-name");
const campName = document.querySelector('.name-camp');


/* pokémon Name */
pkName.addEventListener("keyup", () => {
    campName.innerHTML = pkName.value;
    console.log(pkName.size);
    if (pkName.length >= 14) campName.style.fontSize = '18px';
});

/* hp switch configuration */
const hp = document.getElementById("hp");
const hpNumber = document.getElementById("hp-number");
hp.addEventListener("keyup", () => {
    if (hp.value > 999) {
        return;
    }
    hpNumber.innerHTML = hp.value;
    
});

/* when switch the type, ex: grass, water... */
function typeSwitch() {
    const pkType = document.getElementById("pk-type").value.toLowerCase();
    const previewImage = document.getElementById("pr-img");
    const miniHp = document.getElementById("mini-hp");
    const folder = document.getElementById("stage").value;

    /* Changing the font color */
    if (pkType === 'dark') {
        campName.style.color = 'white';
        hpNumber.style.color = 'white';
        miniHp.style.color = 'white';
    } else {
        campName.style.color = 'black';
        hpNumber.style.color = 'black';
        miniHp.style.color = 'black';
    }

    /* Set the right image */
    previewImage.setAttribute("src", `img/cards_template/${folder}/${pkType}_${folder}.png`);
};

