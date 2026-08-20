<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-gutter py-section-padding-v-mobile md:py-section-padding-v relative overflow-hidden mesh-gradient">
    <HeroBackground />
    <div class="max-w-container-max mx-auto text-center z-10">
      <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md glass-panel mb-8 border-primary/10">
        <span class="text-label-sm text-primary uppercase tracking-widest font-bold">{{ t('hero.badge') }}</span>
      </div>
      <h1 class="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl leading-tight mb-6 max-w-4xl mx-auto tracking-tighter">
        {{ t('hero.title1') }} <span class="text-gradient">{{ t('hero.titleHighlight') }}</span> {{ t('hero.title2') }}
      </h1>
      <p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 opacity-80">
        {{ t('hero.subtitle') }}
      </p>
      <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
        <a href="#iletisim" class="w-full md:w-auto px-10 py-4 bg-primary text-white rounded-lg font-label-md glow-button">
          {{ t('hero.ctaPrimary') }}
        </a>
        <a href="#hizmetler" class="w-full md:w-auto px-10 py-4 glass-panel text-white rounded-lg font-label-md hover:bg-white/5 transition-all border-white/10">
          {{ t('hero.ctaSecondary') }}
        </a>
      </div>
    </div>

    <!-- Hero Showcase Carousel -->
    <div class="mt-20 relative w-full max-w-5xl mx-auto px-4 perspective-1000">
      <div class="glass-panel p-6 md:p-8 rounded-xl border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform rotate-x-2 transition-transform duration-700 hover:rotate-x-0">
        <div class="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
          <div class="flex gap-2">
            <div class="w-2.5 h-2.5 rounded-full bg-white/20"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-white/10"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-[10px] uppercase tracking-[0.18em] text-on-surface-variant">{{ t('hero.carouselLabel') }}</span>
            <span class="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300"></span>
              LIVE
            </span>
          </div>
        </div>
        <div class="grid min-h-[250px] grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div class="order-2 md:order-1">
            <transition name="carousel-fade" mode="out-in">
              <div :key="activeSlide" class="space-y-4">
                <span class="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">{{ currentSlide.eyebrow }}</span>
                <h2 class="max-w-md text-2xl font-semibold tracking-tight text-white md:text-3xl">{{ currentSlide.title }}</h2>
                <p class="max-w-md text-sm leading-relaxed text-on-surface-variant">{{ currentSlide.description }}</p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span v-for="tag in currentSlide.tags" :key="tag" class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </transition>
          </div>

          <div class="order-1 relative h-56 overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] md:order-2">
            <transition name="carousel-fade" mode="out-in">
              <div :key="activeSlide" class="absolute inset-0 p-5">
                <div class="mb-5 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-on-surface-variant">
                  <span>{{ currentSlide.visualLabel }}</span>
                  <span class="text-primary">{{ String(activeSlide + 1).padStart(2, '0') }} / 03</span>
                </div>
                <div class="flex h-[170px] items-end gap-2">
                  <span v-for="(bar, index) in currentSlide.bars" :key="index" class="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary transition-all duration-700" :style="{ height: `${bar}%` }"></span>
                </div>
                <div class="absolute inset-x-5 bottom-5 border-t border-white/10"></div>
              </div>
            </transition>
          </div>
        </div>

        <div class="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
          <div class="flex gap-2" role="tablist" :aria-label="t('hero.carouselLabel')">
            <button v-for="(slide, index) in slides" :key="slide.title" type="button" role="tab" :aria-selected="activeSlide === index" :aria-label="slide.title" class="h-1.5 rounded-full transition-all duration-300" :class="activeSlide === index ? 'w-8 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'" @click="selectSlide(index)"></button>
          </div>
          <div class="flex gap-2">
            <button type="button" :aria-label="t('hero.carouselPrevious')" class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-primary/40 hover:text-primary" @click="previousSlide">
              <span class="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>
            <button type="button" :aria-label="t('hero.carouselNext')" class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/70 transition-colors hover:border-primary/40 hover:text-primary" @click="nextSlide">
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue'
import HeroBackground from './HeroBackground.vue'
import { useLocale } from '../i18n/index.js'

const { t } = useLocale()
const activeSlide = ref(0)
let intervalId

const slides = computed(() => [
  {
    eyebrow: t('hero.carouselSlides.results.eyebrow'),
    title: t('hero.carouselSlides.results.title'),
    description: t('hero.carouselSlides.results.description'),
    visualLabel: t('hero.carouselSlides.results.visualLabel'),
    tags: ['ERP', 'Automation', '+42%'],
    bars: [38, 48, 44, 66, 72, 88, 96],
  },
  {
    eyebrow: t('hero.carouselSlides.ai.eyebrow'),
    title: t('hero.carouselSlides.ai.title'),
    description: t('hero.carouselSlides.ai.description'),
    visualLabel: t('hero.carouselSlides.ai.visualLabel'),
    tags: ['AI', 'LLM', '10x'],
    bars: [28, 62, 42, 78, 55, 90, 84],
  },
  {
    eyebrow: t('hero.carouselSlides.stack.eyebrow'),
    title: t('hero.carouselSlides.stack.title'),
    description: t('hero.carouselSlides.stack.description'),
    visualLabel: t('hero.carouselSlides.stack.visualLabel'),
    tags: ['Cloud', 'DevOps', '99.9%'],
    bars: [72, 58, 82, 64, 92, 76, 98],
  },
])
const currentSlide = computed(() => slides.value[activeSlide.value])

function selectSlide(index) {
  activeSlide.value = index
}

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % slides.value.length
}

function previousSlide() {
  activeSlide.value = (activeSlide.value - 1 + slides.value.length) % slides.value.length
}

onMounted(() => {
  intervalId = window.setInterval(nextSlide, 5000)
})

onBeforeUnmount(() => window.clearInterval(intervalId))
</script>

<style scoped>
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.carousel-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.carousel-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
