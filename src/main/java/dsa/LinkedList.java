package dsa;

import com.sun.jdi.connect.spi.TransportService;

import java.sql.Array;
import java.util.*;
import java.util.stream.IntStream;

public class LinkedList{
    ListNode head;
    LinkedList(int val){
        this.head = new ListNode();
        this.head.val = val;
        this.head.next = null;
    }
    public class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val) { this.val = val; }
        ListNode(int val, ListNode next) { this.val = val; this.next = next; }
    }

    public  ListNode addNode(Object val,ListNode refer){
        System.out.println((Integer) val);
        ListNode newNode = new ListNode((Integer) val);
        refer.next =  newNode;
        return  refer;
    }

    public  void print(ListNode node){
        ListNode temp = node;
        while(temp.next != null){
            System.out.println(temp.val);
            temp = temp.next;
        }
    }

    public ListNode createLinkedList(int[] arr) {
        if (arr == null || arr.length == 0) {
            return null; // Return null for empty or invalid input
        }

        // Create the head of the linked list
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;

        // Iterate through the array and create nodes
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }

        return head; // Return the head of the linked list
    }


    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        List arey = new ArrayList<>();
        ListNode head = new ListNode();
        if(lists.length == 0){
            return  new ListNode();
        }
        for(ListNode node : lists){
            ListNode temp = node;
            queue.add(temp.val);
            arey.add(temp.val);
            while(temp.next != null){
                temp = temp.next;
                queue.add(temp.val);
                arey.add(temp.val);
            }
        }
        Collections.sort(arey);
        IntStream intStream = arey.stream().mapToInt(i -> (int) i);
        int[] array = intStream.toArray();
        return createLinkedList(  array);
    }



    public  void run(){
        LinkedList list = new LinkedList(1);
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        queue.add(6);
//        queue.add(1);
//        queue.add(2);
//        queue.add(4);
//        System.out.println(queue);
        ListNode[] lists = new ListNode[3];
        lists[0] = new ListNode(1, new ListNode(4, new ListNode(5)));
        lists[1] = new ListNode(1, new ListNode(3, new ListNode(4)));
        lists[2] = new ListNode(2, new ListNode(6));
        list.print(list.mergeKLists(lists));
    }

    public  static  void main(String[] ar){
        LinkedList list = new LinkedList(1);
        list.run();
    }
}