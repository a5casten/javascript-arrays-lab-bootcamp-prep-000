var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  const moreKittens = kittens.concat(name);
  return moreKittens;
}

function prependKitten(name){
  const moreKittens = [name, ...kittens]
  return moreKittens;
}

function removeLastKitten(){
  const moreKittens = kittens.slice(0,kittens.length-1);
  return moreKittens;
}

function removeFirstKitten(){
  const moreKittens = kittens.slice(1);
  return moreKittens;
}