function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += (Math.abs(x - y) >= 10 && Math.abs (x - y) <= 20) ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
