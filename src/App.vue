<template>
  <div class="page">
    <!-- 导航 -->
    <nav class="nav">
      <div class="nav-left">
        <div class="logo">
          <div class="logo-icon">WB</div>
          <span class="logo-text">
            <span class="brand-blue">BETVICTOR</span>
            <span class="brand-sep">&amp;</span>
            <span class="brand-yellow">William Hill</span>
          </span>
        </div>
      </div>
      <div class="nav-center">
        <a href="#" class="nav-link">Hong Kong, China 中國香港區</a>
        <!-- <a href="#" class="nav-link">API Reference</a>
        <a href="#" class="nav-link">Examples</a>
        <a href="#" class="nav-link">Support</a> -->
      </div>
      <div class="nav-right">
        <!-- <div class="avatar"></div> -->
      </div>
    </nav>

    <!-- 双品牌 Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-grid">
        <div class="brand-card" v-for="brand in brands" :key="brand.en">
          <div class="brand-glow"></div>
          <h2 class="brand-title">
            <span
              class="brand-name"
              :style="{ color: brand.color, fontSize: brand.titleSize + 'px' }"
              >{{ brand.en }}</span
            >
            <br />
            <span
              class="brand-name"
              :style="{
                color: brand.color,
                fontSize: brand.titleSize * 0.85 + 'px',
              }"
              >{{ brand.cn }}</span
            >
            <br />
            {{ brand.slogan }}
          </h2>
          <p class="brand-desc">{{ brand.desc }}</p>
          <div class="brand-actions">
            <a
              :href="brand.link"
              target="_blank"
              rel="noopener"
              class="btn btn-primary"
            >
              <span class="fire">🔥</span> {{ brand.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 特性卡片 -->
    <section class="features">
      <div class="feature-card" v-for="item in features" :key="item.title">
        <div class="feature-icon" :style="{ background: item.bg }">
          <span>{{ item.icon }}</span>
        </div>
        <h3 class="feature-title">{{ item.title }}</h3>
        <p class="feature-desc">{{ item.desc }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
const brands = [
  {
    en: "BETVICTOR",
    cn: "伟德",
    slogan: "新用户专属优惠",
    desc: "创立于1946年，全球领先的在线博彩平台，提供丰富的体育赛事与游戏体验。",
    cta: "点击注册",
    color: "#2563eb",
    titleSize: 70,
    link: "https://783883.com/zh-cn/raf/75KEQ",
  },
  {
    en: "William Hill",
    cn: "威廉希尔",
    slogan: "巨额返现",
    desc: "成立于1934年的欧洲的博彩公司，是世界博彩业中的旗帜性公司。",
    cta: "点击注册",
    color: "#eab308",
    titleSize: 70,
    link: "https://478001321.com/zh-cn/raf/KXZZK",
  },
];

const features = [
  {
    icon: "💚",
    title: "源于真诚，我们始终如一",
    desc: "Originating from sincerity, we remain consistent.",
    bg: "#ecfdf5",
  },
  {
    icon: "🧙",
    title: "俯身服务，姿态却最高",
    desc: "Bending down to serve, yet with the highest posture.",
    bg: "#eff6ff",
  },
  {
    icon: "🛠️",
    title: "完全简单化，让事情变得更加容易",
    desc: "Completely simplifying, making things easier.",
    bg: "#fef2f2",
  },
];
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.page {
  min-height: 100vh;
  background: #ffffff;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, sans-serif;
  color: #1f2937;
}

/* ===== 导航 ===== */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 48px;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 16px;
}

.logo-text {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 6px;
}

.brand-blue {
  color: #2563eb;
}

.brand-yellow {
  color: #eab308;
}

.brand-sep {
  color: #9ca3af;
  font-weight: 400;
}

.brand-name {
  display: inline-block;
}

.nav-center {
  display: flex;
  gap: 32px;
}

.nav-link {
  font-size: 18px;
  color: #4b5563;
  text-decoration: none;
  transition: color 0.15s;
}

.nav-link:hover {
  color: #111827;
}

/* ===== 双品牌 Hero ===== */
.hero {
  position: relative;
  overflow: hidden;
  padding: 60px 48px 80px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 50% 0%,
    rgba(99, 102, 241, 0.35) 0%,
    rgba(139, 92, 246, 0.28) 30%,
    rgba(236, 72, 153, 0.18) 55%,
    rgba(16, 185, 129, 0.15) 75%,
    transparent 90%
  );
  pointer-events: none;
}

.hero-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.brand-card {
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 35px;
  padding: 30px 50px;
  overflow: hidden;
  transition: all 0.3s;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
}

.brand-card:hover {
  border-color: rgba(99, 102, 241, 0.3);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.08);
}

