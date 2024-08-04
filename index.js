// How to import in the ES way
import { f1, f3 } from './es_exports.js';
import f2 from './es_exports.js';

// How to import in the ES way but from a CommonJS export
// This is en extra example. Should focus on ES
import { f4 } from './common_exports.cjs';

f1();
f2();
f3();

f4();

