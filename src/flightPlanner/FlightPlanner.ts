export interface FlightRequest {
  id: string;
  flightStart: number;
  flightDuration: number;
  willingnessToPay: number;
}

export interface FlightPlanning {
  flights: FlightRequest[];
  gain: number;
}

export function flightPlanner(flightRequests: FlightRequest[]): FlightPlanning {
  return findBestFlightPlanning(sortRequestsByFlightStart(flightRequests));
}

function sortRequestsByFlightStart(flightRequests: FlightRequest[]): FlightRequest[] {
  return flightRequests
    .slice()
    .sort((request0: FlightRequest, request1: FlightRequest) => request0.flightStart - request1.flightStart);
}

function findBestFlightPlanning(flights: FlightRequest[]): FlightPlanning {
  const [firstFlight, ...remainingFlights] = flights;
  if (!firstFlight) {
    return makeEmptyFlightPlanning();
  }
  if (remainingFlights.length === 0) {
    return makePlanningOfSingleFlight(firstFlight);
  }
  const flightPlanningWithoutFirstFlight: FlightPlanning = makeFlightPlanningWithRemainingFlights(remainingFlights);
  const flightPlanningWithFirstFlight: FlightPlanning = makeFlightPlanningWithFlightAndRemainingFlights(
    firstFlight,
    remainingFlights
  );
  return flightPlanningWithoutFirstFlight.gain > flightPlanningWithFirstFlight.gain
    ? flightPlanningWithoutFirstFlight
    : flightPlanningWithFirstFlight;
}

function makeEmptyFlightPlanning(): FlightPlanning {
  return {
    flights: [],
    gain: 0
  };
}

function makePlanningOfSingleFlight(flight: FlightRequest): FlightPlanning {
  return {
    flights: [flight],
    gain: flight.willingnessToPay
  };
}

function makeFlightPlanningWithRemainingFlights(flights: FlightRequest[]): FlightPlanning {
  return findBestFlightPlanning(flights);
}

function makeFlightPlanningWithFlightAndRemainingFlights(
  firstFlight: FlightRequest,
  remainingFlights: FlightRequest[]
): FlightPlanning {
  const flightPlanningWithRemainingFlights: FlightPlanning = findBestFlightPlanning(
    filterOnCompatibleFlightRequests(firstFlight, remainingFlights)
  );
  return {
    flights: [firstFlight, ...flightPlanningWithRemainingFlights.flights],
    gain: firstFlight.willingnessToPay + flightPlanningWithRemainingFlights.gain
  };
}

function filterOnCompatibleFlightRequests(
  { flightStart, flightDuration }: FlightRequest,
  flightRequests: FlightRequest[]
): FlightRequest[] {
  const flightEnd: number = flightStart + flightDuration;
  return flightRequests.filter(({ flightStart }: FlightRequest) => flightStart >= flightEnd);
}
