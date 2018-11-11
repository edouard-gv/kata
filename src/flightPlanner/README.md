# Flight Planner

ABEAS Corp is a little company with only one plane. ABEAS Corp’s customers ask for this plane to help them sometimes. They send rent request with start time, travel duration, and a price they will paid. You could help ABEAS Corp by finding the best request combination to maximize gain.

Example of flight requests (hours range from 0 to 23, durations are expressed in hours)

```JSON
[
    {
        "id": 0,
        "client": "FooBar & Co.",
        "flightStart": 5,
        "flightDuration": 9,
        "willingnessToPay": 700
    },
    {
        "id": 1,
        "client": "ABC Inc.",
        "flightStart": 0,
        "flightDuration": 5,
        "willingnessToPay": 1000
    },
    {
        "id": 2,
        "client": "ABC Inc.",
        "flightStart": 6,
        "flightDuration": 9,
        "willingnessToPay": 800
    },
    {
        "id": 3,
        "client": "Acme Corp.",
        "flightStart": 3,
        "flightDuration": 7,
        "willingnessToPay": 1400
    },
]
```

The best combination here is flights `1` and `2` with a gain of 1 800 €.
