Template.listModalidades.helpers({
	e: function () {
		var e = underdog.find({campo: "modalidade"});
		return e;
	}
});


Template.listModalidades.events({
    
    "click #remover-modalidade": function() {
		Meteor.call("removerModalidade", this._id);
		Bert.alert("Você removeu essa Modalidade", "success", "growl-top-right");
	}
});