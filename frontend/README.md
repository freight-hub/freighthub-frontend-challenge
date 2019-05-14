# FreightHub Frontend Coding Challenge

This is a frontend part of shipping management application.

## Table of contents
- [Configuration](#configuration)
- [Installation](#installation)
- [Build](#build)
- [Test](#test)
- [User guide](#user-guide)
- [Application components](#application-components)
- [TODO](#todo)

## Configuration
Configuration options can be changed in `.env` file

## Installation
In order to install the application, execute 
```sh
npm install
```
This will install frontend and backend part of a project

## Build
In order to build a project in a production environment, execute 
```sh
npm run build
```
Your app will be served under `http://localhost:5000`. Your API would be served `http://localhost:8000/shipments`

## Test
To run tests, execute
```sh
npm run test
```
Coverage report in HTML format would be generated under `coverage/lcov-report`

## User guide
To filter order by id start typing in Search by ID input. Your results will be immediately filtered. The filtering is case independent and will filter order which will contain filter text in it's id.

Shipping list has multiple sorting options: - `TODO`
 - By name
 - By id
 - By active status
 - By completed status
 - Default (in order, returned by API)
To sort list by one of those options, click on sort button at the top of a list and select sorting options from menu.

You can click on shipping card in order to see shipping details. On details page you can also update shipping name. To do so click on `Update Name` button next to shipping name. You should then see a form with one input. Click on that input and update shipping name. To save your changes press save button. To revert your changes press cancel button.

## Application components
To generate list of application components, execute
```sh
npm run components
```


## TODO
 - Enhance tablet and desktop UI
 - COVER ALL CODEBASE WITH TESTS. Example test cases can be found at `frontend/src/modules/list/actions/get-shipments.test.ts`, `frontend/src/components/Button/index.test.tsx`
 - Fix an issue with coverage of custom modules and custom paths
 - Configure coverage to work with custom modules
 - When clicked on `Update Name` button place caret in input automatically.
 - Freeze package versions
 - Configure linter and follow code style (I prefer google style guide)
 - Extract shared interfaces into common module
