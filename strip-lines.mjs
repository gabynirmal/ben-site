import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const document = await io.read('public/LibraryRenderedProto.optimized.glb');

const root = document.getRoot();
let removed = 0;

for (const mesh of root.listMeshes()) {
  for (const prim of mesh.listPrimitives()) {
    if (prim.getMode() !== 4) { // 4 = TRIANGLES
      prim.dispose();
      removed++;
    }
  }
  if (mesh.listPrimitives().length === 0) {
    mesh.dispose();
  }
}

console.log(`Removed ${removed} non-triangle primitives`);

for (const ext of root.listExtensionsUsed()) {
  if (ext.extensionName === 'KHR_mesh_primitive_restart') {
    ext.dispose();
    console.log('Removed KHR_mesh_primitive_restart extension declaration');
  }
}

await io.write('public/LibraryRenderedProto.cleaned.glb', document);
