function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (y === 0 || x===0) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
