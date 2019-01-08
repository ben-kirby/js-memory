import { Memory } from './memory'
import './styles.css';

$(document).ready(function(){

  let game = new Memory();

  const imageElement = document.getElementById('id');

  game.pairs.forEach(function(i, index){
    const box = document.getElementById(`box${index}`);
    box.setAttribute('class', `${i}`);

    // box.setAttribute('style',"background: url('https://picsum.photos/200/?random');");

    const image = document.createElement('img');
    image.setAttribute('src','http://www.freepngclipart.com/thumb/questions/7554-questions-green-question-mark-images-hd-image-thumb.png');

    image.setAttribute('class', `${i}`);
    image.setAttribute('id', `image-id-${index}`);

    box.append(image);
  });


  const testingThisElement = document.getElementById('imageTable');

  let buffer = [];

  testingThisElement.addEventListener('click', function(event){
    game.flipCard(event.target)
    buffer.push(event.target);
    if (buffer.length == 2) {
      if (game.isMatch(buffer)) {

        // setTimeout(myFunction, 3000)


        game.clearPieces(buffer);
      }
      else{

        // setTimeout(myFunction, 3000)



        game.resetCard(buffer);
      }

      buffer = [];

    }

  });

});
