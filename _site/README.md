# Hell Let Loose 声音识别指南

这是一个帮助玩家识别《Hell Let Loose》游戏中飞机和载具声音的交互式网站。通过音频测试和参考资料，玩家可以学习区分不同国家的军用载具和飞机声音。

## 功能特性

- **飞机声音测试**: 识别不同国家（美国、德国、苏联、英国）的飞机声音，包括：
  - 补给/弹药投放
  - 空降兵投放
  - 侦察机
  - 轰炸机
  - 精确打击
  - 扫射攻击

- **载具声音测试**: 识别各种地面载具声音，包括：
  - 卡车和吉普车
  - 半履带车
  - 轻型、中型、重型坦克
  - 侦察坦克

- **交互式学习**: 提供音频播放、多选题测试和即时反馈
- **参考资料**: 包含所有载具和飞机的音频参考库

## 本地运行方法

### 环境要求

- Ruby (推荐版本 2.7 或更高)
- Bundler gem
- Git

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd hll-identification-guide
   ```

2. **安装依赖**
   ```bash
   bundle install
   ```

3. **启动开发服务器**
   ```bash
   bundle exec jekyll serve
   ```

4. **访问网站**
   
   服务器启动后，在浏览器中访问：
   - 本地访问: `http://localhost:4000`
   - 局域网访问: `http://你的IP地址:4000`

### 常见问题解决

**如果遇到Ruby版本问题:**
```bash
# 安装指定版本的Ruby (使用rbenv)
rbenv install 3.0.0
rbenv local 3.0.0
```

**如果遇到权限问题:**
```bash
# 使用用户级别安装gems
bundle install --path vendor/bundle
```

**如果遇到Jekyll版本冲突:**
```bash
# 清理并重新安装
bundle clean --force
bundle install
```

### 项目结构

```
├── audio/              # 音频文件目录
├── img/               # 图片资源
├── _layouts/          # Jekyll布局模板
├── index.html         # 飞机声音测试页面
├── vehicles.html      # 载具声音测试页面
├── script.js          # 主要JavaScript逻辑
├── styles.css         # 样式文件
├── _config.yml        # Jekyll配置
└── Gemfile           # Ruby依赖配置
```

### 开发说明

- 网站使用Jekyll静态站点生成器构建
- 前端使用Bootstrap框架和jQuery
- 音频文件支持MP3格式
- 配置允许局域网访问，方便在其他设备上测试

### 部署

项目可以部署到GitHub Pages或任何支持静态网站的托管服务。