// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  function appendCat(name) {
    // Create a new array by combining the original 'cats' array with the new cat
    const newCatsArray = [...cats, name];
    return newCatsArray;
  }
  function prependCat(name) {
    // Create a new array by combining the new cat with the original 'cats' array
    const newCatsArray = [name, ...cats];
    return newCatsArray;
  }
  function removeLastCat() {
    // Create a new array that excludes the last cat from the original 'cats' array
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
  function removeFirstCat() {
    // Create a new array that excludes the first cat from the original 'cats' array
    const newCatsArray = cats.slice(1);
    return newCatsArray;
  }