$(function(){
	jQuery.fn.slider=function(options){

		// la funcion se utiliza para dar valores predeterminados a un objeto o array
		// en este caso lo aplicamos para indicar que si el objeto options no tiene definido un tiempo le asignamos 3 segundos a este atributo
		var settings = jQuery.extend({
			time: 3000
		},options);

		this.each(function(){
			// igualamos la variable slider a la funcion slider
			var $slider=$(this);

			// averiguamos el numero de elementos que tiene la capa hija del objeto de slider
			var n = $(this).children().size();

			// sirve para controlar la posicion de las imagenes
			var i=0;


			// repite la funcion para mostrar las imagenes y que las balla corriendo
			setInterval(function(){
				i=(i+1)%n;
				$slider.children().hide();
				$slider.children().eq(i).fadeIn();
			},settings.time);
		});

	}
});