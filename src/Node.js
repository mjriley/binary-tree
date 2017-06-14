export default class Node {
    constructor(value, left, right) {
        this.value = value;
        this.left = left || new Leaf();
        this.right = right || new Leaf();
    }

    addNode(value) {
        // if the given value == the current value, do nothing
        if (value === this.value) {
            return this;
        }

        // if the given value > the current value, return a new tree with this appended to the left tree
        if (value < this.value) {
            return new Node(this.value, this.left.addNode(value), this.right);
        } else {
            return new Node(this.value, this.left, this.right.addNode(value));
        }
    }

    getDepth() {
        return 1 + Math.max(this.left.getDepth(), this.right.getDepth());
    }

    toString() {
        return (
            this.left.toString() +
            ' ' +
            this.value +
            ' ' +
            this.right.toString()
        );
    }
}

export class Leaf {
    addNode(value) {
        return new Node(value);
    }

    toString() {
        return '';
    }

    getDepth() {
        return 0;
    }
}
