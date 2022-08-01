const dirName = 'http://localhost:3333/';

const loadingImages = [
  { id: 0, src: dirName + 'pykadex/loading/charmander.svg', description: 'Charmander' },
  { id: 1, src: dirName + 'pykadex/loading/pikachu.svg', description: 'Pikachu' },
  { id: 2, src: dirName + 'pykadex/loading/squirtle.svg', description: 'Squirtle' },
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
    
  }
  return tempArray;
}

export default getLoading;