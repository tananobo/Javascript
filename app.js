const dinosData =  [
    {
        "species": "Triceratops",
        "weight": 13000,
        "height": 114,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "First discovered in 1889 by Othniel Charles Marsh"
    },
    {
        "species": "Tyrannosaurus Rex",
        "weight": 11905,
        "height": 144,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "The largest known skull measures in at 5 feet long."
    },
    {
        "species": "Anklyosaurus",
        "weight": 10500,
        "height": 55,
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Anklyosaurus survived for approximately 135 million years."
    },
    {
        "species": "Brachiosaurus",
        "weight": 70000,
        "height": "372",
        "diet": "herbavor",
        "where": "North America",
        "when": "Late Jurasic",
        "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
    },
    {
        "species": "Stegosaurus",
        "weight": 11600,
        "height": 79,
        "diet": "herbavor",
        "where": "North America, Europe, Asia",
        "when": "Late Jurasic to Early Cretaceous",
        "fact":
        "The Stegosaurus had between 17 and 22 seperate places and flat spines."
    },
    {
        "species": "Elasmosaurus",
        "weight": 16000,
        "height": 59,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
    },
    {
        "species": "Pteranodon",
        "weight": 44,
        "height": 20,
        "diet": "carnivor",
        "where": "North America",
        "when": "Late Cretaceous",
        "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
    },
    {
        "species": "Pigeon",
        "weight": 0.5,
        "height": 9,
        "diet": "herbavor",
        "where": "World Wide",
        "when": "Holocene",
        "fact": "All birds are living dinosaurs."
    }
];

// Create Dino Constructor
function Dino(species, weight, diet, fact) {
    this.species = species;
    this.weight = weight;
    this.diet = diet;
    this.facts = [fact];
    this.image = "images/" + species.toLowerCase() + ".png";
}

Dino.prototype.addFact = function (fact) {
    this.facts.push(fact);
};

Dino.prototype.compareNameLength = function (name) {
    let fact = "The length of my species name is same as your name.";
    if (this.species.length > name.length) {
        fact = "The length of my species name is longer than your name.";
    } else if (this.species.length < name.length) {
        fact = "The length of my species name is shorter than your name.";
    }
    this.addFact(fact);
};

Dino.prototype.compareWeight = function (weight) {
    let fact = "Our weight is exactly same!";
    if (this.weight > weight) {
        fact = "I'm heavier than you!";
    } else if (this.weight < weight) {
        fact = "I'm lighter than you...";
    }
    this.addFact(fact);
};

Dino.prototype.compareDiet = function (diet) {
    let fact = "We don't eat same type of food...";
    if (this.diet === diet) {
        fact = "We eat same type of food!";
    }
    this.addFact(fact);
};


// Create Dino Objects
let dinos = dinosData.map(function (value) {
    const species = value.species;
    const weight = value.weight;
    const diet = value.diet;
    const fact = value.fact;
    return new Dino(species, weight, diet, fact);
});

document.getElementById("btn").addEventListener("click", function(){

    // Create Human Object
    const human = (function(){
        let name = document.getElementById("name");
        let feet = document.getElementById("feet");
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        let diet = document.getElementById("diet");
        return {
            "species" : "human",
            "weight" : weight.value,
            "diet" : diet.value,
            "fact" : name.value,
            "image" : "images/human.png"
        }
    })();

    for (let i = 0; i < 8; i++){
        dinos[i].compareNameLength(human.fact);
        dinos[i].compareWeight(human.weight);
        dinos[i].compareDiet(human.diet);
        let fact =
        dinos[i].facts[Math.floor(Math.random()*dinos[i].facts.length)];
        if (dinos[i].weight < 1) {
            fact = "All birds are Dinosaurs.";
        }
        const imgUrl =
        "images/" + dinosData[i]["species"].toLowerCase() + ".png"
        gridItemDiv = getGridItem(dinosData[i].species, imgUrl, fact)
        document.getElementById("grid").appendChild(gridItemDiv);

        if (i===3){
            gridItemDiv = getGridItem(human.species, human.image, human.fact)
            document.getElementById("grid").appendChild(gridItemDiv);
        };
    };
    document.getElementById("dino-compare").style.display = "none";
})

function getGridItem(species, imgUrl, fact){
    let gridItemDiv = document.createElement("div");
        gridItemDiv.className = "grid-item";

        //add species
        let speciesDiv = document.createElement("h3");
        speciesDiv.innerText = species;
        gridItemDiv.appendChild(speciesDiv);

        //add image
        let imageDiv = document.createElement("img");
        imageDiv.src = imgUrl
        gridItemDiv.appendChild(imageDiv);

        let factDiv = document.createElement("p");
        factDiv.innerText = fact;
        gridItemDiv.appendChild(factDiv);

        return gridItemDiv;
}