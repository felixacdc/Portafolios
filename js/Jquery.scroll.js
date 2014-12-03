$(function(){
	jQuery.fn.scrollTo=function(options){

		var settings=jQuery.extend({
			padding:0
		},options);

		this.each(function(){
			var $section=$(this);
			// establece o devuelve el desplazamiento en coordenadas de los elementos seleccionados, en relación con el documento. en este caso debuelve cordenadas a la izquierda
			var x=$section.offset().left-settings.padding;

			$("body, html").animate({
				scrollLeft:x
			},800);
		})
	}
});