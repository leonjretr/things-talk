import {makeAutoObservable} from "mobx";

class DrawerStore {
    isOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpen() {
        this.isOpen = !this.isOpen;
    }
}

export default new DrawerStore();