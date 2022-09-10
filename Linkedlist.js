//Node Class
class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
};
//LinkedList class
class LinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    isEmpty(){
        return (this.length === 0)
    }
    insertAtBegin(value){
        if(this.head == null)
        {
            this.head = value;
        }
        let temp = new Node(value);
        this.head = temp;
        this.length++;
    }
    insertAtLast(value)
    {
        if(this.isEmpty())
        {
            this.insertAtBegin(value);
        }
        else{
            let temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            let t1 = new Node(value);
            temp.next = t1;
            this.length++;
        }
    }
    removeFromBegin()
    {
        if(this.isEmpty())
        {
            return;
        }
        else if(this.length == 1 )
        {
            this.head = null;
        }
        else{
            this.head = this.head.next;
        }
        this.length--;
    }
    removeFromLast(){
        if(this.isEmpty())
        {
            return;
        }
        else if(this.length === 1)
        {
            this.head = null;
        }
        else{
            let temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            this.next = null;
            this.length--;
        }
    }
    Lenght(){
        return this.length;
    }
    getFirstvalue(){
        if(!this.isEmpty())
        {
            return this.head.data;
        }
        return -9999;
    }
    getLastValue(){
        if(!this.isEmpty())
        {
            let temp = this.head;
            while(temp.next != null)
            {
                temp = temp.next;
            }
            return temp.data;
        }
    }
    printAll(){
        let temp = this.head;
        let str = "";
        while(temp)
        {
            str+=(temp.data + "\t" );
            temp = temp.next;
        }
        console.log(str + "\t");
    }
};



//Imaginary Main
l1 = new LinkedList();
l1.insertAtLast(5);
l1.insertAtBegin(1);
l1.insertAtBegin(2);
l1.insertAtBegin(3);
l1.insertAtBegin(4);
l1.insertAtBegin(9);
l1.removeFromLast();
l1.printAll();
console.log("Length : " + l1.Lenght());
console.log("head : " + l1.getFirstvalue());
console.log("Tail : " + l1.getLastValue());
