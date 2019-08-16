require('es6-promise').polyfill();
import axios from 'axios';
import handlebars from 'handlebars';

const getTemplate = async (handlebarsTemplateUrl) => {
	try {
		return await axios.get(handlebarsTemplateUrl).then((response) => response.data);
	} catch (error) {
		console.error(
			'Unable to get template, please make sure the template is not on a different domain and the url is as expected.'
		);
	}
};

const setHtml = (targetId, handleBarsTemplate, data = {}) => {
	const html = handlebars.compile(handleBarsTemplate)(data);
	document.getElementById(targetId).innerHTML = html;
};

/**
 * Displays response of a given api endpoint, through a Handlebars template.
 * @param {object} options
 * @param {string} options.url Endpoint for your api call
 * @param {string} options.targetId The document element id of the target container for your template, do not need '#' prefix
 * @param {string} [options.template = ''] Handlebars.js template to display the response
 * @param {string} [options.templateUrl = ''] Url to a Handlebars.js template, this url must be on the same domain as this script
 * @param {object} [options.params = {}] Params to be sent to the api
 * @param {string} [options.errorTemplate = 'Unable to display data. Please try again later.'] Brief html to display a message to the user when the api call fails
 *
 * @return {Promise} Promise with the data returned from the api call
 */
const display = (options) => {
	const {
		url = console.error('You must specify a url (api endpoint) in order to use this method.'),
		targetId = console.error('You must specify a targetId in order to use this method.'),
		template,
		templateUrl = '',
		params = {},
		errorTemplate = '<p>Unable to display data. Please try again later.</p>'
	} =
		options || {};

	const hasValidTemplate = (template && typeof template === 'string') || templateUrl;

	if (!hasValidTemplate) {
		console.error('You must specify a template or template url in order to display data.');
		return;
	}

	if (!url || !targetId) {
		console.error('Unable to build template.');
		return;
	}

	const handleSuccess = async (data) => {
		const handleBarsTemplate = template || (await getTemplate(templateUrl));
		setHtml(targetId, handleBarsTemplate, data);
		return data;
	};

	const handleError = (error) => {
		setHtml(targetId, errorTemplate);
		return error;
	};

	return axios.get(url, { params }).then((response) => response.data).then(handleSuccess).catch(handleError);
};

export { display };
