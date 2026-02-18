Feature: Login page

    This Feature for test login 

    Scenario: Login Success
        Given open browser Test login
        When Fill Email as "admin@admin.com" on Login 
        And Fill Password as "admin123" on Login 
        And Click Submit button
        Then System can login Success
    
    Scenario: Fill Password wrong
        Given open browser Test login
        When Fill Email as "admin@admin.com" on Login 
        And Fill Password as "1234567" on Login 
        And Click Submit button
        Then System should show warning message "Bad credentials! Please try again! Make sure that you've registered."

    Scenario: Fill Email wrong
        Given open browser Test login
        When Fill Email as "admin123@admin.com" on Login 
        And Fill Password as "admin123" on Login 
        And Click Submit button
        Then System should show warning message "Bad credentials! Please try again! Make sure that you've registered."

    Scenario: Fill Email and Password wrong
        Given open browser Test login
        When Fill Email as "admin123@admin.com" on Login 
        And Fill Password as "123434567" on Login 
        And Click Submit button
        Then System should show warning message "Bad credentials! Please try again! Make sure that you've registered."