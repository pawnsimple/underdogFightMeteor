
Template.formCadastroModalidades.rendered = function() {

}
Template.formCadastroModalidades.events({
	"submit .formCadastroModalidades": function() {
		var modalidade = event.target.modalidade.value;
		var diaSemana = event.target.diaSemana.value;
		if (isNotEmpty(modalidade) && isNotEmpty(diaSemana)) {
            Meteor.call('addModalidade', modalidade, diaSemana);
			event.target.modalidade.value = "";
			event.target.diaSemana.value = "";
			Bert.alert("Modalidade cadastrada com sucesso!", "success", "growl-top-right");
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