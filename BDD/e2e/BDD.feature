Feature: BDD implementation using Cucumber

Scenario Outline: Registration to a sample angular application
Given User is navigating to sample angular application
When User need to click on Register link
Then User need to enter firstname as <firstName> and lastname as <lastName>
Then User need to enter username as <userName> and password as <password>
Then User need to click on register button
Then User verifies the <alertMessage> on successful registration

Examples:
    | firstName    | lastName |  userName   | password   |     alertMessage             |
    | 'poojitha'   | 'harsha' | 'poojitha'  | 'password' |   'Registration successful'  |

Scenario Outline: Login to the sample angular application
Given User is navigating to sample angular application
When User need to enter username as <userName> and password as <password>
Then User need to click on login button

Examples:
    |  userName   |  password  |
    | 'poojitha'  | 'password' |

Scenario Outline: Verifying the title and deleting the existing registered user
When User is verifying the title equals with <expectedTitle>
Then User deletes the existing registered user by clicking on Delete button

Examples:
    |  expectedTitle                                   |
    | 'Angular 7 User Registration and Login Example'  |

Scenario: Logout the sample angular application
Then User need to click on Logout button