const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

// First doggie object
// Destructuring Animal Sounds
// Destructuring Animal Sounds
// Destructuring Animal Sounds
// Destructuring Animal Sounds// Destructuring Animal Sounds// Destructuring Animal Sounds
const animalSounds = ['moo', 'baa', 'meow', 'woof', 'oink'];
const [moo, baa, meow, woof, oink] = animalSounds;
console.log(moo);    // "moo"
console.log(baa);    // "baa"
console.log(meow);   // "meow"
console.log(woof);   // "woof"
console.log(oink);   // "oink"

// Destructuring Animal Names
const animalNames = ['bessie', 'dolly', 'spot', 'whiskers'];
const [bessie, dolly, spot, whiskers] = animalNames;
console.log(bessie); // "bessie"
console.log(dolly);  // "dolly"
console.log(spot);   // "spot"
console.log(whiskers); // "whiskers"

// Destructuring Animal Colors
const animalColors = ['blackAndWhite', 'black', 'white'];
const [blackAndWhite, black, white] = animalColors;
console.log(blackAndWhite); // "blackAndWhite"
console.log(black);         // "black"
console.log(white);         // "white"

// Destructuring Rainbow Colors
const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;
console.log(red);    // "red"
console.log(orange); // "orange"
console.log(yellow); // "yellow"
console.log(green);  // "green"
console.log(blue);   // "blue"
console.log(indigo); // "indigo"
console.log(violet); // "violet"

// Destructuring Rainbow Color Initials
const [v, o, y, g, b, i] = ['violet', 'orange', 'yellow', 'green', 'blue', 'indigo'];
console.log(v); // "violet"
console.log(o); // "orange"
console.log(y); // "yellow"
console.log(g); // "green"
console.log(b); // "blue"
console.log(i); // "indigo"

// Destructuring Indigo
const [indg] = rainbowColors.slice(5, 6); // Only taking 'indigo'
console.log(indg); // "indigo"

// Destructuring from Object for Muppets
const anotherMuppet = {
  muppetName: 'Kermit',
  job: 'Frog',
  partner: 'Miss Piggy',
  details: {
    nestedJob: 'Show Host',
    color: 'Green'
  }
};

const { muppetName, job, partner, details: { nestedJob, color } } = muppet;
console.log(muppetName); // "Kermit"
console.log(job);        // "Frog"
console.log(partner);    // "Miss Piggy"
console.log(nestedJob);  // "Show Host"
console.log(color);      // "Green"

// Destructuring Songs (2 and 4)
const songs = ['song1', 'Moving Right Along', 'song3', 'I Hope That Something Better Comes Along'];
const [, song2, , song4] = songs;
console.log(song2); // "Moving Right Along"
console.log(song4); // "I Hope That Something Better Comes Along"