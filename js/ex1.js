// EX 1: Green Cube
// Setup Scene
var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000),
    renderer = new THREE.WebGLRenderer(),
    sceneWidth = window.innerWidth,
    sceneHeight = window.innerHeight,
    controls = new THREE.OrbitControls(camera)
    controls.damping = 0.2;
    controls.addEventListener('change', render);

// Setup Camera
camera.setViewOffset(
    sceneWidth,
    window.innerHeight,
    0, 0,
    sceneWidth,
    sceneHeight
)
camera.position.z = 3;

// Ambient Light
var ambientLight = new THREE.AmbientLight(0x888888);
scene.add(ambientLight)

renderer.setSize(sceneWidth, sceneHeight);
document.body.appendChild(renderer.domElement);

// Make the sphere
var geometry = new THREE.SphereGeometry(1, 20, 20),
    material = new THREE.MeshBasicMaterial({ color: 0x222222 });

sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

// Run the Scene
var render = function () {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
};

render();
