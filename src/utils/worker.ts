import path from 'path';
class Worker {
  // TODO: Mysterious Name
  private ownDir = './';
  private workDir = './';

  // TODO: Comments
  /**
   * 获取自身目录
   */
  public getOwnDir(): string {
    return this.ownDir;
  }

  // TODO: Comments
  /**
   * 设置自身目录
   */
  public setOwnDir(ownDir: string) {
    this.ownDir = ownDir;
  }

  // TODO: Comments
  /**
   * 设置工作目录
   */
  public setWorkDir(workDir: string) {
    this.workDir = workDir;
  }

  // TODO: Comments
  /**
   * 设置工作目录
   */
  public getWorkDir() {
    return this.workDir;
  }

  public getTemplateDir(fileName = '') {
    return path.join(this.getOwnDir(), `./templates/${fileName}`);
  }
}

const worker = new Worker();
export default worker;
