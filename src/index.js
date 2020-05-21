function numCheck(num) {
    num = parseInt(num, 10);
    if (num == 0) {
      throw Error('Как?! Совсем ничего не нужно?')
    };
    let str = String(num);
    if (str != num) {
      throw Error('Кажется, что-то не так')
    } else {
      return num
    }
    };



export { numCheck }