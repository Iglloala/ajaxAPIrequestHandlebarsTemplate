/* Mi código js */
var miCodigo = (function(){
	// Propiedades
	var _bloqueResultado = $('#resultado');
	var _loader = $('#loader');

	// Método init que asocia los eventos
	function _init(){
		// Evento para el botón btLogrosPVE
		var btLogrosPVE = $('#btLogrosPVE');
		btLogrosPVE.on('click', _cargarLogrosPVE);
		// Evento para el botón btSkins
		var btSkins = $('#btSkins');
		btSkins.on('click', _cargarSkinsItems);
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
				// Cuando ya tengo toda la info de los logros diarios pve los muestro en la capa de resultado
				datos.forEach(function(logro){
					// Aquí genero el contexto con los datos obtenidos
					var context = {titulo: logro.name, requisito: logro.requirement};
					// Handlebars genera el html según el template ya compilado y el contexto que le paso
					var html = Handlebars.templates.logro(context);
					// Y por último lo inserto donde quiero
					_bloqueResultado.append(html);
				});
			});
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
			// pero le vuelvo a meter el loader
			_bloqueResultado.append(_loader);
		});
	}

	function _cargarSkinsItems(){
		// Muestro el icono de carga
		_loader.css('visibility', 'visible');
		// Inicio una petición AJAX para recuperar los id's de todas las skins disponibles
		var jqxhr = $.get("https://api.guildwars2.com/v2/skins");
		// done
		jqxhr.done(function(datos){
			// Del array que me ha pasado voy a seleccionar 8 id's aleatorios
			var listaIds = [];
			for (var i=0; i<8; i++) {
				// Calculo los indices
				var indice = Math.floor(Math.random() * datos.length);
				// Y extraigo un identificador válido
				listaIds.push(datos[indice]);
			}
			// Ahora que ya tengo id's válidos hago otra petición AJAX para recuperar la información de dichos id's
			var params = {lang: 'es', ids: listaIds.join()};
			jqxhr = $.get("https://api.guildwars2.com/v2/skins", params);
			// Y si ha recuperado bien la info pues la muestro
			jqxhr.done(function(datos){
				datos.forEach(function(skin){
					var context = {icono: skin.icon, nombre: skin.name, tipo: skin.type, rareza: skin.rarity};
					var html = Handlebars.templates.skin(context);
					_bloqueResultado.append(html);
				});
			});
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
			// pero le vuelvo a meter el loader
			_bloqueResultado.append(_loader);
		});
	}

	return {
		cargarLogrosPVE: _cargarLogrosPVE
	}
})();