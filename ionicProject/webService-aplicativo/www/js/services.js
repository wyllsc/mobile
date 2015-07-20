angular.module('starter.services', [])


.factory('ConversorVideo', function(){

	var url = null;
	return{}
})

.factory('Webservice', function($resource) {
    return $resource('', {}, {
        noticias: {
            method: 'GET',
            url: 'http://canuri.com/ws/servico.php/informativos',
            isArray: true
        },

        videos: {
            method: 'GET',
            url: 'http://canuri.com/ws/servico.php/videos',
            isArray: true
        },

        fotos: {
            method: 'GET',
            url: 'http://canuri.com/ws/servico.php/fotos',
            isArray: true
        },

        postarNoticia: {
            method: 'POST',
            params: {
                titulo: '@titulo',
                desc: '@descricao'
            },
            url: 'http://canuri.com/ws/servico.php/postarNoticia/:titulo/:desc',
            isArray: true
        },

        download: {
            method: 'GET',
            params: {
                ids: '@ids'
            },
            url: 'http://localhost:8080/banco-fotos/api/download/:ids',
            isArray: false
        },

        config: {
            method: 'GET',
            url: 'http://localhost:8080/banco-fotos/api/config',
            isArray: false
        }
    })
})

.factory('Chats', function() {

	var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
