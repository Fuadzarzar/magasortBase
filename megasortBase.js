 
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  
    numbers = [];
    num = 6;
  
    for (index = 0; numbers.length < num; index++) {
      gerador = getRandomInt(1, 61);
      numbers.push(gerador);
      let noRepeat = numbers.filter(function (elem, num, self) {
        return num === self.indexOf(elem);
      });
  
      numbers = noRepeat;
      
      noRepeat.sort(function (b, a) {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });

        console.log(numbers)
    }
