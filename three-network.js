const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create particles
const geometry = new THREE.BufferGeometry();
const vertices = [];
const numParticles = 200;

for (let i = 0; i < numParticles; i++) {
    const x = (Math.random() - 0.5) * 10;
    const y = (Math.random() - 0.5) * 10;
    const z = (Math.random() - 0.5) * 10;
    vertices.push(x, y, z);
}

geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x00ccff, size: 0.1 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 5;

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.002;
    renderer.render(scene, camera);
}

animate();
