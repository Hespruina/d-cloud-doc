---
layout: home
title: D-Cloud Minecraft 纯净生存服务器
description: D-Cloud 是一个注重社区体验的 Minecraft 纯净生存服务器，服务器地址 dc.zhrhello.top，主版本 26.1.2 ，支持 1.8 至最新版本。
hero:
  name: "D-Cloud Minecraft"
  text: "纯净生存服务器"
  tagline: "一个注重社区体验的 Minecraft 生存服务器，欢迎所有玩家加入"
  image:
    src: /logo.png
    alt: D-Cloud Logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: brand
      text: 下载游戏
      link: https://111pan.cn/s/LVQH5
    - theme: alt
      text: 服务器教程
      link: /server/basic
    - theme: alt
      text: 服务器规则
      link: /rules/main-rules
---

<div class="home-announcement" id="homeAnnouncement" role="alert">
  <span class="ann-badge">公告</span>
  <span class="ann-text">服务器已升级至 <strong>26.1.2</strong> 版本，使用旧版客户端仍可加入</span>
  <button type="button" class="ann-close" id="annCloseBtn" aria-label="关闭公告">&times;</button>
</div>

<div class="home-section">

## 服务器信息

<p class="section-hint">点击任意条目即可复制对应内容</p>

<div class="server-info-grid">
  <div class="info-card" data-copy="dc.zhrhello.top">
    <div class="info-label">服务器地址</div>
    <div class="info-value">dc.zhrhello.top</div>
  </div>
  <div class="info-card" data-copy="26.1.2">
    <div class="info-label">服务器版本</div>
    <div class="info-value">26.1.2</div>
  </div>
  <div class="info-card" data-copy="纯净生存">
    <div class="info-label">游戏模式</div>
    <div class="info-value">纯净生存</div>
  </div>
  <div class="info-card" data-copy="50 人">
    <div class="info-label">最大在线</div>
    <div class="info-value">50 人</div>
  </div>
  <div class="info-card" data-copy="dcld@zhrhello.top">
    <div class="info-label">服务器咨询 / 问题反馈邮箱</div>
    <div class="info-value">dcld@zhrhello.top</div>
  </div>
  <div class="info-card" data-copy="536343466">
    <div class="info-label">QQ 群</div>
    <div class="info-value">536343466</div>
    <button type="button" class="info-join-btn" data-href="https://qm.qq.com/cgi-bin/qm/qr?k=TgsnceghZrh1XmTloJYUzFt1Ta2MkIpW&jump_from=webapi&authKey=aHF6XkBWFv7e0dUFTDQy4HSq5r7X7WC3EuQQIjCRRpytQbN2Kclozz80ydpxQZ23" data-target="_blank">加入群聊</button>
  </div>
</div>

</div>

<div class="home-section online-services">

## 在线服务

<div class="feature-grid">

  <div class="feature-card">
    <h3 class="feature-title">在线音乐厅</h3>
    <p class="feature-desc">我们服务器安装了 AllMusic 插件，需要配合客户端 mod 使用；但鉴于该模组存在间歇性卡 UI、部分玩家听不到音乐的问题，我们制作了这个网页音乐厅。同样支持点歌 / 切歌，与服务器内 AllMusic 插件完全同步。</p>
    <button type="button" class="feature-btn" data-href="https://dcmusic.zhrhello.top/" data-target="_blank">进入音乐厅 →</button>
  </div>

  <div class="feature-card">
    <h3 class="feature-title">在线聊天栏</h3>
    <p class="feature-desc">『在线聊天室』正式上线！服务器 + 网页实时同步。不方便进服务器但想聊天？在网页也能和游戏内玩家聊天！</p>
    <ul class="feature-list">
      <li>服务器消息实时推送</li>
      <li>多区服可切换</li>
      <li>仿 Telegram 配色</li>
      <li>自动匹配头像</li>
      <li>并不优雅的动画</li>
      <li>消息来源标识（游戏 / 网页）</li>
    </ul>
    <button type="button" class="feature-btn" data-href="https://dcchat.zhrhello.top/" data-target="_blank">立即体验 →</button>
  </div>

</div>

</div>

<div class="home-section cta-section">

<img src="/logo.png" alt="D-Cloud Logo" class="cta-logo" />

## 准备好加入了吗

