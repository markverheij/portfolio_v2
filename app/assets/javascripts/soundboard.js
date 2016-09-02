var Soundboard = function (){
       var self = {
           playlistOrder : [],
           playlist : [],
           audioElement : '',
           playing : false,

           init: function () {

               var foo = document.getElementById("playlist");
               Sortable.create(foo, {
                   group: "omega",
                   animation: 150,
                   draggable: ".draggable",
                   ghostClass: 'placeholder',
                   store: {
                       /**
                        * Get the order of elements. Called once during initialization.
                        * @param   {Sortable}  sortable
                        * @returns {Array}
                        */
                       get: function (sortable) {
                           var order = localStorage.getItem(sortable.options.group.name);
                           return order ? order.split('|') : [];
                       },

                       /**
                        * Save the order of elements. Called onEnd (when the item is dropped).
                        * @param {Sortable}  sortable
                        */
                       set: function (sortable) {
                           var order = sortable.toArray();
                           localStorage.setItem(sortable.options.group.name, order.join('|'));
                           self.playlistOrder = order;
                       }
                   }
               });

               var bar = document.getElementById("sounds");
               Sortable.create(bar, {
                   group: "omega",
                   animation: 150,
                   draggable: ".draggable",
                   ghostClass: 'placeholder'
               });
           },
           createPlaylist : function(){

               self.playlist = [];

               for( var item in self.playlistOrder){

                   var source = $(".playlist [data-id='" + self.playlistOrder[item] + "']").attr('data-source')

                   self.playlist.push(source);
               }

           },
           playPlaylist : function(){

               self.createPlaylist();

               var playlistLength = self.playlist.length;
               var currentAudio = 0

               if(!self.playing){
                   self.audioElement = document.createElement('audio');
                   self.audioElement.setAttribute('src', self.playlist[0]);
                   self.audioElement.play();

                   self.playing = true

               }



               self.audioElement.addEventListener('ended',function(){
                   self.playing = false
                   if(playlistLength > currentAudio){
                       currentAudio++
                       self.audioElement.setAttribute('src', self.playlist[currentAudio]);
                       self.audioElement.play();
                       self.playing = true
                   }

               })


               for(var audio in self.Playlist) {


               }

               console.log(self.playlist);


           },

           stopPlaylist : function(){
               self.audioElement.pause();
               self.playing = false
           }
       };

    return self;
}();


