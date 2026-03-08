import {makeAutoObservable} from "mobx";

class DrawerStore {
    isOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setIsOpen(isOpen: boolean) {
        this.isOpen = !isOpen;
    }
}

export default new DrawerStore();