Template.formCadastroEventos.rendered = function() {

}
Template.formCadastroEventos.events({
	"submit .formCadastroEventos": function() {
		var nomeEvento = event.target.nomeEvento.value;
		var descEvento = event.target.descEvento.value;
		var file = $('#profileEvento').get(0).files[0].name;
		
		if (isNotEmpty(nomeEvento) && isNotEmpty(descEvento) 
			 ) {
			
			Meteor.call('addEvento', nomeEvento, descEvento,file);
            
			event.target.nomeEvento.value = "";
			event.target.descEvento.value = "";
			Bert.alert("Evento cadastrado com sucesso!", "success", "growl-top-right");
		} else {	
			Bert.alert("Preencha todos os campos", "danger", "growl-top-right");
		}
		return false; // prevent submit
	}
});
// Validation Rules
var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Este campo esta com problemas", "danger", "growl-top-right");
	return false;
};