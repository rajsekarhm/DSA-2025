class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   var head: ListNode;
//   function makeListNodeString(node: ListNode | null): number[] {
//     const result: number[] = [];
//     var temp: ListNode | null = node;
//     while (temp) {
//       result.push(temp.val);
//       temp = temp.next;
//     }
//     return result;
//   }

//   function addNode(root: ListNode, value: string) {
//     var temp: ListNode = new ListNode(Number(value));
//     if (root == null) {
//       return temp;
//     }
//     var last: ListNode = root;
//     while (last.next != null) {
//       last = last.next;
//     }

//     last.next = temp;
//     return root;
//   }

//   const val1 = makeListNodeString(l1);
//   const val2 = makeListNodeString(l2);
//   const final =
//     Number(val1.reverse().join("")) + Number(val2.reverse().join(""));
//   const splited: string[] = final.toString().split("").reverse();
//   var head: ListNode = new ListNode(Number(splited[0]));
//   splited.shift();
//   splited.forEach((ele) => {
//     head = addNode(head, ele);
//   });
//   return head;
// }


function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while(l1 != null || l2 != null || carry != 0){
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        const sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum%10)
        current = current.next
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }
    return dummyHead.next
}