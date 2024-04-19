import phildaefia_img from '../img/rolle.img/Vegetarian-Sushi-Rolls-9707-I-1.jpg'

class Rolle {
    constructor( name, price, currency, img, ingredients, id,category, weight  ) {
        this.id          = id
        this.name        = name
        this.ingredients = ingredients
        this.weight      = weight
        this.price       = price
        this.currency    = currency
        this.category    = category
        this.img         = img
    }
}

let phildaefia = new Rolle(
  "Phildaefia",
  50,
  "MDL",
  phildaefia_img, 
  "Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
  1,
  "rolle",
  100
);

let phildaefia2 = new Rolle(
  "Canada",
  250,
  "MDL",
  phildaefia_img, 
  "Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
  2,
  "rolle",
  200
);

let phildaefia3 = new Rolle(
  "California",
  350,
  "MDL",
  phildaefia_img, 
  "Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
  3,
  "rolle",
  300
);

let phildaefia4 = new Rolle(
  "Takara",
  450,
  "MDL",
  phildaefia_img, 
  "Orez, nori, castraveti, avocado, creveti,tobiko, tamago, maioneza japoneza.",
  4,
  "rolle",
  400
);


let rolleList = [phildaefia, phildaefia2, phildaefia3, phildaefia4 ];

export  {rolleList}