// TESTS

testRunner();
function testRunner() {
    console.log("Passed 'returns valid mileage': " + getCarTelemetry_GivenValidCar_ReturnsMileage());
    console.log("Passed 'returns string message': " + getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage());
    console.log("Passed 'returns string message for non-numeric': " + getCarTelemetry_GivenNonNumericString_ReturnsHelpfulMessage());
    console.log("Passed 'returns string message for boolean': " + getCarTelemetry_GivenNonNumericBoolean_ReturnsHelpfulMessage());
    console.log("Passed 'returns valid mileage for decimal': " + getCarTelemetry_GivenDecimalMileage_ReturnOneDecimal());


}

// AC-1: given a valid car, returns the mileage of that car
function getCarTelemetry_GivenValidCar_ReturnsMileage() {
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
function getCarTelemetry_GivenUndefinedMileage_ReturnsStringMessage() {
    // Arrange
    const car = {}
    // Act
    // Execute testable code and store results as needed
    const message = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return typeof message === "string";
}

// AC-3: given any non-valid mileage (numbers and numerical strings are valid), returns a helpful message
function getCarTelemetry_GivenNonNumericString_ReturnsHelpfulMessage() {
    // Arrange
    const car = {
        mileage: "asdfjh"
    }
    // Act
    // Execute testable code and store results as needed
    const message = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return message === "No mileage provided...";
}
function getCarTelemetry_GivenNonNumericBoolean_ReturnsHelpfulMessage() {
    // Arrange
    const car = {
        mileage: true
    }
    // Act
    // Execute testable code and store results as needed
    const message = getCarTelemetry(car);

    // Assert
    // Test the actual output of code against the expected output
    return message === "No mileage provided...";
}

// AC-4: given a numeric with more than one decimal place, returns a mileage with only one decimal place
function getCarTelemetry_GivenDecimalMileage_ReturnOneDecimal(){
    // Arrange
    const car = {
        mileage: 77777.3245987
    }
    const expectedMileage = 77777.3;

    // Act
    const message = getCarTelemetry(car);

    // Assert
    return message === expectedMileage;
}


// ACTUAL CODE
function getCarTelemetry(carObj){
    return parseFloat(carObj.mileage) ? Math.round(carObj.mileage * 10)/10 : "No mileage provided...";
}


// REMEMBER
// 1. write the test
//      a. maybe start with a nonsensical string as the mileage value
// 2. modify the code
// 3. run all the tests including your new test
// 4. repeat all steps until all cases are covered and tests pass
//      a. you probably will need a few test functions for this one
//      b. nonsense string, another for a boolean, and any others you can think of
