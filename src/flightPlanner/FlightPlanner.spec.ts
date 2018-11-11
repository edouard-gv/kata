import { flightPlanner, FlightRequest, FlightPlanning } from "./FlightPlanner";

describe("Test of the test framework", function() {
  it.skip("Should fail", function() {
    expect(0).toEqual(1);
  });

  it("Should pass", function() {
    expect(0).toEqual(0);
  });
});

const flightRequest0: FlightRequest = {
  id: "0",
  flightStart: 0,
  flightDuration: 5,
  willingnessToPay: 1000
};

const flightRequest1: FlightRequest = {
  id: "1",
  flightStart: 3,
  flightDuration: 7,
  willingnessToPay: 1400
};

const flightRequest2: FlightRequest = {
  id: "2",
  flightStart: 5,
  flightDuration: 9,
  willingnessToPay: 700
};

const flightRequest3: FlightRequest = {
  id: "3",
  flightStart: 6,
  flightDuration: 9,
  willingnessToPay: 800
};

describe.only("Flight planner", function() {
  it.skip("Should sort flight requests", function() {
    const flightRequests: FlightRequest[] = [flightRequest1, flightRequest3, flightRequest2, flightRequest0];
    const sortedFlightRequests: FlightRequest[] = [flightRequest0, flightRequest1, flightRequest2, flightRequest3];
    expect(flightPlanner(flightRequests)).toEqual(sortedFlightRequests);
  });

  it.skip("Should filter on compatible flight requests given the first one after sort", function() {
    const flightRequests: FlightRequest[] = [flightRequest1, flightRequest3, flightRequest2, flightRequest0];
    const compatibleFlightRequests: FlightRequest[] = [flightRequest2, flightRequest3];
    expect(flightPlanner(flightRequests)).toEqual(compatibleFlightRequests);
  });

  it("Should find the best flight planning if there is no flight request", function() {
    const bestFlightPlanning: FlightPlanning = {
      flights: [],
      gain: 0
    };
    expect(flightPlanner([])).toEqual(bestFlightPlanning);
  });

  it("Should find the best flight planning if there is one flight request only", function() {
    const bestFlightPlanning: FlightPlanning = {
      flights: [flightRequest0],
      gain: 1000
    };
    expect(flightPlanner([flightRequest0])).toEqual(bestFlightPlanning);
  });

  it("Should find the best flight planning", function() {
    const flightRequests: FlightRequest[] = [flightRequest1, flightRequest3, flightRequest2, flightRequest0];
    const bestFlightPlanning: FlightPlanning = {
      flights: [flightRequest0, flightRequest3],
      gain: 1800
    };
    expect(flightPlanner(flightRequests)).toEqual(bestFlightPlanning);
  });
});
