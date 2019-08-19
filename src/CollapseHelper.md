# ToggleHelper

Exposes [A11y Toggle](http://edenspiekermann.github.io/a11y-toggle/) for an accessible collapse.

## Usage

### Preferred

Our preferred usage, uses a template file instead string as a template

```html
<script>
(function() {
  BcApiHelpers.display({
    url: 'http://www.abc.com/api/examples',
    params: {
      type: 'all'
    },
    templateUrl: '/templates/example.template.handlebars',
    targetId: 'example',
    errorTemplate: '<div class="alert alert-error>Unable to display examples. Please try again later.<p></p></div>"'
  });
})();
</script>
```

### Alternate

```html
<script>
(function() {
  const exampleTemplate = "<ul>{{#each examples}}<li>{{example.name}}</li>{{/each}}</ul>";
  BcApiHelpers.display({
    url: 'http://www.abc.com/api/examples',
    params: {
      type: 'all'
    },
    template: exampleTemplate,
    targetId: 'example'
  });
})();

</script>
```