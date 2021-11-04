import boxen, { BorderStyle } from 'boxen';
import chalk from 'chalk';
import Schedule from './schedule';

export default async () => {
  const schedule = new Schedule();
  schedule.run();

  console.log(
    boxen(
      chalk.green(`
      初始化完成！
      1.请在您的项目中导入tailwind.css文件！
      2.并重启您的项目来开启tailwind体验！
      tips: 推荐安装vscode插件Tailwind CSS IntelliSense 获得更好的代码提示体验！
    `),
      { padding: 1, margin: 1, borderStyle: BorderStyle.Double }
    )
  );
};
