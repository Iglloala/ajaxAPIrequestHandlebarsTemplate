/* Mi código js */
var miCodigo = (function(){
	// Propiedades
	var _bloqueResultado = $('#resultado');
	var _loader = $('#loader');

	// Método init que asocia los eventos
	function _init(){
		var btLogrosPVE = $('#btLogrosPVE');
		btLogrosPVE.on('click', _cargarLogrosPVE);
	}
	_init();

	// Métodos
	function _cargarLogrosPVE(){
		// Muestro el icono de carga
		_loader.css('visibility', 'visible');
		// Inicio una petición AJAX para recuperar los id's de los logros diarios pve
		var jqxhr = $.get("https://api.guildwars2.com/v2/achievements/daily");
		// done
		jqxhr.done(function(datos){
			// Extraigo los id's
			var listaIds = datos.pve.map(function(logro){
				return logro.id;
			});
			// Preparo los parámetros para una nueva petición
			var parametros = {lang: 'es', ids: listaIds.join()};
			// Inicio otra petición AJAX para recuperar los datos definitivos
			var jqxhr = $.get("https://api.guildwars2.com/v2/achievements", parametros);
			jqxhr.done(function(datos){
				// Caundo ya tengo toda la info de los logros diarios pve los muestro en la capa de resultado
				datos.forEach(function(logro){
					var titulo = $('<h6>').append(logro.name);
					var requisito = $('<p>').append(logro.requirement);
					_bloqueResultado.append(titulo);
					_bloqueResultado.append(requisito);
				})
			})
			// Oculto el icono de carga
			_loader.css('visibility', 'hidden');
		});
		// fail
		jqxhr.fail(function(){
			// Oculto el icono de carga
			_loader.css('visibility', 'hidden');
			// Muestro mensaje de error
			_bloqueResultado.html($("<p>No se ha podido recuperar ningún dato</p>"));
		});
		// always
		jqxhr.always(function(){
			// Vacío la capa de resultados
			_bloqueResultado.html("");
		})
	}

	return {
		cargarLogrosPVE: _cargarLogrosPVE
	}
})();