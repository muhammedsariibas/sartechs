<template>
  <div class="font-body-md text-on-surface selection:bg-primary/30 selection:text-white">
    <AppHeader />
    <main class="relative pt-24 overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <AiSection />
      <StatsSection />
      <ProcessSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { provideLocale } from './i18n/index.js'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AiSection from './components/AiSection.vue'
import StatsSection from './components/StatsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

provideLocale()
</script>
