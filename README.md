# Overview

For this assignment we have created GraphQL API and simple React application that queries infromation from that API. It is your job to finalize this application from frontend or backend side.

This assignment assumes that you are comfortable with node.js projects, have experience with React and have either knowledge of backend and frontend technologies.

Application consists of two addresses, localhost:8080 which serves the frontend and localhost:4000 which is the address for GraphQL endpoint and playground. You can find the scripts to start these from below. You need to have both back and frontend running for the whole application to work.

Happy hunting!

## Good to know

Application is written in Typescript.

Frontend: Using React-Hooks, styling done with Styled Components
Backend: Database layer / persistance layer is done with Typeorm, GraphQL schema is defined with TypeGrapqhl

## Actual Assignment

At HoxHunt we deal with large sets of data. In this exercise you will enhance and implement a heat map visualization of user risk associated to social engineering. You'll have a data set containing a list of users with a `failureRate` ranging from 0.0 to 1.0 and `department` parameter (e.g. "sales") which can be used to split the users in to groups.

Your task is to process the data and modify the visualization so our customers can have a nice per department view of their weak points. Here is an example from another problem domain:

![](./lpghostmap.png)

You can use this idea or change the approach for the visualization all together!

## Things we are looking for in the submission

Overall you should think the submission as a real feature going out to our customers. Here are the key points we're looking for:

- Visualization per organization
  - Consider decimating and pre-processing the data in the backend. E.g. we currently send all the data (11k samples) to the client. We could probably decimate the dataset into smaller set in a manner that preserves visually descriptive properties?
- Nice UX(fast!) and UI
- Solid code with unit tests in relevant locations

## What we don't expect

We don't want you to spend countless hours struggling with one minor detail. If you hit a wall, try to implement something else.

## Problems ?

Ask! We will help!

## Scripts

Install dependencies: `yarn install`

Develop front end components on simple encapsulated environment: `yarn docz:dev`

Develop frontend app: `yarn run start:front`

Develop backend app: `yarn run start:back`
