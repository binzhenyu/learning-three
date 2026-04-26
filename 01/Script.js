import * as THREE from 'three';

const canvas = document.querySelector('.webgl');//获取canvas元素


const scene = new THREE.Scene();//添加一个新的场景
const geometry = new THREE.BoxGeometry(1, 1, 1);//创建一个立方体，参数分别是宽、高、深
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });//创建一个材质，参数是一个对象，可以设置颜色
const mesh = new THREE.Mesh(geometry, material);//创建一个网格，参数是几何体和材质
mesh.position.set(0.7, -0.6, 1);//设置网格的位置
scene.add(mesh);//将网格添加到场景

const sizes = {
    width: 800,
    height: 600
};//设置画布的宽高

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);//创建一个透视相机，参数是视野、宽高比
scene.add(camera);//将相机添加到场景
camera.position.z = 3;//设置相机的位置


const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});//创建一个渲染器，参数是一个对象，可以设置画布

renderer.setSize(sizes.width, sizes.height);//设置渲染器的尺寸
renderer.render(scene, camera);//渲染场景和相机

