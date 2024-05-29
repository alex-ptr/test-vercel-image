export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_DthimBWI.mjs').then(n => n.g);

export { page };
