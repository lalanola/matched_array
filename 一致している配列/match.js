const arr = [
  [
    [1, 2, 3],
    [3, 4, 5],
  ],
  [
    [1, 2, 3],
    [1, 1, 1],
  ],
  [
    [1, 2, 3],
    [3, 4, 5],
  ],
];



for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let matched_number = 0;
    for (let k = 0; k < arr.length; k++) {
      let already_its_row_by_matched_exists = false;
      if (k != i) {
        for (let l = 0; l < arr[k].length; l++) {
          if (!already_its_row_by_matched_exists) {
            if (JSON.stringify(arr[i][j]) == JSON.stringify(arr[k][l])) {
              already_its_row_by_matched_exists = true;
              matched_number++;
            }
          }
        }
      }
    }
    if (matched_number == arr.length - 1) {
      console.log(arr[i][j]);
    }
  }
}
