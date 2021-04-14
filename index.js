import * as THREE from './lib/three.module.js'
import Boid from './boids.js'
import vertShader from './vert.glsl.js'
import fragShader from './frag.glsl.js'

let container
let camera, scene, renderer
let uniforms

const flock = []
const boidPositions = []
const boidVelocities = []

const onWindowResize = (event) => {

  renderer.setSize(window.innerWidth, window.innerHeight)
  uniforms.u_resolution.value.x = renderer.domElement.width
  uniforms.u_resolution.value.y = renderer.domElement.height

}

const init = () => {

  container = document.getElementById('container')

  camera = new THREE.Camera()
  camera.position.z = 1

  scene = new THREE.Scene()

  const geometry = new THREE.PlaneBufferGeometry(2, 2)

  for (let i = 0; i < 19; i++) {

    flock.push(new Boid())

  }

  uniforms = {
    u_time: { type: "f", value: 1.0 },
    u_resolution: { type: "v2", value: new THREE.Vector2() },
    u_mouse: { type: "v2", value: new THREE.Vector2() },
    positions: { value: boidPositions },
    velocities: { value: boidVelocities },
  }

  const material = new THREE.RawShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertShader,
    fragmentShader: fragShader,
  })

  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.outputEncoding = THREE.sRGBEncoding

  container.appendChild(renderer.domElement)

  onWindowResize()
  window.addEventListener('resize', onWindowResize, false)

  document.onmousemove = (e) => {
    uniforms.u_mouse.value.x = e.pageX
    uniforms.u_mouse.value.y = e.pageY
  }

}

const ticker = () => {

  uniforms.u_time.value += 0.05

  flock.forEach((boid, index) => {

    boid.edges()
    boid.flock(flock, uniforms.u_time.value)
    boid.update()

    if (isNaN(boid.position.x)) {
      crashed = true
      return
    }

    boidPositions[index] = boid.position
    boidVelocities[index] = boid.velocity

    
  })
  
}

const render = () => {

  renderer.render(scene, camera)

}

const animate = () => {

  requestAnimationFrame(animate)
  if (!crashed) {
    ticker()
  }
  render()

}

let crashed = false

init()
animate()