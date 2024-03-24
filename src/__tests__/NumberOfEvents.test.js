import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import { userEvent } from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });
  test("has an element with 'textbox' role ", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });
  test("the default value of events rendered is 32", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toHaveValue("32");
  });
  test("value in textbox changes accordingly to what a user types in it", async () => {
    const user = userEvent.setup();
    const numberOfEvents = NumberOfEventsComponent.queryByRole("textbox");
    await user.type(numberOfEvents, "{backspace}{backspace}10");
  });
});
