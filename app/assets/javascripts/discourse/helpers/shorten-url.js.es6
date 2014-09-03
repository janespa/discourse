export default Handlebars.registerHelper('shorten-url', function(property, options) {
  var url = Ember.Handlebars.get(this, property, options),
      matches = url.match(/\//g);

  if (matches && matches.length === 3) {
    url = url.replace(/\/$/, '');
  }
  url = url.replace(/^https?:\/\//, '');
  url = url.replace(/^www\./, '');
  return url.substring(0, 80);
});

