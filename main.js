const prompt = require('prompt-sync')({sigint:true});

function startOfGame(){
    console.log(`You've gone fishing! Try to maximize the value of your caught fish.`);
    console.log(`You can fish for six hours (till 12:00pm) and can catch at most 10 lbs of fish.`)
    console.log(`==========================================`);
}

function topOfTheHour(){
    console.log(`The time is 6:00am. So far you've caught:`)
    console.log(`1 fish, 0.24 lbs, $3.12`)
}

let timeOfDay = 6;

let numberOfFish = 0;

let totalWeight = 0;

let marketValue = 0;

function catchFish(){
    
}

function fishName(){

}

function fishWeight(){

}

function fishValue(){

}

let fishAdj = ['Large', 'Small', 'Great', 'Elusive', 'Peppered', 'Salty', 'Common', 'Electric', 'Spotted', 'Tiny', 'Striped', 'Majestic', 'Heavenly', 'Ghostly', 'Ancient', 'Ol', 'Dainty',  'Royal'];

let FishColor = ['Blue', 'Yellow', 'Brown', 'White', 'Purple', 'Red', 'Black', 'Tan', 'Orange', 'Green', 'Pink', 'Gray', 'Amber', 'Scarlet', 'Copper', 'Golden', 'Silver', 'Bronze', 'Rose', 'Rust', 'Sapphire', 'Maroon'];

let fishSpecies = ['Trout', 'Tuna', 'Salmon', 'Bass', 'Carp', 'Cod', 'Flounder', 'Snapper', 'Grouper', 'Haddock', 'Halibut', 'Herring', 'Mackerel', 'Marlin', 'Mullet', 'Perch', 'Tilapia', 'Walleye'];
