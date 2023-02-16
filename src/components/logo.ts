import chalk from 'chalk';
import figlet from 'figlet';

export function showLogo(name: string) {
  return console.log(
    chalk.blueBright(
      figlet.textSync(
        name, { horizontalLayout: 'fitted' }
      )
    )
  );
}
