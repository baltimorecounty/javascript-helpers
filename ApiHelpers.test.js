import axios from 'axios';
import { display } from './ApiHelpers';
import '@testing-library/jest-dom/extend-expect';
import { getByText } from '@testing-library/dom';
import MockAdapter from 'axios-mock-adapter';

/**
 * Setup and Helpers
 */
const mock = new MockAdapter(axios);

afterEach(() => {
	/** Reset document.body */
	document.body.firstChild.remove();
});

const createAppContainer = (id) => {
	const div = document.createElement('div');
	div.id = id;
	document.body.append(div);
	return div;
};

/** Tests */

test('should display results based on string template for a successful response', () => {
	const container = createAppContainer('app');
	const users = [ { name: 'Bob' } ];
	const usersTemplate = '{{#each .}}<p>{{name}}</p>{{/each}}';

	mock.onGet('/users').reply(200, users);

	return display({ url: '/users', template: usersTemplate, targetId: 'app' }).then(() => {
		const userNodes = getByText(container, 'Bob');
		expect(userNodes).toBeInTheDocument();
	});
});

test('should display results based on templateUrl for a successful response', () => {
	const container = createAppContainer('app');
	const users = [ { name: 'Bob' } ];
	const templateUrl = '/users.template.handlebars';

	mock.onGet('/users.template.handlebars').reply(200, '{{#each .}}<h2>{{name}}</h2>{{/each}}');
	mock.onGet('/users').reply(200, users);

	return display({ url: '/users', templateUrl, targetId: 'app' }).then(() => {
		const userNodes = getByText(container, 'Bob');
		expect(userNodes).toBeInTheDocument();
	});
});

test('should display default error message for a failed response', () => {
	const container = createAppContainer('app');
	const usersTemplate = '{{#each .}}<p>{{name}}</p>{{/each}}';

	mock.onGet('/users').reply(500);

	return display({ url: '/users', template: usersTemplate, targetId: 'app' }).then(() => {
		const errorMessage = getByText(container, /^Unable to display data.*/i);
		expect(errorMessage).toBeInTheDocument();
	});
});

test('should display error message based on passed in options for a failed response', () => {
	const container = createAppContainer('app');
	const usersTemplate = '{{#each .}}<p>{{name}}</p>{{/each}}';

	mock.onGet('/users').reply(500);

	return display({
		url: '/users',
		template: usersTemplate,
		targetId: 'app',
		errorTemplate: 'Oops, we made a mistake.'
	}).then(() => {
		const errorMessage = getByText(container, /^Oops*/i);
		expect(errorMessage).toBeInTheDocument();
	});
});
