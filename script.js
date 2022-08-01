const form = document.getElementById('form')
const input = document.getElementById('input')
const namesUL = document.getElementById('names')
const nameSub = document.getElementById('nameSub')
const negativeSubmit = document.getElementById('negative-submit')
const addPlayerText =document.getElementById('add-player-text')
const playerAddDirections=document.getElementById('player-add-directions')
const wrapper = document.getElementById('form-wrap')
const startBtn = document.getElementById('start-btn')
const startWrapper = document.getElementById('start-wrapper')
const realArtist = document.getElementById('real-artist')
const fakeArtist = document.getElementById('fake-artist')
const artistBtn = document.getElementById('artist-btn');
const htmlWord =document.getElementById('htmlWord');
const catagoryWord = document.getElementById('catagory-word');
const catagoryWrapper = document.getElementById('catagory-wrapper');
const startDirection = document.getElementById('start-directions')
const roundStart = document.getElementById('round-start')
const artistCaughtBtn = document.getElementById('artist-caught-btn')
const artistNotCaughtBtn = document.getElementById('artist-not-caught-btn')
const artistGuessWord = document.getElementById('artist-guess-word')
const fartistCorrect = document.getElementById('fartist-correct-btn')
const fartistIncorrect = document.getElementById('fartist-incorrect-btn')
const currentScores=document.getElementById('current-score')
const currentScoresWrapper=document.getElementById('current-score-wrapper')
const currentScoreText = document.getElementById('current-score-text')
const nextRoundBtn=document.getElementById('next-round-btn')
const winnerScreen=document.getElementById('winner-screen')
const winner=document.getElementById('winner')
const tie=document.getElementById('tie')
const replayBtn=document.getElementById('replay-button')
const inputWrapper=document.getElementById('input-wrapper')
const editPlayersBtn=document.getElementById('edit-players-btn')
let faker= " ";
var playerCount=0;
var names=[]
var word = '';
var rand=0;
var fartistScore=false;
var artistScore=false;
var pickRand=true;
var playerCreation=true;
var test1=true;
var gameOver=false;
var showRole=false;
var maxPlayers=true;
var gameStart = true;
form.addEventListener('click', (e) =>{
    negativeSubmit.classList.add('hidden');
    form.classList.remove('form-error')
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addNameToArray();
    addName();
})

nameSub.addEventListener('click', (e) =>{
var i=0;
while(namesUL.getElementsByTagName('li') [i++]){
if(names.length>2) {
        gameStart=false
        playerAddDirections.classList.add('hidden')
        editPlayersBtn.classList.remove('hidden')
        startBtn.classList.remove('hidden')
        inputWrapper.classList.add('hidden')
        nameSub.classList.add('hidden')
        input.classList.toggle('hidden');
        addPlayerText.classList.add('hidden')
        // countItems();
        addScore()
}
else{
    negativeSubmit.classList.remove('hidden');
    form.classList.add('form-error')
}
}
})
editPlayersBtn.addEventListener('click', (e) =>{
    editPlayersBtn.classList.add('hidden')
    startBtn.classList.add('hidden')
    inputWrapper.classList.remove('hidden')
    playerAddDirections.classList.remove('hidden')
    nameSub.classList.remove('hidden')
    // countItems();
    addScore()
    gameStart=true
})
startBtn.addEventListener('click', (e) =>{
    startBtn.classList.add('hidden')
    editPlayersBtn.classList.add('hidden')
    startDirection.classList.remove('hidden')
    showRole=true;
    roundStart.classList.remove('hidden')
    pickWord();
})
roundStart.addEventListener('click', (e) => {
    roundStart.classList.add('hidden')
    namesUL.classList.add('hidden')
    startDirection.classList.add('hidden');
    artistCaughtBtn.classList.remove('hidden')
    artistNotCaughtBtn.classList.remove('hidden')
    catagoryWrapper.classList.remove('hidden')
})

function addNameToArray(){
    nameValue = document.getElementById('input').value;
    names.push(nameValue);
}

function addName(name){
    let nameText = input.value
    let nameEl = null;
    if(maxPlayers){
    if(name){
        nameText=name.text
    }
    if(nameText){
        nameEl = document.createElement('li')
        nameEl.id = playerCount;
        nameEl.innerText=nameText;
        namesUL.appendChild(nameEl);
        input.value = '';
        playerCount++;
        showFake(nameEl);
        }
    if(names.length>7){
        maxPlayers=false;
        inputWrapper.classList.add('hidden')
    }
    removeName(nameEl)
    }
}
function removeName(nameEl){
    nameEl.addEventListener('click', (e) => {
        if(gameStart){
        for(i=0; i<names.length;i++){
            if(names[i] == nameEl.innerHTML){
                names.splice(i,1);
                nameEl.remove();
            }
        }
        if(names.length<=7){
            maxPlayers=true;
            inputWrapper.classList.remove('hidden')
            }
        }
        })

}
function showFake(nameEl){
    nameEl.addEventListener('click', (e) =>{
        e.preventDefault();
        if(showRole){
        if(faker == nameEl.innerText){
            fakeArtist.classList.remove('hidden');
            artistBtn.classList.remove('hidden');
        }
        else{
            realArtist.classList.remove('hidden')
            artistBtn.classList.remove('hidden');
            htmlWord.innerText=word
        
    }
}

})
    
artistBtn.addEventListener('click', (e) =>{
    realArtist.classList.add('hidden')
    fakeArtist.classList.add('hidden')
    artistBtn.classList.add('hidden')
})
}


