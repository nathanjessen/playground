// Sample problems from
// https://github.com/jamesqquick/javascript-array-functions-practice.git

const characters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male',
  },
];

//***MAP***
const names = characters.map((character) => character.name);
const heights = characters.map((char) => char.height);

const nameHeights = characters.map((char) => ({
  name: char.name,
  height: char.height,
}));

const firstNames = characters.map((char) => char.name.split(' ')[0]);

//***REDUCE***
const totalMass = characters.reduce((acc, char) => acc + char.mass, 0);
const totalHeight = characters.reduce((acc, char) => acc + char.height, 0);

const eyes = characters.reduce((acc, char) => {
  const color = char.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

const totalCharacterNameLetters = characters.reduce(
  (acc, char) => acc + char.name.length,
  0
);

//***FILTER***
const highMassCharacters = characters.filter((char) => char.mass > 100);
const shortCharacters = characters.filter((char) => char.height < 200);
const maleCharacters = characters.filter((char) => char.gender === 'male');
const femaleCharacters = characters.filter((char) => char.gender === 'female');

//***SORT***
const charByMass = characters.sort((a, b) => a.mass - b.mass);
const byHeight = characters.sort((a, b) => a.height - b.height);

const byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});

const byGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  return 1;
});

//***EVERY***
const allBlueEyes = characters.every((char) => char.eye_color === 'blue');
const allHighMass = characters.every((char) => char.mass > 40);
const allShort = characters.every((char) => char.height < 200);
const allMale = characters.every((char) => char.gender === 'male');

//***SOME***
const someMale = characters.some((char) => char.gender === 'male');
const someBlueEyes = characters.some((char) => char.eye_color === 'blue');
const someTaller = characters.some((char) => char.height > 210);
const someLowMass = characters.some((char) => char.mass < 50);
