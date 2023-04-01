class Breakfast{
    #food;
    constructor(food,drink){
        this.#food= food;
        this.drink=drink;
    }
}
class Lunch{
     constructor(salad,soup,drink){
        this.salad=salad;
        this.drink=drink;
        this.soup=soup;
    }

}

class Dinner{
    #dessert;
    constructor(dessert,salad,soup,entree){
        this.#dessert=dessert;
        this.salad=salad;
        this.soup=soup;
        this.entree=entree;
    }
}
