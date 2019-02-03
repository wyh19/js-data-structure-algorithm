function PriorityQueue() {
    let items = [];
    //构造一个数据，包含要添加到队列的元素 及其在队列中的优先级。
    function QueueElement(element, priority) { 
        this.element = element;
        //priority值越大，优先级越低
        this.priority = priority;
    }
    this.enqueue = function (element, priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        //队列越前面优先级越高，因此一旦判断新元素优先级更高，则立马插入并终止循环
        for (let i = 0; i < items.length; i++) {
            //如果优先级高，则在其前面添加
            if (queueElement.priority < items[i].priority) { 
                items.splice(i, 0, queueElement); 
                added = true;
                //完成插入则终止遍历
                break; 
            }
        }
        //如果遍历没有完成插入（可能队列为空，或者优先级都比要插入的值高），则直接在队尾插入
        if (!added) {
            items.push(queueElement); 
        }
    };
    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`);
        }
    };
    //其他方法和默认的Queue实现相同 
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("John", 3);
priorityQueue.enqueue("Jack", 2);
priorityQueue.enqueue("Camila", 2);
priorityQueue.enqueue("Lily", 1);
priorityQueue.print();