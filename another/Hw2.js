/**
 * @param {number[]} nums
 * @return {number[]}
 */
function findErrorNums(nums) {
    const n = nums.length;
    
    const expectedSum = (n * (n + 1)) / 2;
    const expectedSqSum = (n * (n + 1) * (2 * n + 1)) / 6;
    
    let actualSum = 0;
    let actualSqSum = 0;
        
    for (const num of nums) {
        actualSum += num;
        actualSqSum += num * num;
    }
    const diff1 = actualSum - expectedSum;
    const diff2 = actualSqSum - expectedSqSum;
    const sumXY = diff2 / diff1;
    
    const duplicate = (diff1 + sumXY) / 2;
    const missing = sumXY - duplicate;
    
    return [duplicate, missing];
}