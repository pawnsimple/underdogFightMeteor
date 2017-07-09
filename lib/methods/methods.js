if (Meteor.isServer) {
	Meteor.methods({
		// Method for adding jokes
		addModalidade: function(modalidade,diaSemana) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else { 
                //var username = Meteor.user().username;
                
                underdog.insert({
                    modalidade: modalidade,
                    diaSemana: diaSemana,
                    campo:"modalidade",
                    
                    
                });
			}
		},
		addInstrutor: function(nomeInstrutor,descInstrutor,file) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else { 
                //var username = Meteor.user().username;
                
                underdog.insert({
                    nomeInstrutor: nomeInstrutor,
                    descInstrutor: descInstrutor,
                     campo:"instrutor",
                     file:file,

                    
                });
			}
		},
		addEvento: function(nomeEvento,descEvento,file) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else { 
                //var username = Meteor.user().username;
                
                underdog.insert({
                    nomeEvento: nomeEvento,
                    descEvento: descEvento,
                     campo:"evento",
                     file:file,

                    
                });
			}
		},
		addCarrousel: function(file) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				return false;
			} else { 
                underdog.insert({
                    campo:"Carrousel",
                     file:file,

                    
                });
			}
		},
		removerCarrousel: function(e) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				underdog.remove(e);
			}
		},
        removerModalidade: function(e) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				underdog.remove(e);
			}
		},
		removerInstrutor: function(e) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				underdog.remove(e);
			}
		},
		removerEvento: function(e) {
			if(!Meteor.userId()) {
				throw new Meteor.Error('not authorized');
				this.stop();
				return false;
			} else {
				underdog.remove(e);
			}
		},
	});	
}