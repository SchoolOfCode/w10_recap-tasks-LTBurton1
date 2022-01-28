## Task 1

### Part 1

You have a passion for slug collecting. You decide to create a virtual slug, and what better programming paradigm to use than object-oriented programming? What are slugs, if not small, slow moving objects? In [index.js of the task1 folder](task1/index.js), complete the following:

👉 You must begin by declaring a class of 'Slug' using the JavaScript class syntax. Each new Slug should be created with the following properties using its constructor function: name, colour, length, thickness, eyeStickHeight and slimeFactor.

The name of your favourite slug is Pavard. As far as slugs go Pavard is fairly average, but you love him all the same. Pavard has the following characteristics:

- name: 'Pavard'
- colour: 'yellow-brown'
- length: '5cm'
- thickness: '2cm'
- eyeStickHeight: '0.5cm'
- slimeFactor: 5

👉 Declare a variable `pavard` as an instance of the class `Slug` with the characteristics listed above and console.log to check.

### Part 2

You share Pavard on r/sluglife to rapturous applause. Some people ask about the 'slimeFactor'.

👉 Create a new class called `SlugV2` that extends the Slug class.

👉 Add a method to `SlugV2` called `calculateSlimeFactor` that automatically calculates a slug's slimeFactor when a new instance of the class is created instead of taking it in. It's based on length x thickness x eyeStickHeight.

👉 Create two more slugs, `remi` and `russell`, as instances of the `SlugV2` class with the characteristics below. Their slimeFactor should be calculated by your `calculateSlimeFactor` method.

Remi:

- name: 'Remi'
- colour: 'orange'
- length: '2.5cm'
- thickness: '1.5cm'
- eyeStickHeight: '1cm'

Russell:

- name: 'Russell'
- colour: 'pink'
- length: '5cm'
- thickness: '1cm'
- eyeStickHeight: '3cm'

#### Part 3

The public is clamoring for a way to choose and compare slugs.

👉 Create another class, `SlugUtilities`, that should take in an array of slugs. `SlugUtilities` should have the following static methods (learn more about static methods [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static) or [here](https://www.w3schools.com/js/js_class_static.asp)):

- `getRandomSlug` should take in an array of slugs and return a random slug.
- `compareSlimeFactor` should take in an array of slugs and return a string: `${name} has the highest slimeFactor!`

## Task 2

In [the task2 folder](task2/), you'll find an app that uses content from the array of posts in [libs/articles](task2/src/libs/articles.js). It's currently all in one component.

👉 Use component-based thinking to break the code in the `App` component into separate components. Use draw.io's VS Code integration (or an image from another diagramming software) to diagram out your components and their states and props and include your diagram in this repo before refactoring the code.

👉 Use CSS and the component library of your choice to replace one or more of the existing components and/or add one or more new components to the application.

👉 Use Storybook to document your UI components.

🌟 Bonus:

- Use Auth0 to add authentication to your app so that users must be logged in to view the articles.
- Add test files and tests for your components.
