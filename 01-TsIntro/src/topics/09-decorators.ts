

function classDecorator(
    constructor: any
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }              
}  


class SuperClass {
    public MyProperty: string = "Hello";

    print() {
        console.log(this.MyProperty);
    }
}

