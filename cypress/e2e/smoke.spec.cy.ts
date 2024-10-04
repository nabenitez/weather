describe("Smoke Test for Weather App", () => {
  it("should display the weather information for a city", () => {
    // Mock the geolocation API call
    cy.intercept("GET", "http://api.openweathermap.org/geo/1.0/direct*", {
      statusCode: 200,
      body: [
        {
          name: "London",
          lat: 51.5074,
          lon: -0.1278,
        },
      ],
    }).as("getGeoLocation");

    // Mock the weather API call
    cy.intercept("GET", "https://api.openweathermap.org/data/2.5/onecall*", {
      statusCode: 200,
      body: {
        lat: -22.911,
        lon: -43.2094,
        timezone: "America/Sao_Paulo",
        timezone_offset: -10800,
        hourly: [
          {
            dt: 1728018000,
            temp: 21.97,
            feels_like: 22.83,
            pressure: 1017,
            humidity: 100,
            dew_point: 21.97,
            uvi: 0,
            clouds: 75,
            visibility: 10000,
            wind_speed: 2.4,
            wind_deg: 179,
            wind_gust: 3.63,
            weather: [
              {
                id: 500,
                main: "Rain",
                description: "light rain",
                icon: "10n",
              },
            ],
            pop: 1,
            rain: {
              "1h": 0.57,
            },
          },
        ],
        daily: [
          {
            dt: 1728050400,
            sunrise: 1728030598,
            sunset: 1728075159,
            moonrise: 1728033660,
            moonset: 1728081180,
            moon_phase: 0.06,
            temp: {
              day: 20.89,
              min: 20.15,
              max: 22.1,
              night: 20.15,
              eve: 20.54,
              morn: 21.53,
            },
            feels_like: {
              day: 21.44,
              night: 20.52,
              eve: 21,
              morn: 22.22,
            },
            pressure: 1020,
            humidity: 92,
            dew_point: 19.61,
            wind_speed: 4.33,
            wind_deg: 134,
            wind_gust: 7.44,
            weather: [
              {
                id: 501,
                main: "Rain",
                description: "moderate rain",
                icon: "10d",
              },
            ],
            clouds: 100,
            pop: 1,
            rain: 14.64,
            uvi: 1.12,
          },
        ],
      },
    }).as("getWeatherData");

    // Visit the page that allows entering a city
    cy.visit("/"); // Adjust the URL based on your app's entry point

    // Simulate entering a city name and submitting the form
    // cy.get('input[name="city"]').type("London"); // Adjust the selector for the input field
    // cy.get('button[type="submit"]').click(); // Adjust the selector for the submit button

    // Wait for both API calls to complete
    cy.wait("@getGeoLocation");
    cy.wait("@getWeatherData");

    // Assert that the correct weather information is displayed on the UI
    cy.contains("Next hours").should("be.visible");
    cy.contains("22°").should("be.visible"); // Current temperature
    cy.contains("Moderate rain").should("be.visible"); // Weather description

    // Optionally, assert daily weather data
    cy.contains("Next 5 days").should("be.visible"); // Daily temperature
  });
});
