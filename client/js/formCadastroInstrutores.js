Template.formCadastroInstrutores.rendered = function() {

}
Template.formCadastroInstrutores.events({
	"submit .formCadastroInstrutores": function() {
		var nomeInstrutor = event.target.nomeInstrutor.value;
		var descInstrutor = event.target.descInstrutor.value;
		var file = $('#profileInstrutor').get(0).files[0].name;
		
		if (isNotEmpty(nomeInstrutor) && isNotEmpty(descInstrutor) 
			 ) {
			
			Meteor.call('addInstrutor', nomeInstrutor, descInstrutor,file);
            
			event.target.nomeInstrutor.value = "";
			event.target.descInstrutor.value = "";
			Bert.alert("Instrutor cadastrado com sucesso!", "success", "growl-top-right");
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