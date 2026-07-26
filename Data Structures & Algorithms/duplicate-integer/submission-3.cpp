bool hasDuplicate(vector<int>& nums) {
    // Sort the vector in ascending order.
    // After sorting, any duplicate values will end up next to each other.
    // Time cost of this step: O(n log n)
    sort(nums.begin(), nums.end());
    
    // Loop through the sorted vector, comparing each element to its neighbor.
    // We stop at "size() - 1" so that "i + 1" never goes out of bounds
    // (otherwise the last iteration would try to access an invalid index).
    for (int i = 0; i < nums.size() - 1; i++) {
        
        // Since the array is sorted, duplicates must be adjacent.
        // If the current element equals the next one, we found a duplicate.
        if (nums[i] == nums[i + 1]) {
            return true;   // duplicate found, exit immediately
        }
    }
    
    // If we finish the loop without finding any matching neighbors,
    // there are no duplicates in the array.
    return false;
};