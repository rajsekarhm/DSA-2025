/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let heapSize = nums.length;
    function swap(i, j) {
        const temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    function heapify(i, heapSize) {
        let largest = i;
        const left = 2 * i + 1
        const right = 2 * i + 2;

        if (left < heapSize && nums[left] > nums[largest]) {
            largest = left;
        }

        if (right < heapSize && nums[right] > nums[largest]) {
            largest = right;
        }

        if (largest !== i) {
            swap(i, largest);
            heapify(largest, heapSize);
        }
    }

    // Build the max heap by heapifying from the last parent node downward.
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        heapify(i, heapSize);
    }

    // Extract the max element (the root) k-1 times.
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(0, i);         // Move current max to the end.
        heapSize--;         // Reduce the heap size.
        heapify(0, heapSize); // Restore the heap property.
    }
    console.log(nums)
    return nums[0];
};

findKthLargest([3,2,3,1,2,4,5,5,6],4)