function pickWord(){
    var catagoryNum=0
    var animals = [], foods = [], objects=[], activities=[];
    var catagories = ['Animals', 'Foods','Objects','Things to Do']
    animals =  [ "Ant","Anteater","Ape","Donkey",,"Badger","Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Butterfly",
    "Camel",
    "Cat",
    "Caterpillar",
    "Cow",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Clam",
    "Cobra",
    "Cockroach",
    "Coyote",
    "Crab",
    "Crocodile",
    "Crow",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dolphin",
    "Dragonfly",
    "Duck",
    "Eagle",

    "Eel",

    "Elephant",


    "Falcon",
    "Ferret",

    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Giraffe",
    "Gnat",
    "Goat",
    "Goldfish",
    "Goose",
    "Gorilla",

    "Grasshopper",
    "Hamster",
    "Hawk",
    "Hedgehog",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Jaguar",
    "Jellyfish",
    "Kangaroo",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Manatee",
    "Mantis",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Octopus",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Pelican",
    "Penguin",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Rabbit",
    "Raccoon",
    "Rat",
    "Raven",
    "Reindeer",
    "Rhinoceros",
    "Salmon",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Skunk",
    "Snail",
    "Snake",
    "Spider",
    "Squid",
    "Squirrel",
    "Stingray",
    "Stinkbug",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Vulture",
    "Walrus",
    "Wasp",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Woodpecker",
    "Worm",
    "Zebra"];
    activities= ["Boating", "Exercising", "Massage", "Gaming", "Dancing", "Drinking", "Hiking", "basketball", "golf", "running", "walking", "volleyball", "badminton", "yoga", "swimming", "ice skating", "roller skating", "rugby", "darts", "football", "bowling", "ice hockey", "surfing", "tennis", "baseball", "gymnastics", "rock climbing", "dancing", "gardening", "karate", "horse racing", "snowboarding", "skateboarding", "cheerleading", "archery", "fishing", "fencing", "water skiing", "skiing", "jet skiing", "weight lifting", "scuba diving", "kickboxing", "sky diving", "boxing", "board games", "table tennis", "hiking", "bowling", "juggling", "kickboxing", "oil painting", "photography", "sewing"]
    objects = ["Cupboard", "Pillow", "Coffee maker", "Bed", "Spoon", "Blanket", "Knife", "Stove", "Sink", "Washing machine", "Pot", "Dish", "Fridge", "Sofa", "Stool", "Cup", "Fork", "Glass", "Pen", "Computer", "Notebook", "Desk", "Pencil", "Bookcase", "Book", "Chair", "Backpack", "Paper", "Glue", "Door", "Ruler", "Clock", "Whiteboard", "Window", "Car", "Bicycle", "Wallet", "Blouse", "Bag", "Shirt", "Helmet", "Toothbrush", "Key", "Table", "Coin", "Pants", "Sweater", "Shoe", , ]
    foods = ["asparagus", "apples", "avocado", "almond", "applesauce", "bacon", "black beans", "bagels", "baked beans", "BBQ", "bread", "broccoli", "buritto", "Cabbage", "cake", "carrots", "celery", "cheese", "chicken", "catfish", "chips", "chocolate", "cookies", "corn", "cupcakes", "crab legs", "cereal", "donuts", "eggs", "eggrolls", "English muffins", "fajita", "French toast", "grapes", "green beans", "Guacamole", "hamburger", "hash browns", "hot dogs", "honey", "ice cream", "beef jerky", "ketchup", "lasagna", "meatballs", "noodles", "pizza", "pancakes", "quesadilla", "Reuben", "spaghetti", "tater tots", "toast", "yogurt"];
    catagoryNum = [Math.floor(Math.random() * catagories.length)]
    console.log(catagoryNum)
    catagoryWord.innerHTML=catagories[catagoryNum];
    if(catagoryNum==0){
        word=animals[Math.floor(Math.random() * animals.length)]
    }
    else if(catagoryNum==1){
        word=foods[Math.floor(Math.random() * foods.length)]
    }
    else if(catagoryNum==2){
        word=objects[Math.floor(Math.random() * objects.length)]
    }
    else if(catagoryNum==3){
        word=activities[Math.floor(Math.random() * activities.length)]
    }

    }





