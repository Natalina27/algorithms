function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (x > 16 && y>16 ) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
