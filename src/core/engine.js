var jnsis = function {

    var _DEPENDENCES = Array();
    var _MODULES = {};

    return {
        
        register: function(name, dependences, object){
        l
            for (var i =0; i < dependences.length; i++){
                if (!_DEPENDENCES.indexOf(dependences[i]))
                    _DEPENDENCES.push(dependences[i]);
            }

            _MODULES[name] = object;

            core.apply(_DEPENDENCES);
            core.load(_MODULES);

        }

        view: function(id){
            var obj = $(id);

            return {
                seletor: function(){
                    return obj;
                },

                render: function(conteudo){
                    obj.html(conteudo);
                    return obj;
                }

                make: function(struct){
                    //TODO usa template para alterar conudo html a partir de um jason
                }
            }
        }

    }

}();
