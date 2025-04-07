class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
       
        if (this.name.toLowerCase() === 'lion') {
            console.log("Sir həmişə sirdir")
        }
        else{
            console.log(this.name, this.age)
        }
    }
}

class AnimalsCategory {
    constructor(type) {
        this.type = type;
    }

    country() {
       
        if (this.type.toLowerCase() === "kenquru") {
            console.log("Afrika")
        } else if (this.type.toLowerCase() === "sir") {
            console.log("Azərbaycan")
        } else if (this.type.toLowerCase() === "akula") {
            console.log("okaenlar")
        } else {
           console.log("Bilinməyən ölkə")
        }
    }
}
let lion = new Animals("Lion", 5);
let dog = new Animals("Dog", 3);


lion.show();  


dog.show();   


let wildAnimal = new AnimalsCategory("akula");
let domesticAnimal = new AnimalsCategory("sir");


wildAnimal.country();  
domesticAnimal.country();  