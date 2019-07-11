# FreightHub Frontend Coding Challenge

Welcome to the FreightHub frontend coding challenge! Please read the following instructions carefully.

**Your goal is to set up an application which enables the user to view and manage shipments.**

## Business need

The main goal is for the user to check the shipments at a glance. This allows users to take faster decisions and plan ahead of time.

Providing information to the customer increases transparency and reduces communication issues.

## Use cases

- The user shall be able to see shipments in pages of 20 elements per page.
- The user shall be able to search for shipment id and sort by different fields.
- The user shall be able to see the shipment information on a shipment details page.
- The user shall be able to update the shipment name.

The interactions should not refresh the page.

## Technology requirements

You can use any libraries, task runners and build processors. **React** and **JavaScript** are the only hard requirements. ES6 and TypeScript are highly encouraged, as well as MST and MobX if needed.

**Submissions using view libraries/frameworks other than React will not be accepted.**

## Criteria

The full criteria for evaluating the coding challenge can be found [here](./Criteria.md).

## Server-side

The boilerplate includes a small service for data fetching. The file `db.json` includes all the necessary data to achieve the goal. Please follow the steps below to start the server:

```
yarn or npm install .
yarn start or npm start
```

Check [json-server](https://github.com/typicode/json-server) for more information.

**Please make sure that there are scripts to start both the server and the client.**

## Deliverables

- Clone this repository.
- Complete your project as described above within your local repository.
- Ensure everything you want to commit is committed.
- Create a git bundle: `git bundle create your_name.bundle --all`
- Email the bundle file to your point of contact.

**In order to be fair to all candidates, please refrain from sharing your solution on public repository hosting services such as GitHub and Bitbucket.**

## Time limit

There is no hard time limit for this coding challenge. However, we believe that 3-4 hours is sufficient for the must-have parts of the application. While we appreciate all the effort put into the challenge, we also do not want to take up too much of your time. Our advice is to focus on making sure that the application works properly and has some tests before moving on to secondary objectives. Happy coding!

Good luck,
The FreightHub Team
