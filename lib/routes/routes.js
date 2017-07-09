Router.configure({
    layoutTemplate: 'main'
});

Router.map(function(){
//nesse this.route coloca o mesmo nome do template 
   
    this.route('main',{
        path: '/',
        template: 'main',
       
    });
     this.route('admSite/',{
        path: '/admSite',
        template: 'login',
        layoutTemplate: 'main_layout'
    });

     this.route('cadastrarmodalidades',{
        template: 'formCadastroModalidades',
        layoutTemplate: 'main_layout'
    });
     this.route('listmodalidades',{
        template: 'listModalidades',
        layoutTemplate: 'main_layout'
    });

     this.route('cadastrarinstrurores',{
        template: 'formCadastroInstrutores',
        layoutTemplate: 'main_layout'
    });
     this.route('listinstrutores',{
        template: 'listInstrutores',
        layoutTemplate: 'main_layout'
    });

     this.route('cadastrareventos',{
        template: 'formCadastroEventos',
        layoutTemplate: 'main_layout'
    });
     this.route('listeventos',{
        template: 'listEventos',
        layoutTemplate: 'main_layout'
    });

     this.route('cadastrarcarrousel',{
        template: 'formCadastroCarrousel',
        layoutTemplate: 'main_layout'
    });
     this.route('listCarrousel',{
        template: 'listCarrousel',
        layoutTemplate: 'main_layout'
    });
     
    




   
  
});