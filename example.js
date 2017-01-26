import BST from './';

let pop = [20,2,10,200,3,5,7,1,10,50,100];

const bstExample = new BST();
pop.forEach((n) => {
  bstExample.addLeaf(n)  
})

console.log(bstExample);
