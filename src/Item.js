class Item{
    
    
    static lastId = 0;

    constructor(text){
        this.text = text;
        this.id = (Item.lastId++)+(Math.random()*1000);
        this.done = false;
    }
}

export default Item