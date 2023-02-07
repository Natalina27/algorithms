function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (y >= size - 5 - x  && y <= size + 3 - x ) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
