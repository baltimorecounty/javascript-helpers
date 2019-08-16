# ApiHelpers

Make working with api's easier.

## display(options) ⇒ <code>Promise</code>
Displays response of a given api endpoint, through a Handlebars template.

**Returns**: <code>Promise</code> - Promise with the data returned from the api call

| Param | Type | Default | Description |
| ----- | ---- | ------- | ----------- ||
| options               | <code>object</code> |                                                                          |                                                                                           ||
| options.url           | <code>string</code> |                                                                          | Endpoint for your api call                                                                | required|
| options.targetId      | <code>string</code> |                                                                          | The document element id of the target container for your template, do not need '#' prefix | required|
| options.template      | <code>string</code> | <code>&#x27;&#x27;</code>                                                | Handlebars.js template to display the response                                            | optional - must include if templateUrl is excluded |
| options.templateUrl   | <code>string</code> | <code>&#x27;&#x27;</code>                                                | Url to a Handlebars.js template, this url must be on the same domain as this script       | optional - must include if template is excluded    |
| options.params        | <code>object</code> | <code>{}</code>                                                          | Params to be sent to the api                                                              | optional                                           |
| options.errorTemplate | <code>string</code> | <code>&#x27;Unable to display data. Please try again later.&#x27;</code> | Brief html to display a message to the user when the api call fails                       | optional                                           |