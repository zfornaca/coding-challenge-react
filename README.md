# Lithodomos VR Coding Challenge

> Welcome to the Lithodomos VR Coding Challenge!

## Overview

The purpose of this challenge is to assess your **skills and approach to
composing a simple app** given a set of wireframes and a GraphQL API.

The challenge is expected to take about 2-3 hours.

## Challenge

Using the provided wireframes as reference, you'll have to render a UI with
React and populate it with data from our GraphQL API.

Please include a `README` with any setup instructions or other documentation you
created.

Additionally, please answer the following questions and include them in your
`README`:

* How did you decide which technologies to use?
* Are there any improvements you could make to your submission?
* What would you do differently if you were allocated more time?

## Details

* You may use any technologies you wish, as long as you implement the UI with
  [React](https://github.com/facebook/react)
* You will need to create the following pages:
  * "Home"
  * "Experiences"
  * "Experience"
* Static assets are provided in the [`assets` folder](./assets)
* The GraphQL API endpoint is found at
  [`https://api.lithodomosvr.com/graphql`](https://api.lithodomosvr.com/graphql)
* We expose a hosted [GraphiQL client](https://api.lithodomosvr.com/graphiql) for
  exploring our schema
* Our GraphQL `Asset` type's `file` property directly maps to files found at
  [http://assets.lithodomosvr.com/Asset.file.jpg](http://assets.lithodomosvr.com)
* Assume that you do not have to support legacy browsers
* Styling the UI is a low priority and beyond the layout derived from wireframes,
  is entirely up to you
* **Optional**: Use [Flow](https://flow.org/) or
  [TypeScript](https://www.typescriptlang.org/)

### General

* Clicking the Lithodomos VR logo should navigate the user to `/`

### "Home"

* [Wireframe - loading](./wireframes/home-loading.png)
* [Wireframe](./wireframes/home.png)
* Render on `/`
* This page should render when loading `index.html`
* Fetch and render the first 3 `Experience`s from the `experiences` query.
  Return their `name`, `tagline`, and `imageMedium.file`
* Clicking the experience should navigate the user to
  `/experiences/:experienceId`, where `:experienceId` is the `Experience`'s `id`
* Clicking "View all experiences" should navigate the user to `/experiences`

### "Experiences"

* [Wireframe - loading](./wireframes/experiences-loading.png)
* [Wireframe](./wireframes/experiences.png)
* Render on `/experiences`
* Fetch and render the first 18 `Experience`s from the `experiences` query.
  Return their `name`, `tagline`, and `imageMedium.file`
* Clicking the experience should navigate the user to
  `/experiences/:experienceId`, where `:experienceId` is their `id`
* **Optional**: Render the 3 experiences cached by the "Home" page while the
  remaining data fetches

### "Experience"

* [Wireframe - loading](./wireframes/experience-loading.png)
* [Wireframe](./wireframes/experience.png)
* Render on `/experiences/:experienceId`
* Fetch and render an `Experience` from the `experience` query using
  `:experienceId` from the URL as the `id` argument.
  * Return it's `name`, `description`, `imageMedium.file`, and first 18
    `scenes`.
  * For each `Scene` returned by `scenes`, return it's `name`, `tagline`, and
    `imageMedium.file`
* Tapping "Back to experiences" should navigate the user to `/experiences`
