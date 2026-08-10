<template>
  <section class="px-gutter py-section-padding-v-mobile md:py-section-padding-v bg-surface-container-lowest/30">
    <div class="max-w-container-max mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 text-white">
            {{ t('ecosystem.title') }}
          </h2>
          <p class="text-body-lg text-on-surface-variant">
            {{ t('ecosystem.subtitle') }}
          </p>
        </div>
        <div class="hidden md:block">
          <span class="material-symbols-outlined text-[64px] text-primary/10">layers</span>
        </div>
      </div>

      <!-- Scrolling Viewport -->
      <div class="relative w-full overflow-hidden flex flex-col gap-6 rounded-2xl">
        <!-- Gradient overlays for fade out edges -->
        <div class="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#121317] to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#121317] to-transparent z-10 pointer-events-none"></div>

        <!-- Row 1: Moving Left (Normal Scroll) -->
        <div class="carousel-track py-2">
          <!-- Original Group -->
          <div class="flex gap-6 pr-6">
            <div 
              v-for="(tech, index) in row1" 
              :key="'row1-orig-' + index" 
              class="w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0"
              :class="getCategoryStyles(tech.category)"
            >
              <span class="absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5">
                {{ tech.category }}
              </span>
              <span class="material-symbols-outlined text-4xl mt-2 transition-colors">{{ tech.icon }}</span>
              <span class="text-sm font-mono font-medium transition-colors">{{ tech.name }}</span>
            </div>
          </div>
          <!-- Duplicate Group -->
          <div class="flex gap-6 pr-6">
            <div 
              v-for="(tech, index) in row1" 
              :key="'row1-dup-' + index" 
              class="w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0"
              :class="getCategoryStyles(tech.category)"
            >
              <span class="absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5">
                {{ tech.category }}
              </span>
              <span class="material-symbols-outlined text-4xl mt-2 transition-colors">{{ tech.icon }}</span>
              <span class="text-sm font-mono font-medium transition-colors">{{ tech.name }}</span>
            </div>
          </div>
        </div>

        <!-- Row 2: Moving Right (Reverse Scroll) -->
        <div class="carousel-track-reverse py-2">
          <!-- Original Group -->
          <div class="flex gap-6 pr-6">
            <div 
              v-for="(tech, index) in row2" 
              :key="'row2-orig-' + index" 
              class="w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0"
              :class="getCategoryStyles(tech.category)"
            >
              <span class="absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5">
                {{ tech.category }}
              </span>
              <span class="material-symbols-outlined text-4xl mt-2 transition-colors">{{ tech.icon }}</span>
              <span class="text-sm font-mono font-medium transition-colors">{{ tech.name }}</span>
            </div>
          </div>
          <!-- Duplicate Group -->
          <div class="flex gap-6 pr-6">
            <div 
              v-for="(tech, index) in row2" 
              :key="'row2-dup-' + index" 
              class="w-44 h-32 rounded-xl border flex items-center justify-center flex-col gap-2 transition-all duration-300 group relative overflow-hidden px-4 flex-shrink-0"
              :class="getCategoryStyles(tech.category)"
            >
              <span class="absolute top-2 right-2 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-white/5">
                {{ tech.category }}
              </span>
              <span class="material-symbols-outlined text-4xl mt-2 transition-colors">{{ tech.icon }}</span>
              <span class="text-sm font-mono font-medium transition-colors">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocale } from '../i18n/index.js'

const { t } = useLocale()

// Grouping Row 1 by Category: Frontend first, then Backend
const row1 = [
  // Frontend
  { name: 'Vue.js', icon: 'code_blocks', category: 'Frontend' },
  { name: 'React', icon: 'deployed_code', category: 'Frontend' },
  { name: 'TailwindCSS', icon: 'palette', category: 'Frontend' },
  { name: 'TypeScript', icon: 'data_object', category: 'Frontend' },
  { name: 'Flutter', icon: 'flutter', category: 'Frontend'},

  // Backend
  { name: 'Node.js', icon: 'terminal', category: 'Backend' },
  { name: 'Spring Boot', icon: 'coffee', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'database', category: 'Backend' },
  { name: 'MySQL', icon: 'database', category: 'Backend' },
  { name: 'Express.js', icon: 'terminal', category: 'Backend' },
  { name: 'RabbitMQ', icon: 'message', category: 'Backend' } // DevOps'tan buraya alındı
]

// Grouping Row 2 by Category: DevOps first, then AI
const row2 = [
  // DevOps
  { name: 'Docker', icon: 'grid_view', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'hub', category: 'DevOps' },
  { name: 'AWS / Cloud', icon: 'cloud', category: 'DevOps' },
  { name: 'Git / GitHub', icon: 'code', category: 'DevOps' },
  { name: 'Linux', icon: 'computer', category: 'DevOps' },
  
  // AI
  { name: 'PyTorch', icon: 'psychology', category: 'AI' },
  { name: 'LLM Engine', icon: 'smart_toy' , category: 'AI' },
  { name: 'OpenAI API', icon: 'integration_instructions', category: 'AI' },
  { name: 'PyTorch', icon: 'psychology', category: 'AI' },
  { name: 'LLM Engine', icon: 'smart_toy' , category: 'AI' },
  { name: 'OpenAI API', icon: 'integration_instructions', category: 'AI' }
]
// Sort Row 2 by Category to keep Backend, DevOps, AI items adjacent
row2.sort((a, b) => a.category.localeCompare(b.category))

function getCategoryStyles(category) {
  switch (category) {
    case 'Frontend':
      return 'bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20 text-blue-300 hover:border-blue-400'
    case 'Backend':
      return 'bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20 text-emerald-300 hover:border-emerald-400'
    case 'DevOps':
      return 'bg-purple-500/5 hover:bg-purple-500/10 border-purple-500/20 text-purple-300 hover:border-purple-400'
    case 'AI':
      return 'bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20 text-amber-300 hover:border-amber-400'
    default:
      return 'bg-white/5 border-white/10 text-on-surface-variant hover:border-primary'
  }
}
</script>