// Gameplay Functions


    
    artistCaughtBtn.addEventListener('click', (e) => {
        artistCaughtBtn.classList.toggle('hidden')
        artistNotCaughtBtn.classList.toggle('hidden')
        fartistCorrect.classList.toggle('hidden')
        fartistIncorrect.classList.toggle('hidden')
        catagoryWrapper.classList.add('hidden')
    })
    fartistCorrect.addEventListener('click', (e) =>{
        e.preventDefault()
        fartistCorrect.classList.toggle('hidden')
    fartistIncorrect.classList.toggle('hidden')
    fartistScore=true
        addScore();
    })
    fartistIncorrect.addEventListener('click', (e) =>{
        e.preventDefault();
        fartistCorrect.classList.toggle('hidden')
        fartistIncorrect.classList.toggle('hidden')
        artistScore=true;
        addScore();
    })
    artistNotCaughtBtn.addEventListener('click', (e) =>{
        artistCaughtBtn.classList.toggle('hidden')
        artistNotCaughtBtn.classList.toggle('hidden')
        fartistScore=true;
        addScore();
        catagoryWrapper.classList.add('hidden')
    })
    nextRoundBtn.addEventListener('click', (e) =>{
        nextRoundBtn.classList.add('hidden')
        currentScoresWrapper.classList.add('hidden')
        currentScoreText.classList.add('hidden')
        currentScores.classList.add('hidden')
        pickRand=true;
        addScore()
        namesUL.classList.remove('hidden')
        startDirection.classList.remove('hidden')
        roundStart.classList.remove('hidden')
        pickWord();
    })


function printScore(){
    currentScores.innerHTML = '';
    var i=0 
    while(names[i] != undefined){ //Runs for entire length of array
     const playerScore = document.createElement('li') //Creates a list item
    playerScore.id = i +'artist'; //Gives the list item an id, incrementing from 0 each time the while loop runs
        playerScore.innerText=names[i] + " - " + window['player' + i]; //Sets the innerHTML of the list item to Player Name: (Score)
        currentScores.appendChild(playerScore); //Appends the child to show in the html
        i++; 
    }
currentScoresWrapper.classList.remove("hidden")
currentScoreText.classList.remove('hidden')
currentScores.classList.remove('hidden')
}

function addScore(){
    if(pickRand){
    rand = Math.floor(Math.random() * names.length);
    pickRand=false;
    }
    while(playerCreation){
    for(i=0; i<=names.length;i++){
    window['player' + i] = 0;
    }
    playerCreation=false;
}
faker = names[rand]
if(fartistScore){
    window['player' + rand] = window['player' + rand] + 2
    if(window['player' + rand] >=5){
        winnerScreen.innerHTML+=names[rand];
        winnerScreen.classList.remove('hidden');
        winner.classList.toggle('hidden');
        gameOver=true;
    }
    nextRoundBtn.classList.remove('hidden')
    printScore();
    fartistScore=false;
}
else if(artistScore){
    i=0
    var winners=0;
    while(i<names.length){
        if(i!=rand){
        window['player' + i] ++;
        if(window['player' + i] >= 5){
            if(winners>0){
                winnerScreen.innerHTML+= ","
            }
            winners++;
            winnerScreen.innerHTML+=" " + names[i];
            currentScoreText.innerHTML="Final Scores"
        }
        }
        i++;
    }
    nextRoundBtn.classList.remove('hidden')
    printScore();
    artistScore=false;
}
    if(winners>1){
        winners=0;
        winnerScreen.classList.remove('hidden');
        tie.classList.toggle('hidden');
        gameOver=true;
    }
    else if(winners==1){
        winners=0;
        winnerScreen.classList.remove('hidden');
        winner.classList.toggle('hidden');
        gameOver=true;
    }
    if(gameOver){
        for(i=0;i<names.length;i++){
            window['player' + i] =0;
        }
        nextRoundBtn.classList.add('hidden')
        replayBtn.classList.toggle("hidden")
        replayBtn.addEventListener('click', (e) =>{
            inputWrapper.classList.remove('hidden')
            addPlayerText.classList.remove('hidden')
            winnerScreen.innerHTML=''
            currentScoresWrapper.classList.add('hidden')
            winnerScreen.classList.toggle('hidden')
            winner.classList.add('hidden')
            tie.classList.add('hidden')
            form.classList.remove('hidden')
            input.classList.remove('hidden')
            namesUL.classList.remove('hidden')
            nameSub.classList.remove('hidden')
            replayBtn.classList.add('hidden')
            currentScoreText.classList.add('hidden')
            currentScores.classList.add('hidden')
            playerAddDirections.classList.remove('hidden')
            gameOver=false;
            playerCreation=true;
            showRole=false;
            gameStart=true;
        })
       
    }
}



