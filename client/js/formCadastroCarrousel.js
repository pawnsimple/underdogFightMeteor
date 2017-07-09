Template.formCadastroCarrousel.rendered = function() {

}
Template.formCadastroCarrousel.events({
	"submit .formCadastroCarrousel": function() {
		var file = $('#profileCarrousel').get(0).files[0].name;
		
		if (isNotEmpty(file)) {
			
			Meteor.call('addCarrousel', file);
            
			event.target.profileCarrousel.value = "";
			Bert.alert("Imagem Carrousel cadastrada com sucesso!", "success", "growl-top-right");
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