.brand-glow {
  position: absolute;
  top: -60px;
  right: -60px;
  width: 240px;
  height: 240px;
  background: radial-gradient(
    circle,
    rgba(99, 102, 241, 0.12) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.brand-title {
  position: relative;
  font-size: 50px;
  font-weight: 800;
  line-height: 1.15;
  color: #111827;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
  overflow-wrap: break-word;
  word-break: break-word;
  overflow: hidden;
}

.brand-desc {
  position: relative;
  font-size: 16px;
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 32px;
  max-width: 400px;
}

.brand-actions {
  position: relative;
  display: flex;
  gap: 12px;
}

.btn {
  padding: 16px 40px;
  border-radius: 999px;
  font-size: 17px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: 0.02em;
}

.btn-primary {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white;
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.35);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(99, 102, 241, 0.45);
}

/* ===== 特性卡片 ===== */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 48px 80px;
}

.feature-card {
  background: #f9fafb;
  border: 1px solid #f3f4f6;
  border-radius: 16px;
  padding: 32px;
  transition: all 0.2s;
}

.feature-card:hover {
  background: #ffffff;
  border-color: #e5e7eb;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}

.feature-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.feature-title {
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;
}

.feature-desc {
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
}

/* ===== 动态效果 ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floatBg {
  0%,
  100% {
    transform: translateY(-50%) scale(1);
  }
  50% {
    transform: translateY(-45%) scale(1.05);
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.nav {
  animation: fadeInUp 0.6s ease-out both;
}

.brand-card {
  animation: fadeInUp 0.7s ease-out both;
}

.brand-card:nth-child(1) {
  animation-delay: 0.15s;
}

.brand-card:nth-child(2) {
  animation-delay: 0.3s;
}

.feature-card {
  animation: fadeInUp 0.6s ease-out both;
  transition: all 0.3s;
}

.feature-card:nth-child(1) {
  animation-delay: 0.45s;
}

.feature-card:nth-child(2) {
  animation-delay: 0.55s;
}

.feature-card:nth-child(3) {
  animation-delay: 0.65s;
}

.hero-bg {
  animation: floatBg 8s ease-in-out infinite;
}

.brand-glow {
  animation: glowPulse 4s ease-in-out infinite;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: #6366f1;
  transition: width 0.25s;
}

.nav-link:hover::after {
  width: 100%;
}

.btn-primary {
  position: relative;
  overflow: hidden;
}

.btn-primary::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s;
}

.btn-primary:hover::before {
  left: 100%;
}

.fire {
  display: inline-block;
  margin-right: 6px;
  animation: fireFloat 1.2s ease-in-out infinite;
}

@keyframes fireFloat {
  0%,
  100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-4px) scale(1.15);
  }
}

/* ===== 响应式（手机端适配） ===== */
@media (max-width: 900px) {
  .nav {
    padding: 14px 16px;
  }

  .logo-text {
    font-size: 14px;
    gap: 4px;
  }

  .logo-icon {
    width: 26px;
    height: 26px;
    font-size: 13px;
  }

  .nav-center {
    display: none;
  }

  .hero {
    padding: 48px 24px 60px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    /* gap: 16px; */
  }

  .brand-name {
    font-size: 42px !important;
    letter-spacing: -2px; /* 收紧字母间距，挤一点 */
  }
  .features {
    grid-template-columns: 1fr;
    padding: 0 24px 60px;
  }

  .brand-card {
    padding: 28px 20px;
    border-radius: 24px;
  }

  .brand-title {
    font-size: 32px !important;
  }

  .brand-desc {
    font-size: 14px;
    margin-bottom: 24px;
  }

  .features {
    grid-template-columns: 1fr;
    padding: 0 12px 40px;
    gap: 14px;
  }

  .feature-card {
    padding: 24px;
  }

  .btn {
    padding: 13px 28px;
    font-size: 15px;
  }
}
</style>
