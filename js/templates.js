(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['logro'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<h6 class=\"titulo\">"
    + alias4(((helper = (helper = helpers.titulo || (depth0 != null ? depth0.titulo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"titulo","hash":{},"data":data}) : helper)))
    + "</h6>\r\n<p class=\"requisito\">"
    + alias4(((helper = (helper = helpers.requisito || (depth0 != null ? depth0.requisito : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requisito","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
templates['skin'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-3\">\r\n	<div class=\"wrapper-skin\">\r\n		<img class='icono' src=\""
    + alias4(((helper = (helper = helpers.icono || (depth0 != null ? depth0.icono : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"icono","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "\">\r\n		<h6 class='nombre'>"
    + alias4(((helper = (helper = helpers.nombre || (depth0 != null ? depth0.nombre : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre","hash":{},"data":data}) : helper)))
    + "</h6>\r\n		<div>\r\n			<b>Tipo: </b>"
    + alias4(((helper = (helper = helpers.tipo || (depth0 != null ? depth0.tipo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tipo","hash":{},"data":data}) : helper)))
    + "<br/>\r\n			<b>Rareza: </b>"
    + alias4(((helper = (helper = helpers.rareza || (depth0 != null ? depth0.rareza : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rareza","hash":{},"data":data}) : helper)))
    + "<br/>\r\n		</div>\r\n	</div>\r\n</div>";
},"useData":true});
})();