class BST {
  constructor() {
    this.root = null;  
  }
  
  addLeaf(value) {
    this.addLeafP(value, this.root)
  }
  
  addLeafP(value, node) {
    if(this.root == null){
      this.root = this.createLeaf(value);
    } else if(value < node.value){
      if(node.left != null) {
        this.addLeafP(value, node.left)
      } else {
        node.left = this.createLeaf(value)
      }
    } else if(value > node.value) {
      if(node.right != null) {
        this.addLeafP(value, node.right)
      } else  {
        node.right = this.createLeaf(value);
      }
    } else {
      console.log('VALOR IGUAL');
    }
  }
  
  createLeaf(value) {
    return new node(value);
  }
  
  returnNode(value, node = this.root) {
    if(node!= null) {
      if(node.value == value) {
        console.log('node founded:', node);
      } else {
        if(value < node.value) {
          this.returnNode(value, node.left)
        } else {
          this.returnNode(value, node.right)
        }
      }
    }
  }
  
  printTransversal(node = this.root) {
    if(this.root) {
      if(node.left) {
        this.printTransversal(node.left)
      };
      console.log(node.value);
      if(node.right) {
        this.printTransversal(node.right);
      }
    } else {
      console.log('Empty tree');
    }
  }
}

class node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
