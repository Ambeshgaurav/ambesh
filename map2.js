var myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'one');
myMap.set("a","ab");
myMap.set("1", 'one');
myMap.set(0, 'three');myMap.set(0, 'zero');
for (var [key, value] of myMap) {
  console.log(key + ' = ' + value);
}

for (var key of myMap.keys()) {
  console.log(key);
}

for (var value of myMap.values()) {
  console.log(value);
}

for (var [key, value] of myMap.entries()) {
  console.log(key + ' = ' + value);
}
console.log(myMap.size);
