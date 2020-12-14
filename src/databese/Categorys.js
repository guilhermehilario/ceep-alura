export default class Categories {
    constructor(){
        this.categories = [];
        this._subscribers = [];
    }

    register(func) {
        this._subscribers.push(func);
    }

    notify(){
        this._subscribers.forEach(func => {
            func(this.categories);
        });
    }

    unsubscribe(func){
        console.log(this._subscribers.length)
        this._subscribers = this._subscribers.filter(f => f !== func);
        console.log(this._subscribers.length)
    }

    addCategory(newCategory) {
        // console.log(this.categories);
        this.categories.push(newCategory);
        this.notify();
    }
}