class Memory {
  constructor() {
      this.pairs = ['m1', 'm1', 'm2', 'm2', 'm3', 'm3', 'm4', 'm4', 'm5', 'm5'];

      for (let i = 0; i<50; i++) {
        this.pairs.splice(Math.floor(Math.random() * Math.floor(this.pairs.length)), 0, this.pairs.pop());
      }

  }

  flipCard(card){
    card.className = card.className + ' flipped'

  }

  resetCard(buffer){
    const regex = /[^ flipped]/g;

    setTimeout(function(){
      let newClass = buffer[0].className.match(regex).join("");
      buffer[0].className = newClass;

      newClass = buffer[1].className.match(regex).join("");
      buffer[1].className = newClass;

    }, 500)


  }

  isMatch(buffer){
    if ((buffer[0].className === buffer[1].className) && (buffer[0].id != buffer[1].id)) {
      return true;
    }
    return false;
  }

  clearPieces(buffer) {
    buffer[0].className = buffer[0].className + " matched";
    buffer[1].className = buffer[1].className + " matched";
  }


}


export { Memory };
