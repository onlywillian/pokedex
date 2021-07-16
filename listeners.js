const pkName = document.getElementById("pk-name");
const campName = document.querySelector('.name-camp');

/* the setting for this function to be called is in the next function. */
var stageConfigExists = false;
function createStageConfigs(stage) {
    /* Creating all necessary elements */
    const small = document.createElement("small");
    const input = document.createElement("input");
    const div = document.createElement("div");
    const pkInfoContent = document.getElementById('pk-info-content');
    const pkdSmall = document.getElementById("pkd-small");

    if (stage != "st0") return stageConfigExists == true;
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
            div.innerHTML = '';
            return;
        }
        div.innerHTML = "Evolves from ";
        div.innerHTML += input.value;
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

/* Retreat Config */
function insertColorlessIconsToRetreat(length) {
    const camp = document.querySelector(".retreat-camp");

    if (length > 5) return;

    /* removing existing images */
    var imgs = camp.querySelectorAll('img');
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].remove();
    }

    /* adding new images */
    for (let i = 1; i <= length; i++) {
        var img = document.createElement("img");

        camp.appendChild(img);
        img.setAttribute("src", "img/type_icons/types/colorless.png");
    };
};

/* Weakness config */
function insertWeakTypeImages() {
    const weakType = document.getElementById('weak-type');
    const weaktypeCamp = document.querySelector(".weak-type-camp");
    const img = document.getElementById("weak-type-image");

    weaktypeCamp.appendChild(img);
    img.src = `img/type_icons/types/${weakType.value}.png`;
};

const weakAm = document.getElementById("weak-amount");
weakAm.addEventListener('keyup', () => {
    const weakAmCamp = document.getElementById('weak-amount-result');

    if (weakAm.value > 99) return;

    weakAmCamp.innerHTML = weakAm.value;
});

/* Retreat Listener */
const retreatCost = document.getElementById("retreat-cost");
retreatCost.addEventListener("keyup", () => {
    insertColorlessIconsToRetreat(retreatCost.value);
});

/* Description config */
const desc = document.getElementById('desc-text');
const descCamp = document.querySelector('.desc-camp');
desc.addEventListener("keyup", () => {
    descCamp.innerHTML = desc.value;
});