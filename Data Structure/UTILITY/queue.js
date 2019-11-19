/********************************************************************************************************************
 * @Execution : default node : cmd>  queue.js
 * @Purpose : create linked list and perform specified operations.
 * @description: To perform operations like adding, removing, sorting and searching on a linkedList.ile contains all subfolders
 * @overview : UTILITY(dataStructure) 
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 08-august-2019
 *******************************************************************************************************************/
/*
This class contains all the functions of queue */
class singleQueue {
    constructor() {
        this.rear = 0
        this.front = 0

    }
    /*
     * @description:creates an empty queue array
     * @purpose:it initializes queue
     * @param {data},no parameters required
     */
    Queue() {

        this.queue = []
    }
    /*
     * @description:adding data to queue
     * @purpose:queue array is invoked and data is added to the queue 
     * @param {data}, which has the information about data passed from user which has to added to queue
     */
    enqueue(data) {
        this.queue[(this.rear)] = data
        this.rear = this.rear + 1
        return data
    }
    /*
     * @description:removing data from queue
     * @purpose: to pop the first element that was pushed into queue
     * @param {data}, which has the information about data passed from user which has to be popped from linkedlist
     */
    dequeue() {
        let data = null;
        if (!this.isempty()) {
            data = this.queue[(this.front)]
            this.front = this.front + 1
        }
        return data;
    }
    /*
     * @description:check if the queue is empty
     * @purpose:if the queue is empty return true or return false 
     * @param {data},no parammeters passed
     */
    isempty() {
        if (this.front == this.rear)
            return true
        else
            return false

    }
    /*
     * @description:display data
     * @purpose: to display the contents of the queue 
     * @param {data}, no parammeters passed
     */
    disp() {
        if (this.isempty()) {
            console.log("empty")
        } else {
            this.queue.slice(this.front, this.rear).forEach(element => {
                console.log(element)
            });
        }
    }

}
module.exports = singleQueue