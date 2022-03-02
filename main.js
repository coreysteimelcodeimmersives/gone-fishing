const prompt = require('prompt-sync')({sigint:true});

function startOfGame(){
    console.log(`You've gone fishing! Try to maximize the value of your caught fish.`);
    console.log(`You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`);
    console.log(``);
    console.log(`==========================================`);
}

function topOfTheHour(){
    console.log(`The time is ${timeOfDay}:00am. So far you've caught:`)
    console.log(``);
    console.log(`${totalFish} fish, ${totalWeight} lbs, $${totalValue}`);
    console.log(``);
    catchFish();
    checkTotalFishWeight();
    userAction();
    addTime();
    console.log(`==========================================`);
    return topOfTheHour();
}

function checkTime(){
    if (timeOfDay === 12){
        console.log(`The time is 12:00pm. Times up!`);
        console.log(``);
        console.log(`You caught ${totalFish} fish:`)
    }
}

function checkTotalFishWeight(){
    let potenttialTotalFishWeight = totalWeight + currentFishWeight;
    if (potenttialTotalFishWeight > 10){
        return autoRelease = true;
    } else {
        return autoRelease = false;
    }
}

let timeOfDay = 6;

let totalFish = 0;

let totalWeight = 0;

let totalValue = 0;

let currentFishName = ``;

let currentFishWeight = 0;

let currentFishValue = 0;

let userDecision = ``;

let autoRelease = false;

function catchFish(){
    console.log(`You caught a '${fishName()}' weighing ${fishWeight()} lbs and valued at $${fishValue()}`);
    return;
}

function addTime(){
    timeOfDay += 1;
    return timeOfDay;
}

function userAction(){
    if (autoRelease === true){
        console.log(`This fish would put you over 10 lbs, so you release it.`);
        return prompt(`Press [enter] to continue.`);
    } else {
        console.log(`Your action: [c]atch or [r]elease?`);
        userDecision = prompt(`> `).toLocaleLowerCase();
        if (userDecision === 'c'){
            totalFish += 1;
            totalWeight += currentFishWeight;
            totalValue += currentFishValue;
            return console.log(`You chose to keep the fish.`);
        } else if (userDecision === 'r'){
            return nsole.log(`You chose to release the fish.`);
        } else {
            console.log(`Invalid entry. Try again.`)
            return userAction();
        }   
    }  
}

function fishName(){
    let fishName1 = fishAdj[Math.floor(Math.random()*fishAdj.length)];
    let fishName2 = fishColor[Math.floor(Math.random())*fishColor.length];
    let fishName3 = fishSpecies[Math.floor(Math.random())*fishSpecies.length];
    currentFishName = `${fishName1} ${fishName2} ${fishName3}`;
    return currentFishName;
}

function fishWeight(){
    currentFishWeight = Math.random().toFixed(2)*10;;
    return currentFishWeight;
}

function fishValue(){
    currentFishValue = Math.random().toFixed(2)*100;
    return currentFishValue;
}

let fishAdj = ['Large', 'Small', 'Great', 'Elusive', 'Peppered', 'Salty', 'Common', 'Electric', 'Spotted', 'Tiny', 'Striped', 'Majestic', 'Heavenly', 'Ghostly', 'Ancient', 'Ol', 'Dainty',  'Royal'];

let fishColor = ['Blue', 'Yellow', 'Brown', 'White', 'Purple', 'Red', 'Black', 'Tan', 'Orange', 'Green', 'Pink', 'Gray', 'Amber', 'Scarlet', 'Copper', 'Golden', 'Silver', 'Bronze', 'Rose', 'Rust', 'Sapphire', 'Maroon'];

let fishSpecies = ['Trout', 'Tuna', 'Salmon', 'Bass', 'Carp', 'Cod', 'Flounder', 'Snapper', 'Grouper', 'Haddock', 'Halibut', 'Herring', 'Mackerel', 'Marlin', 'Mullet', 'Perch', 'Tilapia', 'Walleye'];

