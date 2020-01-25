"use strict";
exports.__esModule = true;
var node_1 = require("./node");
var LinkedList = /** @class */ (function () {
    function LinkedList() {
    }
    LinkedList.prototype.push = function (element) {
        var newNode = new node_1["default"](element);
        ;
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            this.count++;
        }
        return this;
    };
    LinkedList.prototype.insert = function (element, position) {
        if (position < 0 || position > this.count)
            throw new Error("position can't be smaller than zero or larger than size");
        var newNode = new node_1["default"](element);
        if (position === 0) {
            var currentHead = this.head;
            this.head = newNode;
            newNode.next = currentHead;
        }
        else {
            var index = 1;
            var currentNode = this.head.next;
            var previousNode = this.head;
            while (position !== index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                index++;
            }
            previousNode.next = newNode;
            newNode.next = currentNode;
        }
        this.count++;
    };
    LinkedList.prototype.getElementAtIndex = function (index) {
        if (index < 0 || index > this.count)
            return undefined;
        var currentPosition = 0;
        var currentNode = this.head;
        while (currentPosition !== index) {
            currentPosition++;
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.removeAt = function (index) {
        if (index < 0 || index > this.count)
            throw new Error("this can't happen");
        var currentNode = this.getElementAtIndex(index);
        var previousNode = this.getElementAtIndex(index - 1);
        previousNode.next = currentNode.next;
        this.count--;
    };
    ;
    LinkedList.prototype.indexOf = function (element, cb) {
        if (cb === void 0) { cb = function (el1, el2) { return el1 === el2; }; }
        var index = 0;
        var current = this.head;
        while (index < this.count) {
            if (cb(element, current.element)) {
                return index;
            }
            current = current.next;
            index++;
        }
        return -1;
    };
    LinkedList.prototype.remove = function (element, cb) {
        if (cb === void 0) { cb = function (el1, el2) { return el1 === el2; }; }
        var index = this.indexOf(element, cb);
        this.removeAt(index);
    };
    LinkedList.prototype.isEmpty = function () {
        return this.size() === 0;
    };
    LinkedList.prototype.size = function () {
        return this.count;
    };
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.clear = function () {
        this.head = undefined;
        this.count = 0;
    };
    return LinkedList;
}());
