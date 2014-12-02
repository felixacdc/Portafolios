$(function(){
	// jQuery.fn se utiliza para crear plugins par jquery y este aneja la interaccion de los elementos.
	// jQuery.fn sirve para crear funciones para jquery
	jQuery.fn.blogRSS=function(url){
		// El método each () especifica una función a ejecutar para cada elemento coincidente.
		// ejemplo $("li").each(function(){
		// alert($(this).text())
		// });
		this.each(function(){
			var $elemento=$(this);
			var imagen="";
			var titulo="";
			var contenido="";
			var link="";

			// La función getJSON hace una petición de datos al servidor considerando que retorna la información con notación JSON
			// La función getJSON procede a generar un objeto en JavaScript y nosotros en la función lo procesamos.
			$.getJSON(url, function(data){

				// La función each de jQuery nos sirve para iterar uno por uno los elementos de una colección, usualmente estos son el resultado de un selector jQuery, pero también pueden ser otras colecciones de Javascript como un array o un objeto.
				// En este caso se eesta usando con un arreglo que es data
				$.each(data.feed.entry, function(i, entry){
					// estructura del link se entra a entry que representa a el objeto optenido
					// el target blank indica que se abrira el link en tora pestaña
					link="<a href='"+entry.link[2].href+"' target='_blank'>";

					// se optiene el titulo del objeto title es nombre de la propiedad a la que se ingresa
					// y el $t es la propiedad del title donde se encuentra el titulo
					titulo="<h3>"+entry.title.$t+"</h3>";

					//se optiene la imagen en la propiedad media$thmbnail de nuestro objeto entry
					imagen="<img src='"+entry.media$thumbnail.url +"'>";

					// se empieza a crear el contenido que se guardara en un div
					contenido+=link+"<div class='rss-container'>";
					contenido+=titulo+imagen+"</div><a/>";
				});

				// se ingresa todos los objetos html creados en el elemento
				$elemento.html(contenido);
			});
		});
	};
});