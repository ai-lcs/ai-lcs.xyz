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
- `assets/kevin-li.png`：本人提供的桌面插画照片，用于首页右侧展示。
- `assets/social-avatar.jpg`：本人提供的微信 / QQ 头像，与照片错落组合展示。

页脚收录 B 站、公众号“小晟随谈”和最新文章。公众号主页参数取自本人提供的文章页面；该主页在普通浏览器中可能要求微信环境或验证，因此同时保留直接文章入口。
- `.nojekyll`：让 GitHub Pages 直接发布静态文件。

修改文字直接编辑 HTML。新增项目可复制一个 `article.project`。项目链接使用完整 URL，站内资源使用相对路径，以兼容项目地址与自定义域名。网站无外部字体、运行时 API 或跟踪脚本。

## GitHub Pages

目标仓库：`ai-lcs/ai-lcs.xyz`。

第一版以本地预览和仓库同步为主。需要发布预览时，在仓库 Settings → Pages 选择 Deploy from a branch → main → /(root)。默认项目地址为 https://ai-lcs.github.io/ai-lcs.xyz/ （以 Pages 设置实际显示为准）。

域名审核完成后：

1. GitHub 个人 Settings → Pages → Add a domain，添加 `ai-lcs.xyz`，按提示在 DNS 添加 TXT 验证记录并保留。
2. **本仓库** Settings → Pages → Custom domain 设置 `ai-lcs.xyz`。
3. DNS 根域名 `@` 添加 GitHub 官方 A 记录：185.199.108.153、185.199.109.153、185.199.110.153、185.199.111.153；`www` 添加 CNAME 到 `ai-lcs.github.io`（不带路径）。先检查已有记录，避免冲突；不要使用通配符记录。
4. 等待解析和证书签发，开启 Enforce HTTPS。检查根域名、www 跳转、图片与链接。
5. GitHub 设置可能自动提交 CNAME 文件；本地继续工作前先 `git pull --ff-only`。

当前不添加 CNAME，以免审核阶段让预览跳转到未就绪的域名。不修改 `ai-lcs/ai-lcs.github.io` 仓库。

官方文档：https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## 内容说明

个人介绍与竞赛经历依据本人提供的简历整理；“关于我”保留本人指定的两段文字，并补充一句收尾；英文名 Kevin Li 来自 `ai-lcs/ai-lcs` 个人简介。项目依据公开仓库 README，“项目与实践”包含 Focus Desk、Blog to WeChat、数学建模 Skill、MUSCLE；“分享与开源”收录美赛 H 奖作品和数学分析教材合集。奖项完整收录简历中的四项赛事，技能证书单独展示。MUSCLE 展示的是论文复现与实验流程实践，不声称超过论文结果。照片由本人提供，原文件保留于桌面。简历原文件、电话及其他私人材料不在仓库中。
