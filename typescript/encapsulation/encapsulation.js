var MyClass = (function () {
    function MyClass() {
    }
    MyClass.prototype.log = function (text) {
        console.log(text);
    };
    return MyClass;
}());
function main() {
    var o = new MyClass();
    o.log("hi");
}
