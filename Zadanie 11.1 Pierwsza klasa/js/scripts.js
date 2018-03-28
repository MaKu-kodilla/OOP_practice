// scripts.js
var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungGalaxyS6 = new Phone("Samsung", 2100, "black");
var onePlusOne = new Phone("One Plus", 1700, "gold");

function Phone (brand, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + " price is " + this.price + " and the color is " + this.color + ".");
}

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();

// diffrent method

var Phone = {
    brand: "Huaweii",
    model: "P20 Pro",
    price: 3500,
    color: "white",
    isAvaliable: true,
        Description: function () {
            console.log(this.brand + " " + this.model + " Price: " + this.price + " Color: " + this.color + "." );
        }
}

Phone.Description();