import { render } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Event from "../components/Event";
import { getEvents } from "../api";

describe("<Event /> component", () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });
  test("has element for event title", () => {
    expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument;
  });
  test("has element for event start time", () => {
    expect(EventComponent.queryByText(allEvents[0].created)).toBeInTheDocument;
  });
  test("renders event location", () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });
  test("renders event details button with the title (show details)", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });
  test("events details are hidden by default", () => {
    expect(
      EventComponent.container.querySelector(".details")
    ).not.toBeInTheDocument();
  });
  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    await user.click(button, "Show Details");
    const details = EventComponent.container.querySelector(".details");
    expect(details).toBeInTheDocument();
  });

  test("hides the details section when the user clicks the 'hide details' button", async () => {
    const user = userEvent.setup();
    const button = EventComponent.queryByRole("button");
    await user.click(button, "Hide Details");
    const details = EventComponent.container.querySelector("details");
    expect(details).not.toBeInTheDocument();
  });
});
