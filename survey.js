const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :) `, (nickname) => {
  rl.question(`What's an activity you like doing? `, (activity) => {
    rl.question(`What do you listen to while doing that? `, (listen) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.?) `, (whichMeal) => {
        rl.question(`What's your favourite thing to eat for that meal? `, (whatMeal) => {
          rl.question(`Which sport is your absolute favourite? `, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (superpower) => {
              rl.close();
              console.log(`${nickname} loves listening to ${listen} while ${activity}, devouring ${whatMeal} for ${whichMeal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`)
            });
          });
        });
      });
    });
  });  
});

// Sample output
// BeRad loves listening to nursery rhymes while being rad, devouring wedding cake for third dinner, prefers competitive eating over any other sport, and is amazing at self induced comas.






