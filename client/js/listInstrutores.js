Template.listInstrutores.helpers({
	e: function () {
		var e = underdog.find({campo: "instrutor"});
		return e;
	}
});


Template.listInstrutores.events({
    
    "click #remover-instrutor": function() {
		Meteor.call("removerInstrutor", this._id);
		Bert.alert("Você removeu esse instrutor", "success", "growl-top-right");
	}
});