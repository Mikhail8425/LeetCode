var containsDuplicate = function(nums) {
  let newArr = nums.sort()
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] == newArr[i-1]) {
        return false
      }
    }
  return true
};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,4]))
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))