export function makeProgram(gl, vsSource, fsSource) {
  const vs = gl.createShader(gl.VERTEX_SHADER)
  gl.shaderSource(vs, vsSource)
  gl.compileShader(vs)

  const fs = gl.createShader(gl.FRAGMENT_SHADER)
  gl.shaderSource(fs, fsSource)
  gl.compileShader(fs)

  const program = gl.createProgram()
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  return program
}

export function fitCanvas(canvas) {
  const ratio = Math.min(window.devicePixelRatio || 1, 2)
  const width = Math.max(1, Math.floor(canvas.clientWidth * ratio))
  const height = Math.max(1, Math.floor(canvas.clientHeight * ratio))
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
  }
  return { width, height, ratio, cssWidth: width / ratio, cssHeight: height / ratio }
}
