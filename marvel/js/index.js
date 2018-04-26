var marvel = function(){
	var Buscar = function(){
		var personaje =$("#txtPersonaje").val();
		var url ="http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";
		var cantidadComics = 0;
		var comics = "";
		var cantidadSeries = 0;
		var series = "";
		var cantidadStories = 0;
		var stories = "";
		url = url+personaje;
		$.ajax({
			dataType:"json",
			url: url,
			success: function(response){
				if (response.code == 200) {
					$("#foto").attr("src",response.data.results[0].thumbnail.path+"."+response.data.results[0].thumbnail.extension);
					$("#nombre").html("Nombre: "+response.data.results[0].name);
					cantidadComics = response.data.results[0].comics.returned;
					for (var i =0;i<cantidadComics;i++) {
						comics += response.data.results[0].comics.items[i].name+"<br>";
					}
					$("#comics").html("Comics: <br>"+comics);

					cantidadStories = response.data.results[0].stories.returned;
					for (var k =0;k<cantidadStories;k++) {
						stories += response.data.results[0].stories.items[k].name+"<br>";
					}
					$("#stories").html("Historias: <br>"+stories);

					cantidadSeries = response.data.results[0].series.returned;
					for (var j =0;j<cantidadSeries;j++) {
						series += response.data.results[0].series.items[j].name+"<br>";
					}
					$("#series").html("Series: <br>"+series);

				}
			}
		});

	}
	var teclaPersonaje = function(tecla){
			if (tecla.which == 13) {
				Buscar();
			}
		}
	$("#btnBuscar").on("click",Buscar);
	$("#txtPersonaje").on("keypress",teclaPersonaje);

}
$(document).ready(marvel);