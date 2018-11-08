// -- game.js --


var game = {
    breeds: ["boxer","poodle","collie", "labradore", "husky", "sheltie",
             "beagle", "bulldog", "pug", "chihuahua", "dachshund", "maltese",
             "pomeranian", "rottweiler", "greyhound"],
    numberWins: 0,
    guessesRemaining: 0,
    
    lettersInWord: [""],

    breedToGuess: function() {
        var selectedBreed = this.breeds[Math.floor(Math.random() * game.breeds.length)];
        return(selectedBreed)   
    },
    numLettersToWin: function(nameBreed) {
        var numLetters = nameBreed.length;
        return numLetters;
    },
    turnOffWelcome: function() {
      document.getElementById('myJumbotron-0').style.display='none';
      document.getElementById('h-1').style.display='block';
    },
    turnOnWelcome: function() {
      document.getElementById('myJumbotron').style.display='block';
    },
    setupGamePage: function() {
      document.getElementById('myJumbotron-0').style.display='none';
    },
    runGame: function() {

     

    console.log("Start of game");
    console.log("--------------------");
    console.log(" ");

    // var doggie = "rottweiler";

    var doggie = game.breedToGuess();

    var numOfMatches=0;
    var matches = 0;

    var display = [doggie.length];
    var guessesRemain = doggie.length;
    

      document.onkeyup = function(event) {

      game.lettersInWord = doggie.split("");

      console.log("dog breed is " + doggie);
      console.log("key pressed = " + event.key);

    

      for (i=0; i< doggie.length; i++){

          if (event.key === game.lettersInWord[i]) {

              console.log("game letter " +  game.lettersInWord[i] + " matches event key");

              matches++;
              console.log("Number of Matches = " + matches);
              display[i] = game.lettersInWord[i];
              var word = display.join("");
              console.log("word = " + word);
          }
          else
          {
            console.log("game letter " + game.lettersInWord[i] +  " does not match key"); 
          }
          
          if ( word == doggie){
                console.log("");
                console.log("---------------------------");
                console.log("You guessed the word " + doggie);
                matches = 0;
                doggie = game.breedToGuess();
                console.log("New doggie to guess= " + doggie);
                console.log("----------------------------");
                
              }
            }
            // } 
            // else 
            //   {
            //     console.log("game letter " + game.lettersInWord[i] +  " does not match key");
            //   } 
                // } 
            // else 
            //   {
            //     console.log("game letter " + game.lettersInWord[i] +  " does not match key");
            //   } 
        }
      
    }
    };
        
        
        
        // if (game.lettersInWord[i] === event.key) {
        //      console.log("correct letter guessed " + game.lettersInWord[i]);
        //      i++;
        //      if (i+1 == doggie.length){
        //       console.log("word is matched");
        //       i=0;
        //      }
        // }
        
        

        // for (i=0; i < doggie.length ; i++) {
        //    console.log("key pressed is " + event.key);
        //    console.log("lettersInWord[" + i + "] is " + game.lettersInWord[i]);
        // }

          // if (game.lettersInWord[i] === event.key) {
          //     console.log("correct letter guessed " + game.lettersInWord[i]); 
          // }
          
          // else {
          //     console.log("letter is not in the word " + doggie);
          //     // decrement number of gueses counter 
               
          //     console.log("");
          //     console.log("get next letter ----");

          // }
          
          // alert("letter " + i + " in " + doggie + " is " + game.lettersInWord[i]);

    // }



        // alert("press any key to start the game");
    
    
        // for (i=0 ; i < game.breeds.length ; i++) {
    
        //     var doggie = game.breedToGuess()
    
        //     alert("breed to be guessed is " + doggie);
    
        //     alert("number of letters in this breed is " + game.numLettersToWin(doggie));
        //     alert("you will have " + doggie.length*2 + " chances to guess the breed of " + doggie);
        // }

// -- Main Section of Game --

// document.onkeyup = function(event) {

//     alert("press any key to start the game");


//     for (i=0 ; i < game.breeds.length ; i++) {

//         var doggie = game.breedToGuess()

//         alert("breed to be guessed is " + doggie);

//         alert("number of letters in this breed is " + game.numLettersToWin(doggie));
//         alert("you will have " + doggie.length*2 + " chances to guess the breed of " + doggie);
//     }
// }



      // var car = {
      //   make: "Honda",
      //   model: "Fit",
      //   color: "Blue Raspberry",
      //   mileage: 3000,
      //   isWorking: true,

      //   driveToWork: function() {

      //     alert("Old Mileage: " + this.mileage);

      //     this.mileage = this.mileage + 8;

      //     alert("New mileage: " + this.mileage);
      //   },

      //   driveAroundWorld: function() {

      //     alert("Old Mileage: " + this.mileage);

      //     this.mileage = this.mileage + 24000;

      //     alert("New Mileage: " + this.mileage);
      //     alert("Car needs a tuneup!");

      //     this.isWorking = false;
      //   },

      //   getTuneUp: function() {
      //     alert("Car is ready to go!");
      //     this.isWorking = true;
      //   },

      //   honk: function() {
      //     alert("Honk! Honk!");
      //   }
      // };


      // How would we log...

      // The car's make?

      // console.log("This car's make is " + car.make);

      // // The car's model?

      // console.log("This car's model is " + car.model)

      // // The car's mileage?

      // console.log("This car's model is " + car.mileage)

      // // How would we run the car's driveToWork method?

      // car.driveToWork();

      // // How would we run the car's driveAroundWorld method?

      // car.driveAroundWorld();

      // // How would we run the getTuneUp method?

      // car.getTuneUp();