class MyClass {
  private log(text:string):void {
    console.log(text);
  }
}

function main() {
  const o = new MyClass();
  o.log("hi");
}
