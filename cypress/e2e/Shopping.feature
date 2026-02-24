Feature: Shopping

     this feature is test case shopping in the web

     Scenario: buy product apple iphone 13 and Huawei 
        Given open browser Test login
        When Fill Email as "admin@admin.com" on Login 
        And Fill Password as "admin123" on Login 
        And Click Submit button
        
        When Click Add to Cart of Apple iPhone 13
        And Fill amount as 2 for Apple iPhone 13 
        And Click Add to Cart of Huawei Mate 20 Lite
        And Fill amount as 3 for Huawei Mate 20 Lite
        Then The Total should show result correctly
        And Click Proceed to checkout button

    Scenario:submit order is success
        Given open browser Test login
        When Fill Email as "admin@admin.com" on Login 
        And Fill Password as "admin123" on Login 
        And Click Submit button
        
        When Click Add to Cart of Apple iPhone 13
        And Fill amount as 2 for Apple iPhone 13 
        And Click Add to Cart of Huawei Mate 20 Lite
        And Fill amount as 3 for Huawei Mate 20 Lite
        Then The Total should show result correctly
        And Click Proceed to checkout button
        
        When Fill Phone number as "0899999999" on Shipping Details
        And Fill Street as "5878 little streets" on Shipping Details
        And Fill City as "Change mai" on Shipping Details
        And Select Country as "Thailand" on Shipping Details
        And Click Submit Order button
        Then System should show message submit success

    Scenario: Submit order is failed
        Given open browser Test login
        When Fill Email as "admin@admin.com" on Login 
        And Fill Password as "admin123" on Login 
        And Click Submit button
        
        When Click Add to Cart of Apple iPhone 13
        And Fill amount as 2 for Apple iPhone 13 
        And Click Add to Cart of Huawei Mate 20 Lite
        And Fill amount as 3 for Huawei Mate 20 Lite
        Then The Total should show result correctly
        And Click Proceed to checkout button
        
        When Fill Phone number as "0899999999" on Shipping Details
        And Fill Street as "5878 little streets" on Shipping Details
        And Click Submit Order button
        Then System should show message submit failed