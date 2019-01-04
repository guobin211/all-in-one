# all-in-one

  >  完整的跨平台项目

```  
    桌面: web + win + mac 

    移动: h5 + android + ios

    后段: nodejs + mongodb + nginx + pm2

```

### 开发目录结构

```
    app-angular   -- angular + electron  桌面端
      
    app-ionic     -- ionic + angular  移动端
      
    src           -- nodejs 服务端

    copyStatic.ts   -- 复制静态资源文件

    nginx.conf      -- nginx 配置文件

```      

### 使用说明

1. 配置服务器环境

```
    node.js  ^10.14.0
    express  ^4.16.0
    mongodb  ^4.0.0
    mongoose ^ 5.2.16

```
    
2. 构建angular

3. 构建ionic

4. 构建server

5. 发布dist到服务器

6. 通过pm2启动并管理项目

