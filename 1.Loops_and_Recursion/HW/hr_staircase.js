function staircase(n) {
  let str = '';
  for(let x = 0; x < n; x++){
    for(let y = 0; y < n; y++){
      str += (x + y >= n - 1 ? '#' : ' ');
    }
    if(x < n - 1){
      str += '\n'
    }

  }
  console.log(str);

}

staircase(6);
