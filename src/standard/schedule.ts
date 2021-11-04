import fs from 'fs';
import path from 'path';
import shell from 'shelljs';
import worker from '@/utils/worker';
import chalk from 'chalk';
import ora from 'ora';
export default class Schedule {
  
  public run() {
    this.initTailwindCss();
    this.initTailwindConfig();
    this.initPostcssConfig();
    this.installDependencies(); // 安装相关依赖
  }

  private initTailwindCss() {
    const spinner = ora(chalk.blue('正在生成tailwindcss文件，请稍等...')).start();
    const file = fs.readFileSync(worker.getTemplateDir('tailwind.css'));
    const filePath = path.join(worker.getWorkDir(), './tailwind.css');
    fs.writeFileSync(filePath, file);
    spinner.stop();
  }

  private initPostcssConfig() {
    const spinner = ora(chalk.blue('正在生成postcss.config.js文件，请稍等...')).start();
    const file = fs.readFileSync(worker.getTemplateDir('postcss.config.js'));
    const filePath = path.join(worker.getWorkDir(), './postcss.config');
    fs.writeFileSync(filePath, file);
    spinner.stop();
  }

  private initTailwindConfig() {
    const spinner = ora(chalk.blue('正在生成tailwind.config.js文件，请稍等...')).start();
    const filePath = path.join(worker.getWorkDir(), 'tailwind.config.js');
    const file = fs.readFileSync(worker.getTemplateDir('./tailwind.config.js'));
    fs.writeFileSync(filePath, file);
    spinner.stop();
  }

  private installDependencies() {
    const spinner = ora(chalk.blue('配置文件更新完成，正在安装相关依赖，请耐心等待...')).start();
    const reply = shell.exec('cnpm install tailwindcss@1.9.6 postcss-preset-env@6.7.0 -D');
    spinner.stop();
    if (reply.code !== 0) {
      shell.exit(1);
    }
  }
}
