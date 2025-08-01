    var TimeMap = function () {
    this.answerSetMap = new Map();
    };

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    TimeMap.prototype.set = function (key, value, timestamp) {
    if (!this.answerSetMap.has(key)) {
        this.answerSetMap.set(key, []);
    }
    this.answerSetMap.get(key).push([value, timestamp]);
    };

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    TimeMap.prototype.get = function (key, timestamp) {
    const listOfValues = this.answerSetMap.get(key) || [];
        let left = 0;
        let right = listOfValues.length - 1;
        var result = "";
        while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (listOfValues[mid][1] <= timestamp) {
            result = listOfValues[mid][0];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        }
        return result;
    };

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
