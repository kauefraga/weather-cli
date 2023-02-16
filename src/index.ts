import { clear } from 'node:console';
import { prompt } from 'enquirer';

import { getWeather } from './services/get-weather';
import Logo from './components/logo';
import Answer from './components/answer';

const logo = new Logo('Weather');

export async function main() {
  clear()
  logo.showIt();

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

  const [key, value] = userAnswer.split(':');
  const location = value.replace(/["}]/g, '');

  const data = await getWeather(location);

  const answer = new Answer(data);

  answer.showJson();
}

main()
