/* Importing the images name */
import types from './types.js';
import arrows from './arrows.js';

/* Inserting the power cost */
function powerCostInsert() {
    const powerCostArea = document.getElementById("move-cost");

    for (let i = 0; i < types.icons.length; i++) {
        const img = document.createElement("img");
        const typeDiv = document.createElement("div");
        const arrowUp = document.createElement("img");
        const arrowDown = document.createElement("img");
        const p = document.createElement("p");
        
        powerCostArea.appendChild(typeDiv);
        typeDiv.className = 'cost-type-icon';

        typeDiv.appendChild(arrowUp);
        arrowUp.setAttribute("src", arrows.arrowUpImages[0]);
        arrowUp.style.cursor = 'pointer';

        typeDiv.appendChild(img);
        img.setAttribute("src", types.icons[i]);
        img.className = 'type-image-icon';

        typeDiv.appendChild(arrowDown);
        arrowDown.setAttribute("src", arrows.arrowDownImages[0]);
        arrowDown.style.cursor = 'pointer';

        typeDiv.appendChild(p);
        p.innerHTML = 'x0';
    }
}
powerCostInsert();