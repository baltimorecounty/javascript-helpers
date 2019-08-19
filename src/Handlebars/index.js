import Handlebars from 'handlebars';
import { limit, skip } from './HandlebarsHelpers';

/** Register all the helpers */
const exportedHelpers = { limit, skip };
Object.keys(exportedHelpers).forEach((helperKey) => {
	Handlebars.registerHelper(helperKey, exportedHelpers[helperKey]);
});

export default Handlebars;
