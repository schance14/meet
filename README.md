# Meet-Up
## Project Description:
Meet-up is a serverless, progressive web application, that gives its users a way to search for upcoming events by city to meet people and find interesting experiences.
Meet-up is built with React and uses the test driven development technique to deliver high quality code.

### User Stories: 
Feature 2: Show/Hide Event Details
- As a user, I should be able to show/hide event details so that I can choose which event details I want to look at.
Feature 3: Specify Number of Events
- As a user, I should be able to specify a number of events so that I can see a certain range of events happening in my particular region.
Feature 4: Use the App When Offline
- As a user, I should be able to use the app when offline so that I can see event details at anytime.
Feature 5: Add an App Shortcut to the Home Screen
- As a user, I should be able to add a, app shortcut to the homescreen so that I can access app information quicker and easier.
Feature 6: Display Charts Visualizing Event Details
- As a user, I should be able to see charts visualizing event details, so that I can see real data on events happening in a specific area.

### Gherkin's Syntax
Feature 2- 
scenario 1: Given an event element is collapsed by default, when a user does a search, then the event should stay collapsed while scrolling.
scenario 2: Given a user can expand an event to see details, when a user clicks the expand button, then event details should be shown.
scenario 3: Given a user can collapse an event to hide details, when a user clicks the collapse button, the event details should become hidden.

Feature 3- 
scenario 1: Given a user hasn’t specified a number, when a user does a search, then 32 events are shown as the default. 
scenario 2: Given a user can change the number of events displayed, when a user does a search, then the specifc number of events should be shown.

Feature 4-
scenario 1: Given the app show cached data, when there’s no internet connection, then the user should be able to still use certain features.
scenario 2: Given the app show error, when user changes search settings, then the user cannot change those features when offline.

Feature 5-
scenario 1: Given the user can install the meet app as a shortcut, when on their device home screen, then the shortcut should work to automatically take them to the app.

Feature 6-
scenario 1: Given a chart can show the upcoming events in each city, when a user searches for a city, then the user should see the chart with the number of events by city. 
