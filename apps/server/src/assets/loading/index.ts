import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirName = "src/assets/loading/images"

const loadingImages = [
  dirName + '/one.png',
  dirName + '/two.png',
  dirName + '/three.png',
  dirName + '/four.png',
  dirName + '/one.png',
];

const buffer = 3;

function getLoading() {
  const loadingIndex = randomIntFromInterval(1, loadingImages.length, buffer);

  return loadingIndex.map((item) => loadingImages[item]);
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