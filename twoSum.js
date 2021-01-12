function twoSum(num, target) {
    let hashMap = new Map();
    for (let i = 0; i < num.length; i++) {
        let targetValue = target - num[i];
        if (hashMap.has(targetValue)) {
            return [hashMap.get(targetValue), i];
        }
        else {
            hashMap.set(num[i], i);
        }
    }
    return [];
}