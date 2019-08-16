<a name="display">ApiHelpers.display</a>

## display(options) ⇒ <code>Promise</code>
Displays response of a given api endpoint, through a Handlebars template.

**Kind**: global function
**Returns**: <code>Promise</code> - Promise with the data returned from the api call

| Param                   | Type                | Default                                                                              | Description                                                                               |
| ----------------------- | ------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| options                 | <code>object</code> |                                                                                      |                                                                                           |
| options.url             | <code>string</code> |                                                                                      | Endpoint for your api call                                                                |
| options.targetId        | <code>string</code> |                                                                                      | The document element id of the target container for your template, do not need '#' prefix |
| [options.template]      | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code>                                                | Handlebars.js template to display the response                                            |
| [options.templateUrl]   | <code>string</code> | <code>&quot;&#x27;&#x27;&quot;</code>                                                | Url to a Handlebars.js template, this url must be on the same domain as this script       |
| [options.params]        | <code>object</code> | <code>{}</code>                                                                      | Params to be sent to the api                                                              |
| [options.errorTemplate] | <code>string</code> | <code>&quot;&#x27;Unable to display data. Please try again later.&#x27;&quot;</code> | Brief html to display a message to the user when the api call fails                       |