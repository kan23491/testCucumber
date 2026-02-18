Feature: Api Employees

    This feature for test Api

    Scenario: Create employees
         When Create a new employees with FirstName "John" , LastName "Doe", email "JohnDoe@test.co.th", dob "1998-02-18"
         Then The response Status should be 201 
         
     Scenario: Can not Create Employees
          When Create a new employees with FirstName "John" , LastName "Doe", email "JohnDoe", dob "1998-02-18"
          Then The response Status should be 400 
          And The response message should be "must be a well-formed email address"

     Scenario: Get List Employees
          When List Employees ID "1"
          Then The response Status should be 200
          And The response body should be FirstName "John" and LastName "Doe"

     Scenario: Can not Get List Employees
          When List Employees ID "00"
          Then The response Status should be 404
          And The response message should be "Employee not found with ID 0" 
