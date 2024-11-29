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
const _names = characters.map((character) => character.name);
const _heights = characters.map((char) => char.height);

const _nameHeights = characters.map((char) => ({
  name: char.name,
  height: char.height,
}));

const _firstNames = characters.map((char) => char.name.split(' ')[0]);

//***REDUCE***
const _totalMass = characters.reduce((acc, char) => acc + char.mass, 0);
const _totalHeight = characters.reduce((acc, char) => acc + char.height, 0);

const _eyes = characters.reduce((acc, char) => {
  const color = char.eye_color;
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, {});

const _totalCharacterNameLetters = characters.reduce((acc, char) => acc + char.name.length, 0);

//***FILTER***
const _highMassCharacters = characters.filter((char) => char.mass > 100);
const _shortCharacters = characters.filter((char) => char.height < 200);
const _maleCharacters = characters.filter((char) => char.gender === 'male');
const _femaleCharacters = characters.filter((char) => char.gender === 'female');

//***SORT***
const _charByMass = characters.sort((a, b) => a.mass - b.mass);
const _byHeight = characters.sort((a, b) => a.height - b.height);

const _byName = characters.sort((a, b) => {
  if (a.name < b.name) return -1;
  return 1;
});

const _byGender = characters.sort((a, b) => {
  if (a.gender < b.gender) return -1;
  return 1;
});

//***EVERY***
const _allBlueEyes = characters.every((char) => char.eye_color === 'blue');
const _allHighMass = characters.every((char) => char.mass > 40);
const _allShort = characters.every((char) => char.height < 200);
const _allMale = characters.every((char) => char.gender === 'male');

//***SOME***
const _someMale = characters.some((char) => char.gender === 'male');
const _someBlueEyes = characters.some((char) => char.eye_color === 'blue');
const _someTaller = characters.some((char) => char.height > 210);
const _someLowMass = characters.some((char) => char.mass < 50);
