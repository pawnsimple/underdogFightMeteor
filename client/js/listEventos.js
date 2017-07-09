Template.listEventos.helpers({
	e: function () {
		var e = underdog.find({campo: "evento"});
		return e;
	}
});


Template.listEventos.events({
    
    "click #remover-evento": function() {
		Meteor.call("removerEvento", this._id);
		Bert.alert("Você removeu esse Evento", "success", "growl-top-right");
	}
});