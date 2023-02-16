import { clear } from 'node:console';
import { prompt } from 'enquirer';

import { getWeather } from './services/get-weather';
import { showLogo } from './components/logo';
import { showApiResult } from './components/answer';

export async function main() {
  clear()
  showLogo('Weather');

  const userAnswer = await prompt({
    type: 'input',
    name: 'location',
    message: 'Enter a location:',
    validate: value => {
      if (value.length <= 1) {
        return 'Please, enter a valid location';
      }
      return true
    }
  })
  .then(answer => {
    return JSON.stringify(answer);
  });

  const { location } = JSON.parse(userAnswer)

  const data = await getWeather(location);

  showApiResult(data);
}

main()
