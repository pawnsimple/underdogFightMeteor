Template.eventos.helpers({
	ev: function () {
		var ev = underdog.find({campo: "evento"});
		return ev;
	}
});