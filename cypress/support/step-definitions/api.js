import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
let requestBody
let apiResponse

When(/^Create a new employees with FirstName "(.+)" , LastName "(.+)", email "(.+)", dob "(.+)"$/i, (first, last, mail, dob) => {
  
  requestBody = {
  "dob": dob,
  "email": mail,
  "firstName": first,
  "id": 1,
  "lastName": last
}
  cy.request({
    method: "POST",
    url: "/api/v1/employees",
    failOnStatusCode: false, // close status fail case 404
    body: requestBody
  }).then((response) => {
    apiResponse = response;
  });
})

When(/^List Employees ID "(.+)"$/i, (id) => {
  cy.request({
    method: "GET",
    url: `/api/v1/employees/${id}`,
    failOnStatusCode: false
  }).then((response) => {
    apiResponse = response;
  });
});


Then(/^The response Status should be (.+)$/i, (code) => {
  expect(apiResponse.status).to.equal(parseInt(code));
  
})

And(/^The response message should be "(.+)"$/i, (message) => {
  const messageError =
    message === "must be a well-formed email address"
      ? apiResponse.body.errors[0].defaultMessage
      : apiResponse.body;
    expect(messageError).to.equal(message);
  
})


And(
  /^The response body should be FirstName "(.+)" and LastName "(.+)"$/i,
  (first,last) => {
    expect(apiResponse.body.firstName).to.equal(first)
    expect(apiResponse.body.lastName).to.equal(last)
  }
);