function linkedListnode(val, next){
    this.val = (val===undefined ? 0:val)
    this.next = (next===undefined ? null:next)
}

let addTwoNumbers = function(l1, l2){

    dummy = new linkedListnode(0);
    current = dummy;
    carry = 0;

    while(l1!==null || l2!== null || carry > 0){

        let x = (l1 !== null ? l1.val:0)

        let y = (l2 !== null ? l2.val:0)

        let sum = x+y+carry;

        carry = Math.floor(sum/10);
        current.next = new linkedListnode(sum % 10);
        current = current.next
    
        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;    
    
    };
 return dummy.next;   
}


