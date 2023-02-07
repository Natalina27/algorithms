function hp (size){
  let str = '';
  for(let x = 1; x < size; x++){
    str += '\n';
    for(let y = 1; y <= size; y++){
      str += x === Math.ceil(y/2) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
