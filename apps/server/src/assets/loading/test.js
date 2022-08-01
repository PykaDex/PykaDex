const dirName = 'src/assets/loading/images';

const loadingImages = [
  { id: 0, src: dirName + '/charmander.svg', description: 'Charmander' },
  { id: 1, src: dirName + '/pikachu.svg', description: 'Pikachu' },
  { id: 2, src: dirName + '/squirtle.svg', description: 'Squirtle' },
];

const buffer = 3;

function getLoading() {
  const loadingIndex = randomIntFromInterval(0, loadingImages.length, buffer);

  return loadingIndex.map((index) => loadingImages[index]);
}

function randomIntFromInterval(min, max, buffer) {
  const tempArray = [];

  while (tempArray.length < buffer) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);

    if (!tempArray.includes(randomNumber)) {
      tempArray.push(randomNumber);
    }
    console.log(tempArray);
  }
  return tempArray;
}

console.log(getLoading());
