Feature: Show/Hide Event Details
    Scenario: An event element is collapsed by default.
        Given an event element is collapsed by default
        When a user does a search
        Then the event should stay collapsed while scrolling.

    Scenario:  User can expand an event to see details.
        Given a user can expand an event to see details
        When a user clicks the expand button
        Then event details should be shown.
    Scenario: User can collapse an event to hide details.
        Given a user can collapse an event to hide details
        When a user clicks the collapse button
        Then the event details should become hidden.