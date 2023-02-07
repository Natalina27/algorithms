function hp (size){
  let str = '';
  for(let x = 0; x < size; x++){
    str += '\n';
    for(let y = 0; y < size; y++){
      str += x < size - y + 5  ? '#' : '.';
    }
  }
  console.log(str);
}

hp(25);
