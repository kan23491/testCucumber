import { expect } from "chai";
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

When(/^Click Add to Cart of (Apple iPhone 13|Huawei Mate 20 Lite)$/i, (product) => {
    let position = product === "Apple iPhone 13"? "4" : "2";
    cy.get(`#prooood .shop-item:nth-child(${position}) button`).click()

    
});

And(/^Fill amount as (.+) for (.+)$/i, (amount, product) => {
    cy.get(
      `:nth-child(${product === "Apple iPhone 13"? 1 : 2}) > .cart-quantity > .cart-quantity-input`
    )
      .clear()
    .type(amount + "{enter}");
    
})

Then(/^The Total should show result correctly$/i, () => {
    cy.get(".cart-items > :nth-child(1) > .cart-price")
        .then((ApplePrice) => {
            const priceApple = ApplePrice.text().split("$")
             
            cy.get(':nth-child(1) > .cart-quantity > .cart-quantity-input').invoke("val")
                .then((appleQuantity) => {
                    const apple = appleQuantity
                
                cy.get(".cart-items > :nth-child(2) > .cart-price").then(
                    (HuaweiPrice) => {
                     const priceHuawei = HuaweiPrice.text().split("$");
                        
                    cy.get(
                        ":nth-child(2) > .cart-quantity > .cart-quantity-input"
                    )
                        .invoke("val")
                        .then((huaweiQuantity) => {  
                            const totalApple = priceApple[1] * appleQuantity;
                            const totalHuawei = priceHuawei[1] * huaweiQuantity;
                            
                            let resultTotal = totalApple + totalHuawei
                            
                            cy.get(".cart-total-price").invoke("text").then((total) => {
                                expect(total).to.equal(`$${resultTotal}`);
                                sessionStorage.setItem("total",resultTotal)
                            })
                        });
                    }
                );
            });  
      }); 
})

And(/^Select Country as "(.+)" on Shipping Details$/i, (value) => {
    cy.get("#countries_dropdown_menu").select(value)
    sessionStorage.setItem("country", value)

})
 
Then(/^System should show message submit success$/i, () => {

    cy.window().then((win) => {
        const street = win.sessionStorage.getItem("Street");
        const city = win.sessionStorage.getItem("city");
        const country = win.sessionStorage.getItem("country");
        const total = win.sessionStorage.getItem("total");
        console.log(street, city,country);
        

        cy.get("#message").invoke("text").then((message) => {
            console.log(message);
            
        expect(message).to.equal(
          `Congrats! Your order of  $2546.34  has been registered and will be shipped to 5878 little streets, Change mai - Thailand.`
        );
    })

    })
    
})

Then(/^System should show message submit failed$/i, () => {
    cy.get("select[name='country']").should(
      "have.css",
      "color",
      "rgb(255, 0, 0)"
    );
})