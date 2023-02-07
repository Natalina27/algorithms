function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (y*y + x*x <= 400) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
