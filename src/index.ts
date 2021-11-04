import 'module-alias/register';
import path from 'path';
import chalk from 'chalk';
import commander from 'commander';
import pkg from '../package.json';
import worker from './utils/worker';
import initStandard from './standard';
const { program } = commander;

const ownDir = path.resolve(__dirname, process.env.NODE_ENV === 'development' ? '../' : '../../');
worker.setOwnDir(ownDir);
worker.setWorkDir(process.cwd());

program
  .version(pkg.version, '-v --version')
  .description('tailwindcss cli for create config for your webpack proj')
  .action(() => {
    console.log(chalk.green('Welcome to tailwindcss Cli!'));
  });

program
  .command('init')
  .description('Initial config')
  .action(initStandard);

program.on('--help', () => {
  console.log('no help, just do it!');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
