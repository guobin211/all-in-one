# all-in-one

### 完整的跨平台项目

```  
    桌面: web + win + mac

    移动: h5 + android + ios

    后端: nodejs + mongodb + nginx + pm2

```

### 移动端预览

<figure style="float: left">
    <img src="https://github.com/guobin211/all-in-one/blob/master/images/android.jpeg" width="45%">
    <img src="https://github.com/guobin211/all-in-one/blob/master/images/h5-list.png" width="45%">
</figure>

### 桌面端预览


### 开发测试

``` 
    // api文档
    http://localhost:3000/api

    // pc端
    http://localhost:3000/pc

    // 移动端
    http://localhost:3000/h5

```

### 开发目录结构

```
    app-ng   -- angular + electron  桌面端
      
    app-ionic3     -- ionic3 + cordova  移动端
    
    app-ionic4    -- ionic4 + cordova  移动端
      
    src           -- nodejs 服务端

    copyStatic.ts   -- 部署配置

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

```
    cd app-ng
    npm run build
```

3. 构建ionic

```
    cd app-ionic
    npm run build
```

4. 构建server

```
    npm run build
```

5. 发布dist到服务器

dist目录是最终部署的项目文件

6. 通过pm2启动并管理项目


### 项目结构

[![Fram-Design](https://github.com/guobin211/all-in-one/blob/master/images/fram.jpg)](https://github.com/guobin211/all-in-one)



