Tracker.autorun(function(){
	$( "#0" ).addClass( "active");
});
Template.intro.rendered = function() {
				$( "#0" ).addClass( "active");
}

Template.intro.helpers({
	c: function () {
		var c = underdog.find({campo: "Carrousel"});
		return c;
	},
	register: function () {
	},

});