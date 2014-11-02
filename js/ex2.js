// EX 2: Phong Shader
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

// Lighting
var ambientLight = new THREE.AmbientLight(0x888888),
    directionalLight = new THREE.DirectionalLight( 0xffffff, 1.5);

// Position the light out from the scene, pointing at the origin
directionalLight.position.set(1, 0, 0);

scene.add(directionalLight);
scene.add(ambientLight);


renderer.setSize(sceneWidth, sceneHeight);
document.body.appendChild(renderer.domElement);

// Shade a Cube
var geometry = new THREE.SphereGeometry(1, 20, 20);
var phongShader = new THREE.MeshPhongMaterial({
    ambient:    0x222222,
    color:      0x222222,
    specular:   0xffffff,
    shininess:  2,
    shading:    THREE.SmoothShading
});

sphere = new THREE.Mesh(geometry, phongShader);
scene.add(sphere);

// Run the Scene!
var render = function () {
    requestAnimationFrame(render);
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
};

render();
