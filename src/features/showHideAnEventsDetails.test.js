import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("an event element is collapsed by default", () => {
      AppComponent = render(<App />);
    });
    when("a user does a search", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
    then("the event should stay collapsed while scrolling.", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see details.", ({ given, when, then }) => {
    let EventComponent;
    let allEvents;
    given("a user can expand an event to see details", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      expect(
        EventComponent.container.querySelector(".details")
      ).not.toBeInTheDocument();
    });
    when("a user clicks the expand button", async () => {
      const user = userEvent.setup();
      const showDetails = EventComponent.queryByText("show details");
      await user.click(showDetails);
    });
    then("event details should be shown.", () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
      expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let EventComponent;
    let allEvents;
    given("a user can collapse an event to hide details", async () => {
      allEvents = await getEvents();
      EventComponent = render(<Event event={allEvents[0]} />);
      const user = userEvent.setup();
      await user.click(EventComponent.queryByText("show details"));
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
    });
    when("a user clicks the collapse button", async () => {
      const hideDetails = EventComponent.queryByText("hide details");
      const user = userEvent.setup();
      await user.click(hideDetails);
    });
    then("the event details should become hidden.", () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).not.toBeInTheDocument();
      expect(
        EventComponent.queryByText("hide details")
      ).not.toBeInTheDocument();
    });
  });
});
