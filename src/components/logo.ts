import chalk from 'chalk';
import figlet from 'figlet';


class Logo {
  constructor (
    public name: string
  ) {
    this.name = name;
  }

  showIt() {
    console.log(
      chalk.blueBright(
        figlet.textSync(
          'Weather', { horizontalLayout: 'fitted' }
        )
      )
    );
  }
}

export default Logo;