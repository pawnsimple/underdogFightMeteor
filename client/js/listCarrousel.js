Template.listCarrousel.helpers({
	e: function () {
		var e = underdog.find({campo: "Carrousel"});
		return e;
	}
});


Template.listCarrousel.events({
    
    "click #remover-carrousel": function() {
		Meteor.call("removerCarrousel", this._id);
		Bert.alert("Você removeu essa imagem do carrousel", "success", "growl-top-right");
	}
});