---
layout: home
hero:
  name: "D-Cloud Minecraft"
  text: "纯净生存服务器"
  tagline: "一个注重社区体验的 Minecraft 生存服务器，欢迎所有玩家加入"
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/getting-started
    - theme: alt
      text: 加入服务器
      link: /join/how-to-join
    - theme: alt
      text: 服务器规则
      link: /rules/main-rules

features:
  - icon:
      src: '/icons/globe.svg'
    title: "纯净生存"
    details: "保持原版游戏体验，无破坏性修改"
  - icon:
      src: '/icons/users.svg'
    title: "友好社区"
    details: "友好的玩家群体，友善交流、和谐互动"
  - icon:
      src: '/icons/shield.svg'
    title: "反作弊"
    details: "秉持着无为而治但又人工高强度巡查（？"
  - icon:
      src: '/icons/coin.svg'
    title: "经济系统"
    details: "平衡的玩家经济系统，自由交易，成为黑心资本家"
  - icon:
      src: '/icons/home.svg'
    title: "领地保护"
    details: "创建领地以保护你的建筑和财产免受破坏"
  - icon:
      src: '/icons/calendar.svg'
    title: "定期意见征集"
    details: "玩家群体决定服务器更新方向，定期收集建议"
---

<div class="home-section">

## 服务器信息

<div class="server-info-grid">
  <div class="info-card">
    <div class="info-label">服务器地址</div>
    <div class="info-value copy-trigger" data-copy="dc.zhrhello.top" title="点击复制">dc.zhrhello.top</div>
  </div>
  <div class="info-card">
    <div class="info-label">服务器版本</div>
    <div class="info-value">1.21.8</div>
  </div>
  <div class="info-card">
    <div class="info-label">游戏模式</div>
    <div class="info-value">纯净生存</div>
  </div>
  <div class="info-card">
    <div class="info-label">最大在线</div>
    <div class="info-value">50 人</div>
  </div>
</div>

</div>

<div class="home-section">

## 为什么选择 D-Cloud

<div class="why-grid">
  <div class="why-item">
    <h3>长期稳定</h3>
    <p>生存区地图永不重置，你的所有建筑和进度都会永久保留。我们承诺长期运营，让你安心投入到创造之中。</p>
  </div>
  <div class="why-item">
    <h3>社区驱动</h3>
    <p>玩家群体决定服务器更新方向，定期收集建议</p>
  </div>
  <div class="why-item">
    <h3>跑路承诺</h3>
    <p>我们承诺，即使服务器因不可抗因素关闭，你的所有建筑和进度也会永久保留，并提供存档下载渠道</p>
  </div>
</div>

</div>

<div class="home-section cta-section">

<img src="/logo.png" alt="D-Cloud Logo" class="cta-logo" />

## 准备好加入了吗

<p>加入我们的 QQ 群，与其他玩家交流，获取最新服务器动态。</p>

<a href="https://qm.qq.com/cgi-bin/qm/qr?k=TgsnceghZrh1XmTloJYUzFt1Ta2MkIpW&jump_from=webapi&authKey=aHF6XkBWFv7e0dUFTDQy4HSq5r7X7WC3EuQQIjCRRpytQbN2Kclozz80ydpxQZ23" class="cta-button" target="_blank">加入 QQ</a>

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
</style>

<script>
if (typeof document !== 'undefined') {
  document.addEventListener('click', async (e) => {
    const target = e.target.closest('.copy-trigger');
    if (!target) return;

    const text = target.getAttribute('data-copy');
    if (!text) return;

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
  });
}
</script>
