import newThing from '../src/new-thing.js';
import { strict as assert } from 'assert';

assert.strictEqual(newThing(), 'Hello from newThing');
console.info('newThing tests passed');
