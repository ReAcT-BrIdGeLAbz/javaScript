/********************************************************************************************************************
 * @Execution : default node : cmd>  linkedList.js
 * @Purpose : create linked list and perform specified operations.
 * @description: To perform operations like adding, removing, sorting and searching on a linkedList.js contains all subfolders
 * @overview : UTILITY(dataStructure) 
 * @author : kanakalakshmi <kanaka171996@gmail.com>
 * @version : 1.0
 * @since : 06-august-2019
 *******************************************************************************************************************/
/*
This class contains a constructur which will be invoked every time insert function is called.
It contains data and next members   */
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
/*creating class linkedlist and member functions to add,delete,display,sort the nodes
Class linkedlist contains a constructur which is initalized to null.
*/
class linkedList {
    constructor() {
        this.head = null
    }
    /*
     * @description:adding data to linkedlist
     * @purpose: to create a node each time and add the data to it and link to the next node
     * @param {data}, which has the information about data passed from user which has to added to linkedlist
     */
    add(data) {
        let newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
            return;
        } else {
            this.temp = this.head;

            while (this.temp.next != null) {
                this.temp = this.temp.next

            }
            this.temp.next = newNode
            return true;
        }
    }
    /*
     * @description:removing data to linkedlist
     * @purpose: to derefer a node and link the previous node to next node
     * @param {data}, which has the information about data passed from user which has to be deleted from linkedlist
     */
    remove(data) {

        if (this.head == null) {
            console.log("empty")
            return
        }
        this.current = this.head;
        this.temp = this.head;
        while (this.temp != null && this.temp.data != data) {
            this.current = this.temp;
            this.temp = this.temp.next;
        }

        if (this.temp.data == data)
            this.current.next = this.temp.next;
    }
    /*
     * @description:display data in linkedlist
     * @purpose:to display the data that is present in node
     */
    disp() {
        this.temp = this.head
        while (this.temp != null) {
            console.log(this.temp.data)
            this.temp = this.temp.next
        }
        // console.log(this.temp.data)

    }
    /*
     * @description:sort data to linkedlist
     * @purpose: sort the data in linked list in ascending order
     */
    sortData() {
        if (this.head == null) {
            console.log("empty");
            return;
        } else {
            this.temp = this.head;
            while (this.temp !== null) {
                this.current = this.temp.next;
                while (this.current !== null) {
                    if ((this.temp.data) > (this.current.data)) {
                        this.temp1 = this.temp.data;
                        this.temp.data = this.current.data;
                        this.current.data = this.temp1;
                    }
                    this.current = this.current.next;
                }
                this.temp = this.temp.next;
            }

        }
    }
    /*
     * @description:search data in linkedlist
     * @purpose: search the data in the linked list if it is present it is derefered from the linkedList else it is added to the linkedList
     * @param {data}, which has the information about data from user which has to be deleted or added accordingly
     */
    search(key) {
        this.temp = this.head;
        while (this.temp != null) {
            if (this.temp.data == key) {
                console.log("key found");
                console.log(key, "  Deleted from list");
                this.remove(key);
                //this.sortData()
                this.disp()
                //if (this.temp != null)
                //this.sortData();
                return;
            }
            this.temp = this.temp.next;
        }
        if (this.temp == null) {
            console.log("key not found");
            this.add(key);
            //this.sortData()
            this.disp()
        }
    }
    getArray() {
        if (this.head == null)
            return
        let ar = []
        this.temp = this.head
        while (this.temp != null) {
            ar.push(this.temp.data)
            this.temp = this.temp.next
        }
        return ar
    }

}
//class is exported
module.exports = linkedList