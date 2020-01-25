import node from './node'

class LinkedList {
    head: node;
    count: number;

    constructor(element: any) {
        this.head = new node(element);
        this.count = 1;
    }
    push(element: any): LinkedList {
        const newNode = new node(element);;
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.count++;
        }
        return this;
    }
    insert(element: any, position: number) {
        if (position < 0 || position > this.count) throw new Error("position can't be smaller than zero or larger than size");
        const newNode: node = new node(element);
        if (position === 0) {
            const currentHead = this.head;
            this.head = newNode;
            newNode.next = currentHead;
        } else {
            let index: number = 1;
            let currentNode: node = this.head.next;
            let previousNode: node = this.head;
            while (position !== index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            previousNode.next = newNode;
            newNode.next = currentNode;
        }
        this.count++;
    }
    getElementAtIndex(index: number): node {
        if (index < 0 || index > this.count) return undefined;
        let currentPosition = 0;
        let currentNode = this.head;
        while (currentPosition !== index) {
            currentPosition++;
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    removeAt(index: number): void {
        if (index < 0 || index > this.count) throw new Error("this can't happen");

        const currentNode: node = this.getElementAtIndex(index);
        const previousNode: node = this.getElementAtIndex(index - 1);
        previousNode.next = currentNode.next;
        this.count--;
    };
    indexOf(element: any, cb: Function = (el1, el2) => el1 === el2): number {
        let index: number = 0;
        let current: node = this.head;
        while (index < this.count) {
            if (cb(element, current.element)) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    }
    remove(element: any, cb: Function = (el1, el2) => el1 === el2) {
        const index = this.indexOf(element, cb);
        this.removeAt(index);
    }

}