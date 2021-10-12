Feature: Verify To Do Scenarios
  Scenario: Navigate to To Do Page (Passing)
    Given I navigate to the to do page
    Then the to do entry input appears

  Scenario: Navigate to To Do Page (Failing)
    Given I navigate to the to do page
    Then the to do entry input is hidden