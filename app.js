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
        "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
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
]
    
// Create Dino Constructor
function Dino(species, fact) {
    this.species = species;
    this.fact = fact;
    this.image = "images/" + species.toLowerCase() + ".png";
}

    // Create Dino Objects

    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


// On button click, prepare and display infographic
document.getElementById("btn").addEventListener('click', function(){
    
    // Create Human Object
    const human = (function(){
        let name = document.getElementById("name");
        let feet = document.getElementById("feet");
        let height = document.getElementById("height");
        let weight = document.getElementById("weight");
        return {
            "species" : "human",
            "fact" : name.value,
            "image" : "images/human.png" 
        }
    })();

    for (let i = 0; i < 8; i++){
        imgUrl = "images/" + dinosData[i]["species"].toLowerCase() + ".png"
        gridItemDiv = getGridItem(dinosData[i].species, imgUrl, dinosData[i].fact)
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
        gridItemDiv.className = "griditem";

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

        return gridItemDiv
}