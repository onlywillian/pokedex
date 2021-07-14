/* 
* Objetivo: consertar o stage que multiplica
*/

const pkName = document.getElementById("pk-name");
const campName = document.querySelector('.name-camp');


/* pokémon Name */
pkName.addEventListener("keyup", () => {
    campName.innerHTML = pkName.value;
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

/* pokédex Entry */
const pokedex = document.getElementById("pkd-data-info");
pokedex.addEventListener("keyup", () => {
    document.querySelector(".pokedex-camp")
    .innerHTML = pokedex.value;
})

/* the setting for this function to be called is in the next function. */
var stageConfigExists = false;
function createStageConfigs(stage) {
    /* Creating all necessary elements */
    const small = document.createElement("small");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const pkInfoContent = document.getElementById('pk-info-content');
    const pkdSmall = document.getElementById("pkd-small");

    if (stage != "st0") return
    else {
        /* instancing the elements */
        pkInfoContent.insertBefore(small, pkdSmall);
        small.innerHTML = "Previous pokémon:";
        small.className = "pr-pokemon-info";
        pkInfoContent.insertBefore(input, pkdSmall);
        input.setAttribute("type", "text");
        input.className = "pr-pokemon-text";
        input.setAttribute("maxLength", "15");
        document.querySelector(".camps-container")
        .appendChild(div);
        div.className = "pr-pokemon-camp";
    }

    /* Inserting input data */
    input.addEventListener("keyup", () => {
        if (input.value == '') {
            div.innerHTML = ''
            return;
        }
        div.innerHTML = "Evolves from "
        div.innerHTML += input.value
    });
}

/* when switch the type, ex: grass, water... */
function typeSwitch() {
    const pkType = document.getElementById("pk-type").value.toLowerCase();
    const previewImage = document.getElementById("pr-img");
    const miniHp = document.getElementById("mini-hp");
    const folder = document.getElementById("stage").value;

    /*  
    * If the stage is basic, some things will be modified,
    * otherwise it will remove them
    */
    if (folder != 'st0') createStageConfigs(folder);
    if (folder === 'st0') {
        try {
            document.querySelector(".pr-pokemon-info").remove();
            document.querySelector(".pr-pokemon-camp").remove();
            document.querySelector(".pr-pokemon-text").remove();
        } catch (err) {
            console.log(err);
        }
    }

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