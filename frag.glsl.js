export default /* glsl */`

precision highp float;

uniform vec2 positions[ 19 ];
uniform vec2 velocities[ 19 ];
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

float circ(vec2 st) {

  return length(st);

}

void main() {

  // Fit vertically
  vec2 uv = gl_FragCoord.xy/u_resolution.yy;

  // Centre horizontally
  uv.x += 0.5 - u_resolution.x / (2. * u_resolution.y);

  // Zoom out
  uv *= 2.;
  uv -= .5;

  float circ0 = circ(uv - positions[0]);
  float circ1 = circ(uv - positions[1]);
  float circ2 = circ(uv - positions[2]);
  float circ3 = circ(uv - positions[3]);
  float circ4 = circ(uv - positions[4]);
  float circ5 = circ(uv - positions[5]);
  float circ6 = circ(uv - positions[6]);
  float circ7 = circ(uv - positions[7]);
  float circ8 = circ(uv - positions[8]);
  float circ9 = circ(uv - positions[9]);
  float circ10 = circ(uv - positions[10]);
  float circ11 = circ(uv - positions[11]);
  float circ12 = circ(uv - positions[12]);
  float circ13 = circ(uv - positions[13]);
  float circ14 = circ(uv - positions[14]);
  float circ15 = circ(uv - positions[15]);
  float circ16 = circ(uv - positions[16]);
  float circ17 = circ(uv - positions[17]);
  float circ18 = circ(uv - positions[18]);

  float circles =
    circ0
    * circ1
    * circ2
    * circ3
    * circ4
    * circ5
    * circ6
    * circ7
    * circ8
    * circ9
    * circ10
    * circ11
    * circ12
    * circ13
    * circ14
    * circ15
    * circ16
    * circ17
    * circ18
    ;

  vec2 circleVelocities = vec2(0,0);

  float velocityMult = 100.;

  circleVelocities += circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * circ0 * (velocities[0] + .008);  circleVelocities += circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * circ1 * (velocities[1] + .008);
  circleVelocities += circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * circ2 * (velocities[2] + .008);
  circleVelocities += circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * circ3 * (velocities[3] + .008);
  circleVelocities += circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * circ4 * (velocities[4] + .008);
  circleVelocities += circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * circ5 * (velocities[5] + .008);
  circleVelocities += circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * circ6 * (velocities[6] + .008);
  circleVelocities += circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * circ7 * (velocities[7] + .008);
  circleVelocities += circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * circ8 * (velocities[8] + .008);
  circleVelocities += circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * circ9 * (velocities[9] + .008);
  circleVelocities += circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * circ10 * (velocities[10] + .008);
  circleVelocities += circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * circ11 * (velocities[11] + .008);
  circleVelocities += circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * circ12 * (velocities[12] + .008);
  circleVelocities += circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * circ13 * (velocities[13] + .008);
  circleVelocities += circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * circ14 * (velocities[14] + .008);
  circleVelocities += circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * circ15 * (velocities[15] + .008);
  circleVelocities += circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * circ16 * (velocities[16] + .008);
  circleVelocities += circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * circ17 * (velocities[17] + .008);
  circleVelocities += circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * circ18 * (velocities[18] + .008);

  circleVelocities *= velocityMult;

  circles = smoothstep(.0000002,.0000002201,circles);

  // vec2 mouse = st + u_mouse.xy/u_resolution.xy;
  vec3 col = vec3(.0, circleVelocities.x, circleVelocities.y);

  col *= (1.-circles);

  gl_FragColor= vec4(col,1.0);

}





`