<p>加入我们的 QQ 群，与其他玩家交流，获取最新服务器动态。</p>

<button type="button" class="cta-button" data-href="https://qm.qq.com/cgi-bin/qm/qr?k=TgsnceghZrh1XmTloJYUzFt1Ta2MkIpW&jump_from=webapi&authKey=aHF6XkBWFv7e0dUFTDQy4HSq5r7X7WC3EuQQIjCRRpytQbN2Kclozz80ydpxQZ23" data-target="_blank">加入 QQ</button>

</div>

<style>
.copy-feedback {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 100;
}
.copy-feedback.show {
  opacity: 1;
}

.online-services {
  margin-top: 48px;
}

.section-hint {
  margin: -6px 0 20px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.info-card {
  cursor: pointer;
}

.info-card:hover .info-value {
  color: var(--vp-c-brand-1);
}

.info-join-btn {
  margin-top: 12px;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}

.info-join-btn:hover {
  background: var(--vp-c-brand-2);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 24px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  padding: 28px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  background: var(--vp-c-bg-soft);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--vp-c-brand-1);
}

.feature-icon {
  font-size: 40px;
  line-height: 1;
  margin-bottom: 16px;
}

.feature-title {
  margin: 0 0 12px;
  font-size: 22px;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.feature-desc {
  margin: 0 0 16px;
  font-size: 15px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
  flex-grow: 1;
}

.feature-list {
  margin: 0 0 16px;
  padding-left: 20px;
  font-size: 14px;
  line-height: 1.9;
  color: var(--vp-c-text-2);
  flex-grow: 1;
}

.feature-btn {
  align-self: flex-start;
  display: inline-block;
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.feature-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateX(2px);
}

.cta-button {
  cursor: pointer;
}

.home-announcement {
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(680px, calc(100% - 32px));
  padding: 14px 16px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.28);
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
  animation: announce-rise 0.45s ease;
}

.home-announcement.is-hidden {
  display: none;
}

.ann-badge {
  flex: none;
  padding: 4px 10px;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}

.ann-text {
  flex: 1;
  min-width: 0;
}

.ann-text strong {
  color: var(--vp-c-brand-1);
}

.ann-close {
  flex: none;
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.ann-close:hover {
  background: var(--vp-c-default-soft, rgba(127, 127, 127, 0.12));
  color: var(--vp-c-text-1);
}

@keyframes announce-rise {
  from {
    opacity: 0;
    transform: translate(-50%, 16px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@media (max-width: 768px) {
  .home-announcement {
    bottom: 16px;
    font-size: 13px;
  }
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
if (typeof document !== 'undefined') {
  document.addEventListener('click', async (e) => {
    // 跳转按钮（优先处理，避免触发复制）
    const navBtn = e.target.closest('[data-href]');
    if (navBtn) {
      const href = navBtn.getAttribute('data-href');
      const winTarget = navBtn.getAttribute('data-target') || '_self';
      if (href) window.open(href, winTarget);
      return;
    }

    // 复制触发
    const copyEl = e.target.closest('.info-card');
    if (copyEl) {
      const text = copyEl.getAttribute('data-copy');
      if (text) {
        try {
          await navigator.clipboard.writeText(text);
          let feedback = document.querySelector('.copy-feedback');
          if (!feedback) {
            feedback = document.createElement('div');
            feedback.className = 'copy-feedback';
            document.body.appendChild(feedback);
          }
          feedback.textContent = '已复制到剪贴板';
          feedback.classList.add('show');
          setTimeout(() => feedback.classList.remove('show'), 1500);
        } catch (err) {
          console.error('复制失败:', err);
        }
      }
      return;
    }
  });

  // 首页悬浮公告：关闭后记忆状态
  const ann = document.getElementById('homeAnnouncement');
  const annClose = document.getElementById('annCloseBtn');
  const ANN_KEY = 'dc_home_announcement_dismissed';
  if (ann) {
    if (localStorage.getItem(ANN_KEY) === '1') {
      ann.classList.add('is-hidden');
    }
    if (annClose) {
      annClose.addEventListener('click', () => {
        ann.classList.add('is-hidden');
        try {
          localStorage.setItem(ANN_KEY, '1');
        } catch (err) {
          console.error('保存公告状态失败:', err);
        }
      });
    }
  }
}
</script>
