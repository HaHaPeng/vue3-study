# vue3-study

### 目录结构

```
.
├── public                  # 不需要打包的静态资源
│   └── favicon.ico
├── src
│   ├── api                 # 后台 API 接口封装
│   ├── assets              # 需要打包的静态资源
│   ├── components          # 公共组件
│   ├── composables         # 通用的组合式 API
│   ├── layout              # 页面布局模板
│   ├── plugins             # 插件
│   ├── router              # 路由
│   ├── store               # Vuex 存储
│   ├── styles              # 样式
│     └── index.scss        # 全局通用样式
│   ├── utils               # 工具模块
│   ├── views               # 路由页面
│   ├── App.vue             # 根组件
│   ├── main.ts             # 入口模块
│   ├── shims-vue.d.ts      # 补充 .vue 模块类型声明
│   └── vite-env.d.ts       # 补充 vite 类型声明
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

### 安装

```
npm install
```

### 启动

```
npm run dev
```

### 打包

```
npm run build
```

### 预览

```
npm run build && npm run preview
```
