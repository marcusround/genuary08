// Flocking
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/124-flocking-boids.html
// https://youtu.be/mhjuuHl6qHM
// https://editor.p5js.org/codingtrain/sketches/ry4XZ8OkN
import * as THREE from './lib/three.module.js'

export default class Boid {
  constructor() {
    
    this.position = new THREE.Vector2(Math.random(), Math.random())
    this.velocity = new THREE.Vector2(0.1 * Math.random(), 0.1 * Math.random())
    this.acceleration = new THREE.Vector2(0,0)
    this.maxForce = 0.001
    this.maxSpeed = 0.008

    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)

  }

  edges() {
    if (this.position.x > 0.5) {
      this.acceleration.x -= 0.001 * (this.position.x - 0.5)
    } else if (this.position.x < 0.5) {
      this.acceleration.x -= 0.001 * (this.position.x - 0.5)
    }
    if (this.position.y > 0.5) {
      this.acceleration.y -= 0.001 * (this.position.y - 0.5)
    } else if (this.position.y < 0.5) {
      this.acceleration.y -= 0.001 * (this.position.y - 0.5)
    }
  }

  align(boids) {
    let perceptionRadius = 0.50
    let steering = new THREE.Vector2()
    let total = 0
    for (let other of boids) {
      let d = this.position.distanceTo(other.position)
      if (other != this && d < perceptionRadius) {
        steering.add(other.velocity)
        total++
      }
    }
    if (total > 0) {
      steering.divideScalar(total)
      steering.setLength(this.maxSpeed)
      steering.sub(this.velocity)
      steering.clampLength(0, this.maxForce)
    }
    return steering
  }

  separation(boids) {
    let perceptionRadius = 0.5
    let steering = new THREE.Vector2()
    let total = 0
    for (let other of boids) {
      let d = this.position.distanceTo(other.position)
      if (other != this && d < perceptionRadius) {
        let diff = this.position.clone().sub(other.position)
        diff.divideScalar(d * d)
        steering.add(diff)
        total++
      }
    }
    if (total > 0) {
      steering.divideScalar(total)
      steering.setLength(this.maxSpeed)
      steering.sub(this.velocity)
      steering.clampLength(0,this.maxForce)
    }
    return steering
  }

  cohesion(boids) {
    let perceptionRadius = 1
    let steering = new THREE.Vector2()
    let total = 0
    for (let other of boids) {
      let d = this.position.distanceTo(other.position)
      if (other != this && d < perceptionRadius) {
        steering.add(other.position)
        total++
      }
    }
    if (total > 0) {
      steering.divideScalar(total)
      steering.sub(this.position)
      steering.setLength(this.maxSpeed)
      steering.sub(this.velocity)
      steering.clampLength(0,this.maxForce)
    }
    return steering
  }

  flock(boids) {
    let alignment = this.align(boids)
    let cohesion = this.cohesion(boids)
    let separation = this.separation(boids)
    
    alignment.multiplyScalar(0.5)
    cohesion.multiplyScalar(0.5)
    separation.multiplyScalar(1.0)
    
    this.acceleration.add(alignment)
    this.acceleration.add(cohesion)
    this.acceleration.add(separation)
  }

  update() {
    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)
    this.velocity.clampLength(0,this.maxSpeed)
    this.acceleration.multiplyScalar(0)
  }

}
