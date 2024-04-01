const lists = [0, 1, 3, 2];

lists.forEach((N) => {
  let len = Math.pow(3, N);
  let string = "";
  for (let i = 0; i < len; i++) {
    string += "-";
  }
  console.log(Kantoa(string));
});

function Kantoa(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = Math.floor(arr.length / 3);
  let first = arr.slice(0, pivot);
  let second = arr.slice(pivot, pivot * 2);
  let third = arr.slice(pivot * 2, pivot * 3);
  return merge(Kantoa(first), Kantoa(second), Kantoa(third));
}

function merge(first, second, third) {
  let string = "";
  let blank = "";
  string += first;
  for (let i = 0; i < second.length; i++) {
    blank += " ";
  }
  string += blank;
  string += third;

  return string;
}

// 0 1 2, 3 4 5, 6 7 8
// len = 9 , slice(0,3) slice(3,6) slice(6,9)
