# ai-lcs.xyz

李承晟的个人主页 / Portfolio。独立于原有博客 https://ai-lcs.github.io/。

原生 HTML、CSS、JavaScript，无依赖、无构建步骤、无后端。

## 本地预览

在本目录执行：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

打开 http://127.0.0.1:4173 。也可以直接双击 `index.html`；复制邮箱功能只在安全上下文且浏览器授权时提供。

## 文件与维护

- `index.html`：个人介绍、项目卡片、联系方式、页面元信息。
- `styles.css`：颜色、排版、桌面与手机布局。主题变量在文件顶部。
- `script.js`：年份与复制邮箱交互。
- `assets/favicon.svg`：网站图标。
- `assets/kevin-li.webp`：本人提供的桌面插画照片的压缩版本，用于首页右侧展示。

页脚收录 B 站、公众号“小晟随谈”和最新文章。公众号主页参数取自本人提供的文章页面；该主页在普通浏览器中可能要求微信环境或验证，因此同时保留直接文章入口。

- `.nojekyll`：让 GitHub Pages 直接发布静态文件。
- `CNAME`：自定义域名 `ai-lcs.xyz`，更新网站时必须保留。

仓库当前文件仅保留现用页面和资源。预览截图、测试输出与依赖目录通过 `.gitignore` 排除，不上传到 GitHub。旧版页面可从 Git 提交历史追溯，不参与当前网站部署。

修改文字直接编辑 HTML。新增项目可复制一个 `article.project`。项目链接使用完整 URL，站内资源使用相对路径，以兼容项目地址与自定义域名。网站无外部字体、运行时 API 或跟踪脚本。

## GitHub Pages

目标仓库：`ai-lcs/ai-lcs.xyz`。

线上地址：https://ai-lcs.xyz/ 。已绑定自定义域名并开启 HTTPS。

GitHub Pages 从 `main` 分支的根目录直接部署，无需构建。日常更新流程：

1. 修改前先确认工作区状态，执行 `git pull --ff-only` 同步远端；如果分支分叉，先检查差异并合并，不强制覆盖远端。
2. 编辑页面或资源，本地预览并核对；保留 `CNAME` 和 `.nojekyll`。
3. 提交修改并执行 `git push origin main`。
4. 在仓库 Actions 确认对应提交的 Pages 部署成功，再检查线上页面与资源是否更新。推送成功不等于部署完成。

不修改 `ai-lcs/ai-lcs.github.io` 原博客仓库。域名解析与验证记录独立于页面文件，日常内容更新不需要调整 DNS。

官方文档：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 内容说明

个人介绍与竞赛经历依据本人提供的简历整理；“关于我”保留本人指定的两段文字，并补充一句收尾；英文名 Kevin Li 来自 `ai-lcs/ai-lcs` 个人简介。项目依据公开仓库 README，“项目与实践”包含 Focus Desk、Blog to WeChat、数学建模 Skill、MUSCLE；“分享与开源”收录美赛 H 奖作品和数学分析教材合集。奖项完整收录简历中的四项赛事，技能证书单独展示。MUSCLE 展示的是论文复现与实验流程实践，不声称超过论文结果。照片由本人提供，原文件保留于桌面。简历原文件、电话及其他私人材料不在仓库中。
