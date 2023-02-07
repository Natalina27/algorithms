function hp (size){
  let str = '';
  for(let x = 1; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (Math.floor (y / x) === 1) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
