var drum = document.querySelectorAll(".drum").length;
for (var i=0; i<drum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      var value = this.innerHTML;
      drums(value);
      ButtonAnimation(value);
    });


        document.addEventListener("keypress",function(event){
            drums(event.key);
            ButtonAnimation(event.key);
        });



        function drums(key){
      switch (key) {
          case "w":
              var sound = new Audio("sounds/crash.mp3");
              sound.play();
              break;
              case "a":
                var sound = new Audio("sounds/kick-bass.mp3");
                sound.play();
            break;
              case "s":
                  var sound = new Audio("sounds/snare.mp3");
              sound.play();
              break;
              case "d":
                var sound = new Audio("sounds/tom-4.mp3");
                sound.play();
                break;
                case "j":
                    var sound = new Audio("sounds/tom-1.mp3");
                sound.play();
                break;
                case "k":
                    var sound = new Audio("sounds/tom-2.mp3");
                sound.play();
                break;
                case "l":
                    var sound = new Audio("sounds/tom-3.mp3");
                sound.play();
                break;

          default:
              break;
      }
    }
      function ButtonAnimation(pre){
          document.querySelector("." + pre).classList.add("pressed");

          setTimeout(function(){
              document.querySelector("."+pre).classList.remove("pressed")
          },100);
      }
    };


