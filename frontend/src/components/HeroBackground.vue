<template>
  <div ref="container" class="absolute inset-0 w-full h-full pointer-events-none hero-background"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let renderer, animId, camera, core, innerCore
let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0

const MOBILE_BREAKPOINT = 768
const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)

const updateSceneSize = () => {
  const el = container.value
  if (!el || !renderer || !camera) return

  const w = el.clientWidth || window.innerWidth
  const h = el.clientHeight || window.innerHeight
  const isMobile = w < MOBILE_BREAKPOINT

  renderer.setSize(w, h)
  camera.aspect = w / h
  camera.fov = isMobile ? 80 : 75
  camera.position.z = isMobile ? 6.5 : 5
  camera.updateProjectionMatrix()

  if (core && innerCore) {
    const coreScale = isMobile ? 0.85 : 1
    const innerScale = isMobile ? 0.65 : 1
    core.scale.set(coreScale, coreScale, coreScale)
    innerCore.scale.set(innerScale, innerScale, innerScale)
  }
}

const handlePointer = (clientX, clientY) => {
  targetX = (clientX / window.innerWidth - 0.5) * 2
  targetY = (clientY / window.innerHeight - 0.5) * 2
}

const onMouse = (e) => handlePointer(e.clientX, e.clientY)
const onTouchMove = (e) => {
  const touch = e.touches[0]
  if (!touch) return
  handlePointer(touch.clientX, touch.clientY)
}

onMounted(() => {
  const el = container.value
  const w = el.clientWidth || window.innerWidth
  const h = el.clientHeight || window.innerHeight

  const scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  el.appendChild(renderer.domElement)

  core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2, 1),
    new THREE.MeshNormalMaterial({ wireframe: true, transparent: true, opacity: 0.3 })
  )
  scene.add(core)

  innerCore = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.MeshNormalMaterial({ wireframe: false, transparent: true, opacity: 0.8 })
  )
  scene.add(innerCore)

  updateSceneSize()

  window.addEventListener('mousemove', onMouse)
  if (isTouchDevice) {
    window.addEventListener('touchmove', onTouchMove, { passive: true })
  }
  window.addEventListener('resize', updateSceneSize)

  const animate = () => {
    animId = requestAnimationFrame(animate)
    mouseX += (targetX - mouseX) * 0.05
    mouseY += (targetY - mouseY) * 0.05

    core.rotation.x += 0.005
    core.rotation.y += 0.008
    core.rotation.z += 0.003
    innerCore.rotation.x -= 0.01
    innerCore.rotation.y -= 0.012

    const motionFactor = window.innerWidth < MOBILE_BREAKPOINT ? 0.35 : 0.5
    core.position.x = mouseX * motionFactor
    core.position.y = -mouseY * motionFactor
    innerCore.position.x = mouseX * motionFactor * 1.2
    innerCore.position.y = -mouseY * motionFactor * 1.2

    renderer.render(scene, camera)
  }
  animate()

  onBeforeUnmount(() => {
    cancelAnimationFrame(animId)
    renderer.dispose()
    window.removeEventListener('mousemove', onMouse)
    if (isTouchDevice) {
      window.removeEventListener('touchmove', onTouchMove)
    }
    window.removeEventListener('resize', updateSceneSize)
  })
})
</script>

<style scoped>
.hero-background {
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

@media (max-width: 767px) {
  .hero-background {
    opacity: 0.65;
  }
}
</style>
