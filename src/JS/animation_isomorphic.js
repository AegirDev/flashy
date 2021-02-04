import * as THREE from 'three';
import TWEEN from "tween";

/*
 Thanks to Francesco Trillini for the animation off of codepen
*/

var self = window;
var start;
var hemisphereLight;
var pointLight;


var isMobile;
if (window.innerWidth <= 1024) {
  isMobile = true;
}
if (!isMobile) {
(function(self) {	
	
	var container, scene, camera, renderer, cubes = [], group, lastTransition = Date.now();
			
	// Mouse wheel and leap settings		
	var cameraZ = 3000, min = cameraZ - 500, max = min * 3;
					
			
	/*
	 * List colors.
	 */
		
	var colors = {
		standardColor: [
			'#a63837',
			'#682222'		
		]
	};
	
	window.addEventListener ? window.addEventListener('load', init, false) : window.onload = init;
	
    /*
	 * Init.
	 */

	function init() {
		
		if(!window.WebGLRenderingContext) { 
			console.error("Sorry, your browser doesn't support WebGL."); 
			return;
		} 
		
		//var secondTab = window.document.getElementById('secondTab').textContent,
        //var secondTab = document.querySelector('secondTab');
		container = document.createElement('div');
		container.width = window.innerWidth;
		container.height = window.innerHeight;
		container.style.position = 'absolute';
		//body.appendChild(container);
		var element = document.getElementById("animationInput");
		element.appendChild(container);
		
		// Setup
		camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 10, 10000);
		camera.position.z = cameraZ;
		scene = new THREE.Scene();
		
		// Lights
		hemisphereLight = new THREE.HemisphereLight(0x12090a, 100);
		scene.add(hemisphereLight);
		pointLight = new THREE.PointLight(0xcb4647, 3.0);
		scene.add(pointLight);
		group = new THREE.Object3D();
		for(var cube = 0, len = 80; cube < len; cube++) {												
			var violetMaterial = new THREE.MeshPhongMaterial({
				color: colors.standardColor[cube % colors.standardColor.length],
				shading: THREE.FlatShading, 
				blending: THREE.NormalBlending,
				depthTest: true,
				transparent: false
			});
						
			var geometry = new THREE.TetrahedronGeometry(50, 1);
			geometry.dynamic = true;
			var mesh = new THREE.Mesh(geometry, violetMaterial);	
			mesh.position.x = Math.random() * 2000 - 1000;
			mesh.position.y = Math.random() * 2000 - 1000;
			mesh.position.z = Math.random() * 2000 - 1000;
			mesh.rotation.x = Math.random() * 2 * Math.PI;
			mesh.rotation.y = Math.random() * 2 * Math.PI;
			mesh.rotation.z = Math.random() * 2 * Math.PI;
										
			cubes.push({
				mesh: mesh,	
				materials: [	
					violetMaterial
				],
				band: Math.floor(Math.random(128)),
				scale: 0,
				level: ~~(Math.random() * (7 - 2 + 1) + 2)
			});
			group.add(mesh);
		}

		scene.add(group);
		
		// Init particles and mesh
        updateTransitions(0);
        //Shaders
		//changeMaterial(~~(Math.random() * 3));
		renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);
		// Listeners
		//enableLeap();
		render();
		window.onresize = onResize;
		console.log(window.innerWidth);
	}


	/* On resize event. */

	function onResize(event) {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
    
		renderer.setSize(window.innerWidth, window.innerHeight);

	}
	

	
	/*
	function loadParticles() {
		THREE.ImageUtils.crossOrigin = '';
		uniforms = {
			color: { type: 'c', value: new THREE.Color(0x0d0d0d) }
		};
		var shaderMaterial = new THREE.ShaderMaterial( {
			vertexShader: window.document.getElementById('useVisual').textContent,
			fragmentShader: window.document.getElementById('useVisual2').textContent,
							
        });
        
		var geometry = new THREE.Geometry();
		geometry.verticesNeedUpdate = true;
        particles = new THREE.PointCloud(geometry, shaderMaterial);
        
		scene.add(particles);
	
	}
    */
    
	/*
	SHADERS
	function changeMaterial(seed) {
		var cube = cubes.length;
		material += (seed !== undefined ? seed : 1);	
		while(cube--) {
			var object = cubes[cube];
			object.mesh.material = object.materials[material % object.materials.length];
		}
	}
	*/
	/*
	 * Update the transitions (position, rotation).
	 */
	
	function updateTransitions(schedule) {
		var size = schedule;
		//Changes sizes of the cubes
		if(size === 0) {
			var cube = cubes.length;
			while(cube--) {
				var object = cubes[cube];
				new TWEEN.Tween(object.mesh.scale).to({
					x: object.level / 2,
					y: object.level / 2,
					z: object.level / 2
				}, 2500).start();

			}
		
		}
		
		// Change position and rotation every two secs
		if((Date.now() - lastTransition > 0 && Date.now() - lastTransition < 8000 && start) || schedule !== undefined) {
		
			start = false;
			
			var cube = cubes.length;
			
			while(cube--) {
		
				var object = cubes[cube];
				
				// Random position
				new TWEEN.Tween(object.mesh.position).to({

					x: Math.random() * 2000 - 1000,
					y: Math.random() * 2000 - 1000,
					z: Math.random() * 2000 - 1000 
						
				}, 5000).start();
					
				// Random rotation				
				new TWEEN.Tween(object.mesh.rotation).to({
				
					x: Math.random() * 2 * Math.PI,
					y: Math.random() * 2 * Math.PI,
					z: Math.random() * 2 * Math.PI 
						
				}, 5000).start();

			}
		
		}
		
		// Resets the timer for the two moving pieces
		if(Date.now() - lastTransition > 2000) {
			lastTransition = Date.now();
			start = true;
		}
		
	}

	/*
	 * Render the animation.
	 */

	function render() {
		requestAnimationFrame(render);
		updateTransitions();
		TWEEN.update();
		camera.lookAt(scene.position);
		renderer.render(scene, camera);
	}

})(self)
}