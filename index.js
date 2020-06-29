var kittens = ["Milo","Otis","Garfield"]; //define your array here

// Add your functions and code here

function destructivelyAppendKitten(name){
  return (...kittens, name);
}

function destructivelyPrependKitten(name){
  return (name, ...kittens)
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
  const moreKittens = name.slice(0)
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}