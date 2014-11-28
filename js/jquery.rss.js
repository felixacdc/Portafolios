$(function(){
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
					console.log(entry);
				});
			});
		});
	};
});