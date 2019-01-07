import { memory } from './memory'

$(document).ready(function(){
  console.log('hi')

  const random = ['m1', 'm1', 'm2', 'm2'];

  random.forEach(function(i) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src','https://picsum.photos/200');
    newImage.setAttribute('class',i);
    
    document.body.append(newImage);


  })




// [1,1,2,2,3,3,4,4,5,5].random()
// 2,3,5,4,2,3,5,4,1,1
});
