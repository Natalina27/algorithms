function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (y === 1 || x === 1 || y === size -2 || x === size -2 ) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
