function Queue() {
    let items = [];

    this.enqueue = function (element) {
        items.push(element);
    }

    this.dequeue = function () {
        return items.shift();
    }
    this.front = function () {
        return items[0];
    }
    this.isEmpty = function () {
        return items.length == 0;
    }
    this.size = function(){
        return items.length
    }
    this.print = function () {
        console.log(items.toString());
    }

}


function hotPotato(nameList, num) {
    let queue = new Queue(); 
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]); 
    }
    let eliminated = '';
    while (queue.size() > 1) {
        //循环队列内部元素
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); 
        }
        //循环结束，抛出一个，认为是被淘汰者
        eliminated = queue.dequeue();
        console.log(eliminated + '在击鼓传花游戏中被淘汰。');
    }
    //最后获胜者
    return queue.dequeue();
}
let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']; 
let winner = hotPotato(names, 7); 
console.log('The winner is: ' + winner);