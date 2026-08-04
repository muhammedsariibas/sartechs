<template>
  <div ref="container" class="absolute inset-0 w-full h-full pointer-events-none"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref(null)
let renderer, animId

onMounted(() => {
  const el = container.value
  const w = el.clientWidth || window.innerWidth
  const h = el.clientHeight || window.innerHeight

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
  camera.position.z = 5

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(w, h)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  el.appendChild(renderer.domElement)

  // Outer wireframe
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2, 1),
    new THREE.MeshNormalMaterial({ wireframe: true, transparent: true, opacity: 0.3 })
  )
  scene.add(core)

  // Inner glow
  const innerCore = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1, 0),
    new THREE.MeshNormalMaterial({ wireframe: false, transparent: true, opacity: 0.8 })
  )
  scene.add(innerCore)

  let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0

  const onMouse = (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2
    targetY = (e.clientY / window.innerHeight - 0.5) * 2
  }
  const onResize = () => {
    const nw = el.clientWidth || window.innerWidth
    const nh = el.clientHeight || window.innerHeight
    camera.aspect = nw / nh
    camera.updateProjectionMatrix()
    renderer.setSize(nw, nh)
  }

  window.addEventListener('mousemove', onMouse)
  window.addEventListener('resize', onResize)

  const animate = () => {
    animId = requestAnimationFrame(animate)
    mouseX += (targetX - mouseX) * 0.05
    mouseY += (targetY - mouseY) * 0.05

    core.rotation.x += 0.005
    core.rotation.y += 0.008
    core.rotation.z += 0.003
    innerCore.rotation.x -= 0.01
    innerCore.rotation.y -= 0.012

    core.position.x = mouseX * 0.5
    core.position.y = -mouseY * 0.5
    innerCore.position.x = mouseX * 0.7
    innerCore.position.y = -mouseY * 0.7

    renderer.render(scene, camera)
  }
  animate()

  onBeforeUnmount(() => {
    cancelAnimationFrame(animId)
    renderer.dispose()
    window.removeEventListener('mousemove', onMouse)
    window.removeEventListener('resize', onResize)
  })
})
</script>
