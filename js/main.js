$(document).on("ready",function(){
	// ******************* OBTENER DATOS DEL BLOGS POR RSS *************************
	$("#posts").blogRSS("http://www.vidamrr.com/feeds/posts/default?alt=json-in-script&callback=?");

	// ******************* LLAMAR AL PLUGIN CREADO PARA EL SLIDER *********************
	$("#slider-miniaturas").slider({time: 7000});

	// ****************** CODIGO PARA GALERIA Y MODAL DE TRABAJO *******************
	var control=0;
	var index=0;
	var $galeria;

	$("#trabajos-container a").on("click", function(){
		index=$(this).index();
		$("#colecciones-container").fadeIn();
		$("#colecciones-container .coleccion-container").hide();
		// .eq devuelve un elemento con un número de índice específico de los elementos seleccionados.
		$("#colecciones-container .coleccion-container").eq(index).fadeIn();

		$("#colecciones-container .coleccion-container").eq(index).children().eq(0).children().hide();
		$("#colecciones-container .coleccion-container").eq(index).children().eq(0).children().eq(0).fadeIn();

		control=0;
		// Los attr () conjuntos de métodos o devuelve atributos y valores de los elementos seleccionados.
		$galeria=$("#"+$(this).attr("href"));
		total=$galeria.children().size();
		return false;
	});

	$(".cerrar a").on("click",function(){
		$("#colecciones-container").fadeOut();
		return false;
	});

	$(".controles .siguiente").on("click",function(){
		// la operacion indica el numero de indice que toca o el numero de imagen que toca
		control=(control+1)%total;
		$galeria.children().hide();
		$galeria.children().eq(control).fadeIn();
		return false;
	});

	$(".controles .anterior").on("click",function(){
		control--;
		if (control<0)
		{
			control=0;
		};

		$galeria.children().hide();
		$galeria.children().eq(control).fadeIn();
		return false;
	});

	// ************************** ACORDEON DE ACERCA DE ******************
	$("#acordeon-container").acordeon();

	// ************************* ACCEDER A LAS SECCIONES POR MEDIO DE EL MENU ***************************
	$("#menu a").on("click", function(){
		// con el .parent.index sacamos el index el propio objeto
		$(".seccion").eq($(this).parent().index()).scrollTo({padding:$("#menu-container").width()});
	});

	function adaptScreen(){
		$(".seccion").css("height",$(window).height())
	}

	adaptScreen();

	// idnica que cada vez que se modifique el tamaño de la ventana se ejecutara la funcion adaptasreen
	$(window).resize(function(){
		adaptScreen();
		// alert('hola');
	})
});