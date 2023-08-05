const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce(function (initialCount, batteryNumber) {
    return initialCount + batteryNumber; 
} ,0)
// Code your solution here
