# 理财师项目

@(PC项目)[webpack|react|es6|react-redux|react-router|react-router-redux|antd]

@(Mobile项目)[webpack|react|es6|react-redux|react-router|react-router-redux]

-------------------
### 开发工具
1、**代码编辑器**推荐使用[Visual Studio Code](https://code.visualstudio.com/Download)看人习惯，也可以使用Sublime Text以及Webstorm：

- **VSCode必备插件** ：`ESLint`、`Babel ES6/ES7`、`Sass`；
- **VSCode可选插件** ：`vscode-icons`、`Visual Studio Code Settings Sync`、`VS Code Reactjs snippets`；
- **其他** ：一些主题和CMD工具插件可自行下载，插件库地址：[传送门](https://marketplace.visualstudio.com/VSCode)。

2、**代码版本管理工具**使用[GIT](https://git-scm.com/downloads)，或者其它图形化工具[Source Tree](https://www.sourcetreeapp.com/download/)。

3、**浏览器**使用[Chorme](https://www.baidu.com)和[火狐](http://www.firefox.com.cn/download/)，目前考虑兼容这俩款浏览器。


### 开发环境
1、**Nodejs**[下载版本5.1.0](https://nodejs.org/dist/v5.1.0/)。

2、**GitLab**[传送门](http://git.weihui.com:8082/mengmian/licaishi)，需要配置C:\Windows\System32\drivers\etc `hosts`文件: `10.192.69.12 git.weihui.com`。

3、**GitLab**[生成配置SSHKey](http://www.jianshu.com/p/31cbbbc5f9fa/)后，克隆代码到本地。

4、**编辑器**打开克隆代码的根目录，执行`npm install`,执行过程中如出现报错，可能缺失某些文件，则需要`完全安装VS2015`，ps: 因安装VS2015时间太长，可以考虑拷贝同事根目录下的`node_modules`目录文件。

### 启动项目
1、**H5**
- **启动webpack** ：`npm run webpack`，webpack默认打包移动端的文件，不需要`-m`后缀；
- **启动api** ：`npm run api`，默认启动的为开发环境的api，如果需要启动测试环境的api，使用命令：`npm run api-test`；
- **访问项目** ：打开浏览器，输入地址`http://localhost:4010/`，登录账号密码：请询问测试；

2、**投资助手**
- **启动webpack** ：`npm run webpack-as`，webpack默认打包移动端的文件，不需要`-m`后缀；
- **启动api** ：`npm run api`，默认启动的为开发环境的api，如果需要启动测试环境的api，使用命令：`npm run api-test`；
- **访问项目** ：打开浏览器，输入地址`http://localhost:4012/`，登录账号密码：请询问测试；


3、**Provider(资产端)**
- **启动webpack** ：`npm run webpack-pd`；
- **启动api** ：`npm run api`，默认启动的为开发环境的api，如果需要启动测试环境的api，使用命令：`npm run api-test`；
- **访问项目** ：打开浏览器，输入地址`http://localhost:4014`，登录账号：`gys@qq.com`，登录密码：`1qaz2wsx`；

4、**Dealer(经销商)**
- **启动webpack** ：`npm run webpack-dl`；
- **启动api** ：`npm run api`，默认启动的为开发环境的api，如果需要启动测试环境的api，使用命令：`npm run api-test`；
- **访问项目** ：打开浏览器，输入地址`http://localhost:4015`，登录账号：`jxs@qq.com`，登录密码：`1qaz2wsx`；


5、**Console(控制台)**
- **启动webpack** ：`npm run webpack-cs`；
- **启动api** ：`npm run api`，默认启动的为开发环境的api，如果需要启动测试环境的api，使用命令：`npm run api-test`；
- **访问项目** ：打开浏览器，输入地址`http://localhost:4013`，登录账号：`super@admin.com`，登录密码：`abc123456`；


### 项目发布
1、**ssh**地址：`10.0.60.44 22 `，登录账号：`root`，登录密码: `admin@vm2015`。

2、**cd**到`licaishi`目录，路径如下： `/home/app/licaishi`。

3、**git pull**拉取最新代码，如果有需要安装新的依赖，则执行命令`npm install`,如果没有新依赖需要安装，则继续下一步操作。

4、**打包**执行以下命令进行打包，不同项目命令不同，具体如下：
- **H5**: `NODE_ENV=test webpack --progress`，默认为H5，不需要加平台设置命令。
- **投资助手**: `NODE_ENV=test PLATFORM=as webpack --progress`。
- **provider**: `NODE_ENV=test PLATFORM=pd webpack --progress`。
- **dealer**: `NODE_ENV=test PLATFORM=dl webpack --progress`。
- **console**: `NODE_ENV=test PLATFORM=cs webpack --progress`。

5、**重启服务**，打包完成后，执行以下命令重启项目服务，具体如下：
- **H5**: `pm2 restart lcs-m`。
- **投资助手**: `pm2 restart lcs-as`。
- **provider**: `pm2 restart lcs-pd`。
- **dealer**: `pm2 restart lcs-dl`。
- **console**: `pm2 restart lcs-cs`。
- **api**: `pm2 restart lcs-api`，如果服务端代码没有修改，则不需要重启api。

6、**测试环境**查看最新页面，访问地址如下（测试环境下登录账号和密码与开发环境一致）：
- **H5**: `http://10.0.60.44:4000/`。
- **provider**: 资产端地址 `http://10.0.60.44:4004`。
- **dealer**: 财富端地址 `http://10.0.60.44:4005`。
- **console**: `http://10.0.60.44:4003`。

6、**生产环境**查看发布上线页面，访问地址如下（开发人员暂无账号，由测试人员进行测试）：
- **H5**: `https://m.jupaionline.com`。
- **provider**: 资产端地址 `https://p.jupaionline.com`。
- **dealer**: 财富端地址 `https://d.jupaionline.com`。
- **console**: `https://c.jupaionline.com`。

-------------------
## GIT配置以及常规操作命令
```
可以把命令缩短下，加快工作效率：
git config --system alias.st status
git config --system alias.ci commit
git config --system alias.co checkout
git config --system alias.br branch
git config --global color.ui true
git config --global core.autocrlf input
git config --system core.autocrlf input
git config core.autocrlf input

配置自己的用户名和邮箱：
git config --global user.name "username"
git config --global user.email "username@163.com"

分支查看：
查看本地分支：git br
查看全部分支: git br -av

1、创建分支两种方式，如从master上创建develop分支
git br develop master
git co -b develop master

2、切换分支
git co master
git co develop

3、合并分支
将develop合并到master：
git co master
git merge --no-ff develop(合并本地的develop到master分支)
git merge --no-ff origin/develop(合并代码库的develop到master分支)

4、标记
    a. 打标记：git tag v0.1.0
    b. 查看标记：git tag -l
    c. 删除标记：git tag -d v0.1.0
    d. 删除远程tag：git push origin :refs/tags/v0.9.3
    e. 推送tag：git push --tags

5、误删除的文件一次性恢复，两种方式，首先切到bash命令模式下或linux下直接用：
    git ls-fies -d | xargs git co --
    git ls-files -d | xargs -i git co {}

6、删除分支
    删除本地分支：git br -d feature_test
    删除远程分支：git push origin :feature_test
    清除远程在本地存在，而远程已经删除的分支：git remote prune origin

7、恢复文件
    git co -- file
    命令中的“--”很重要，没有“--”，就变成了“创建一个新分支”的命令

8、查看提交
    git log --graph --pretty=oneline --abbrev-commit
    git log --stat

9、git stash命令
git stash
git stash pop
git stash list
git stash clear
git stash apply
git stash apply stash@{1}

10、提交远程分支
首次提交分支，需要加-u与远程分支关联： git push -u origin develop
关联过只用：git push


11、拉分支
更新当然分支：git pull
在master上分支上更新devlop分支：git pull origin develop:develop
删除远程已被删除的分支： git remote prune origin

12、查看远程地址
git remote -v
git remote show origin

13、清除修改
清除本地未提交的修改：git reset --hard
清除本地已提交但是未推送的修改：git reset --hard origin/master
```

-------------------

## 公司相关

1、**JIRA地址** [http://10.192.69.14:8081/secure/Dashboard.jspa](http://10.192.69.14:8081/secure/Dashboard.jspa)

2、**邮箱地址** [https://mail.ehousechina.com/](https://mail.ehousechina.com/)

3、**GITLab地址**  [http://git.weihui.com:8082/](http://git.weihui.com:8082/)

3、**SVN地址**  [http://10.192.69.12/svndata/repos1/pmd/JPOL](http://10.192.69.12/svndata/repos1/pmd/JPOL)

## 其他学习相关

1、**react**
- http://www.reactjs.cn/
- https://hulufei.gitbooks.io/react-tutorial/content/introduction.html
- https://github.com/react-guide/react-basic

2、**redux**
- http://redux.js.org/index.html
- http://cn.redux.js.org/docs/introduction/index.html
- http://zhenhua-lee.github.io/react/redux.html

3、**react-router**
- http://react-guide.github.io/react-router-cn/

4、**webpack**
- https://fakefish.github.io/react-webpack-cookbook/Getting-started.html
- http://webpack.github.io/docs/
- https://github.com/94dreamer/webpack

5、**es6**
- http://es6.ruanyifeng.com/

6、**ESLint**
- http://eslint.org/

7、**Ant-Design**
- http://ant.design/

