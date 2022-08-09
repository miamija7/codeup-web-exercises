// TESTS
console.log("Passed 'returns valid mileage': " + getCarTelemetry_GivenValidCar_ReturnsMileage());

// AC-1: given a valid car, returns the mileage of that car
function getCarTelemetry_GivenValidCar_ReturnsMileage(){
    // Arrange
    // Gather all the data, and any setup needed
    const car = {
        mileage: 67922
    }

    const expectedMileage = 67922;

    // Act
    // Execute testable code and store results as needed
    const actualMileage = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return actualMileage === expectedMileage;
}

// AC-2: given no mileage, returns a helpful message



// ACTUAL CODE
function getCarTelemetry(carObj){
    return carObj.mileage;

}