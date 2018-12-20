import { assert } from '../test-config';

describe('A suite', function () {
	it('contains spec with an expectation', function () {
		assert.equal(true, true);
	});
});
// A sample Mocha test


// describe('Array', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			assert.equal(-1, [1, 2, 3].indexOf(5));
// 			assert.equal(-1, [1, 2, 3].indexOf(0));
// 		});
// 	});
// });