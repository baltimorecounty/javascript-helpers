import Handlebars from 'handlebars';
import { limit, skip } from './HandlebarsHelpers';

/** Register all the helpers */
[ limit, skip ].forEach((helper) => {
	Handlebars.registerHelper(helper.name, helper);
});

export default Handlebars;
