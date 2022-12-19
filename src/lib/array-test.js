function sum(a, b, ...args) {
  if (!args.length) return a + b;
  return args.reduce((acc, arg) => acc + arg, a + b);
}

console.log(sum(5, 6));
console.log(sum(5, 6, 7, 8));

function stringIncludes(abc, xyz) {
  return abc.toLowerCase().includes(xyz.toLowerCase());
}

console.log(stringIncludes('your mom is awesome', 'your MOm'));

function getNames(arr) {
  // return arr.filter((person) => person.name).map((person) => person.name);
  return arr.reduce((acc, person) => {
    if (person.hasOwnProperty('name')) {
      acc.push(person.name);
    }

    return acc;
  }, []);
}

console.log(
  getNames([
    { age: 25 },
    { name: 'sam', age: 26 },
    {},
    { name: 'don' },
    { name: 'mark' },
    { b: '2' },
  ])
);

function getLargestIntIndex(arr) {
  const arrCopy = [...arr].sort((a, b) => b - a);
  const largest = arrCopy[0];

  // return arr.find((item, ind) => item === largest);
  return arr.indexOf(largest);
}

console.log(getLargestIntIndex([1, 54, 23, 381, 47, 29]));

function delay(n) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

const test = async () => {
  console.time('delay test');
  await delay(1000);
  console.timeEnd('delay test');
};

test().then(() => console.log('finished'));
