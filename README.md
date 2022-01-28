# Week 11 Recap Tasks

### Task 1 - React Context

Create a color context and provide your app with a color, and a function to set that color. The color setter component should set the color, and the color viewer should display the color.

**Bonus**

- Make this app look good
- Add a new feature.

## Using New JS Libraries

### Task 2 - Luxon

Luxon is a library for handling dates and times.

In `task-2/index.js`, research and use `luxon` (https://www.npmjs.com/package/luxon) to complete the following functions:

- `getCurrentDate` should return a DateTime object with the date at the moment the function is called.
- `getDateFromString` should return a DateTime object from an iso str.ing
- `getDurationObject` should return a Duration object from the data handed in.
- `addMinutesToDuration` should add the specified minutes to the Duration object and return a new Duration object.
- `addDurationToDate` should add a Duration object to a DateTime object and return a new DateTime object.

**Bonus**

Find a feature of the Luxon library that we havent yet used. Write a function that uses that feature, and write a test in `task-2/index.test.js` to show that feature is working.

### Task 3 - SuperTest

SuperTest is a way to test api endpoints. It can be used nicely with Jest to test that your routes are behaving as you expect.

In `task-3/app.test.js`, research and use supertest (https://preview.npmjs.com/package/supertest/v/1.0.0) to test all of the request handlers for the express server in `task-3/app.js`.
