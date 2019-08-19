import { limit, skip } from './HandlebarsHelpers';

describe('limit', () => {
	test('should limit arr for a given limit number', () => {
		const items = [ 'dog', 'cat', 'alligator', 'rhino', 'bird' ];

		const limitedItems = limit(items, 3);

		expect(limitedItems).toEqual([ 'dog', 'cat', 'alligator' ]);
	});
});

describe('skip', () => {
	test('should limit arr for a given limit number but in reverse', () => {
		const items = [ 'dog', 'cat', 'alligator', 'rhino', 'bird' ];

		const limitedItems = skip(items, 3);

		expect(limitedItems).toEqual([ 'rhino', 'bird' ]);
	});
});
