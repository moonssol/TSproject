var list = [{ value: 1 }, { value: 2 }];

list.forEach(function (item) {
  //h1이 바뀌게 하려면?

  item.value2 = item.value + 1;
  delete item.value;
});

console.log(list);
// list -> [{ value2: 2 }, { value2: 3 }]
