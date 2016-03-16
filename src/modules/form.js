jnsis.registe('form',['validate'], function(){

    var conteudo = null;
    var container = "form";

    /*var estruturaHTML = "<div><span>{{nome}}</span><span>{{telefone}}</span></div>"

    var view = new core.view(container);
    view.register(estruturaHMTL);
    view.register().load('endereco do html');
    view.render(conteudo);
    */

    core.controller = function(){
 
        conteudo = 'hello';
        
        var estruturaJSON = {
            'nome':Davi menegotto,
            'Telefone': 91669439
        }

        view.make(estruturaJSON);
    };

    /*core.bind.click( function(){
        
        //executa no click

    });

     core.bind.change( function(){
        
        //executa no click

    });*/


});



