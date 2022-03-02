const prompt = require('prompt-sync')({sigint:true});

function startOfGame(){
    console.log(`You've gone fishing! Try to maximize the value of your caught fish.`);
    console.log(`You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`);
    console.log(`==========================================`);
}

function topOfTheHour(){
    console.log(`The time is ${timeOfDay}:00am. So far you've caught:`)
    console.log(`${numberOfFish} fish, ${totalWeight} lbs, $${marketValue}`);
}

let timeOfDay = 6;

let numberOfFish = 0;

let totalWeight = 0;

let marketValue = 0;

function catchFish(){
    console.log(`You caught a '${fishName()}' weighing ${fishWeight} lbs and valued at $${fishValue()}`);
    console.log(`Your action: [c]atch or [r]elease?`);
    
}

function userAction(){
    let userDecision = prompt(`> `).toLocaleLowerCase();
    if (userDecision === 'c'){
        // do something
    } else if (userDecision === 'r'){
        // do something else
    } else {
        console.log(`Invalid entry. Try again.`)
        return userAction();
    }
}

function fishName(){
    let fishName1 = fishAdj[Math.floor(Math.random()*fishAdj.length)];
    let fishName2 = fishColor[Math.floor(Math.random())*fishColor.length];
    let fishName3 = fishSpecies[Math.floor(Math.random())*fishSpecies.length];
    return `${fishName1} ${fishName2} ${fishName3}`
}

function fishWeight(){
    return Math.random().toFixed(2)*10;
}

function fishValue(){
    return Math.random().toFixed(2)*100;
}

let fishAdj = ['Large', 'Small', 'Great', 'Elusive', 'Peppered', 'Salty', 'Common', 'Electric', 'Spotted', 'Tiny', 'Striped', 'Majestic', 'Heavenly', 'Ghostly', 'Ancient', 'Ol', 'Dainty',  'Royal'];

let fishColor = ['Blue', 'Yellow', 'Brown', 'White', 'Purple', 'Red', 'Black', 'Tan', 'Orange', 'Green', 'Pink', 'Gray', 'Amber', 'Scarlet', 'Copper', 'Golden', 'Silver', 'Bronze', 'Rose', 'Rust', 'Sapphire', 'Maroon'];

let fishSpecies = ['Trout', 'Tuna', 'Salmon', 'Bass', 'Carp', 'Cod', 'Flounder', 'Snapper', 'Grouper', 'Haddock', 'Halibut', 'Herring', 'Mackerel', 'Marlin', 'Mullet', 'Perch', 'Tilapia', 'Walleye'];

