// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
     cats.push("Ralph");
} 

function destructivelyRemoveLastCat(){
    cats.pop(-1);
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    
    const newCats = cats.concat(name);
    
    return newCats;
  }

  function removeLastCat(name) {
    const newCats = cats.slice(0, -1);

    return  newCats;
  }

  function prependCat(name) {
    return [name, ...cats];
  }
  function removeFirstCat() {
    return cats.slice(1); 
  }
  
        
    