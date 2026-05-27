import { COLORS } from '../core/constants.js'
import { buildScene } from './buildScene.js'
import { fitCanvas, makeProgram } from './program.js'

const vertexSource = `
  attribute vec2 aPosition;
  attribute vec3 aColor;
  uniform vec2 uResolution;
  varying vec3 vColor;
  void main() {
    vec2 zeroToOne = aPosition / uResolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;
    gl_Position = vec4(clipSpace * vec2(1.0, -1.0), 0.0, 1.0);
    vColor = aColor;
  }
`

const fragmentSource = `
  precision mediump float;
  varying vec3 vColor;
  void main() {
    gl_FragColor = vec4(vColor, 1.0);
  }
`

export function startWebGLMap(canvas, getActiveKey) {
  const gl = canvas.getContext('webgl', { antialias: true, alpha: false })
    || canvas.getContext('experimental-webgl')

  if (!gl) {
    throw new Error('WebGL indisponível')
  }

  const program = makeProgram(gl, vertexSource, fragmentSource)
  const buffer = gl.createBuffer()
  const positionLocation = gl.getAttribLocation(program, 'aPosition')
  const colorLocation = gl.getAttribLocation(program, 'aColor')
  const resolutionLocation = gl.getUniformLocation(program, 'uResolution')
  const stride = 5 * Float32Array.BYTES_PER_ELEMENT

  let frameId = 0
  let disposed = false
  let lastTime = 0

  function render(time) {
    if (disposed) return
    lastTime = time

    const { width, height, cssWidth, cssHeight } = fitCanvas(canvas)
    const scene = buildScene(cssWidth, cssHeight, getActiveKey(), time)
    const vertexCount = scene.length / 5

    gl.viewport(0, 0, width, height)
    gl.clearColor(0.02, 0.04, 0.06, 1)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)
    gl.useProgram(program)

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, scene, gl.DYNAMIC_DRAW)

    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, stride, 0)

    gl.enableVertexAttribArray(colorLocation)
    gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, stride, 2 * Float32Array.BYTES_PER_ELEMENT)

    gl.uniform2f(resolutionLocation, cssWidth, cssHeight)
    gl.drawArrays(gl.TRIANGLES, 0, vertexCount)

    frameId = requestAnimationFrame(render)
  }

  frameId = requestAnimationFrame(render)

  return {
    getTime: () => lastTime,
    dispose() {
      disposed = true
      cancelAnimationFrame(frameId)
      gl.deleteBuffer(buffer)
      gl.deleteProgram(program)
    },
  }
}
