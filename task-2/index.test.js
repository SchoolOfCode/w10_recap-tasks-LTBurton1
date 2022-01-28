const { DateTime, Duration } = require("luxon");
const {
  getCurrentDate,
  getDurationObject,
  getDateFromString,
  addDurationToDate,
  addMinutesToDuration,
} = require("./index");

describe("getCurrentDate", () => {
  it("should return a date object", () => {
    const actualDate = getCurrentDate();
    expect(actualDate instanceof DateTime).toBe(true);
  });
  it("should return a todays date", () => {
    const actualDate = getCurrentDate();
    const testDate = DateTime.local();
    ["year", "month", "day", "weekday"].forEach((key) => {
      expect(actualDate[key]).toBe(testDate[key]);
    });
  });
});

describe("getDateFromString", () => {
  it("should return a date object", () => {
    const actualDate = getDateFromString("2017-05-15");
    expect(actualDate instanceof DateTime).toBe(true);
  });
  it("should return a the correct date object", () => {
    const date = getDateFromString("2017-05-15");
    expect(date.year).toBe(2017);
    expect(date.month).toBe(5);
    expect(date.day).toBe(15);
  });
});
describe("getDurationObject", () => {
  it("should return a duration object", () => {
    const actualDuration = getDurationObject({ hours: 10, minutes: 15 });
    expect(actualDuration instanceof Duration).toBe(true);
  });

  it("should return correct duration", () => {
    const tests = [
      { hours: 10, minutes: 15 },
      { hours: 1, minutes: 10, seconds: 11 },
      { days: 3, seconds: 12 },
    ];
    tests.forEach((data) => {
      const actualDuration = getDurationObject(data);
      Object.entries(data).forEach(([key, val]) => {
        expect(actualDuration[key]).toBe(val);
      });
    });
  });
});
describe("addMinutesToDuration", () => {
  it("should return a duration object", () => {
    const initialDuration = Duration.fromObject({ hours: 1 });
    const actualDuration = addMinutesToDuration(initialDuration, 22);
    expect(actualDuration instanceof Duration).toBe(true);
  });
  it("should return a new duration object", () => {
    const initialDuration = Duration.fromObject({ hours: 1 });
    const actualDuration = addMinutesToDuration(initialDuration, 22);
    expect(actualDuration).not.toBe(initialDuration);
  });

  it("should return duration with correct minutes added", () => {
    const initialDuration = Duration.fromObject({ hours: 1 });
    const actualDuration = addMinutesToDuration(initialDuration, 22);
    expect(actualDuration.minutes).toBe(22);
    expect(actualDuration.hours).toBe(1);
  });
});

describe("addDurationToDate", () => {
  it("should return a date object", () => {
    const duration = Duration.fromObject({ years: 100 });
    const date = DateTime.fromObject({ year: 1999, month: 1, day: 14 });
    const newDate = addDurationToDate(date, duration);
    expect(newDate instanceof DateTime).toBe(true);
  });

  it("should return date with correct minutes added", () => {
    const duration = Duration.fromObject({ years: 100 });
    const date = DateTime.fromObject({ year: 1999, month: 1, day: 14 });
    const newDate = addDurationToDate(date, duration);
    expect(newDate.year).toBe(2099);
    expect(newDate.month).toBe(1);
    expect(newDate.day).toBe(14);
  });
});
