import GlslCanvas from 'glslCanvas';
import fragString from './shader.frag?raw';
import './style.css';

const canvas = document.createElement('canvas');
const sandbox = new GlslCanvas(canvas);

document.body.appendChild(canvas);

const sizer = function () {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const dpi = window.devicePixelRatio || 1;

  const s = Math.max(vw, vh);

  canvas.width = s * dpi;
  canvas.height = s * dpi;
  canvas.style.width = `${s}px`;
  canvas.style.height = `${s}px`;
};

sizer();
window.addEventListener('resize', sizer);

sandbox.load(fragString);
sandbox.setUniform('u_seed', Math.random());
