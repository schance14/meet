Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given a user hasn’t specified a number
        When a user does a search
        Then 32 events are shown as the default.

    Scenario: User can change the number of events displayed.
        Given a user can change the number of events displayed
        When a user does a search
        Then the specifc number of events should be shown.