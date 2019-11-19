/********************************************************************************************************************
 * @Execution : default node : cmd>  stack.js
 * @Purpose : create stack and perform specified operations.
 * @description: To perform operations like push, pop and peak, stack.js contains all subfolders.
 * @overview : UTILITY(dataStructure) 
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
/*
This class contains a constructur which will be invoked every time top function is called. */
class Stack {
    //Constructor initalize top to -1
    constructor() {
        this.top = -1;
    }

    //StackArray is member function initalize a empty stack array 
    stackArray() {
        this.stackarr = [];
    }
    /*
     * @description:adding data to stack
     * @purpose: push is member function, which pushes elements into stack.
     * @param {data}, which has the information about data passed from user which has to be added to stack
     */
    push(element) {
        this.top += 1;
        this.stackarr[this.top] = element;
    }

    /*
     * @description:removing data to stack
     * @purpose: which removes the elements from the stack array and returns the deleted element
     * @param {data},takes no parameters
     */
    pop() {
        if (this.top === -1) {
            console.log("Stack under flow");

        }

        var ele = this.stackarr[this.top];
        this.top -= 1;
        return ele;
    }

    /*
     * @description:returns data at the top of the stack
     * @purpose: function returns the top item, but it will not delete the element and will not modify the stack
     * @param {data}, takes no parameter
     */

    peak() {
        if (this.top === -1) {
            return null;
        }
        return this.stackarr[this.top];
    }

    /*
     * @description:checks if the stack is empty
     * @purpose:tests to see if the stack is empty
     * @param {data}, takes no parameter
     */

    isEmpty() {
        if (this.top === -1) return true;
        else return false;
    }

    /*size -->function return number of elements in stack,takes no argumnet
    returns integer number.*/
    size() {
        if (this.isEmpty()) return 0;
        else return (this.top + 1);
    }


}
module.exports = Stack