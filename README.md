# [JS_BAND_INTERNSHIP] Program

#### TODOList
To run this application, check that latest versions of Git, Node.js and npm or yarn is installed on your computer. 

Available commands:
```bash
#Install dependencies:
$ npm install
$ yarn

# Run app
$ npm run build:dev
$ yarn run build:dev

# Build app
$ npm run build:prod
$ yarn run build:prod

```

# Tech task
## Objectives
- Create a todo-list application. Which includes next functionality:
    - [x] Create a todo-item with a **title**, **description**, **priority** fields and a default status - **open**;
    - [x] Edit all todo-item fields;
    - [x] Move todo-item in **done** status;
    - [x] Delete todo-item
    - [x] Search todo-item by **title**;
    - [x] Filter todo-item by **status**;
    - [x] Filter todo-item by **priority**.
- For task implementation you must use:
    - [x] pure `JavaScript (ES6, ES next)` with `Babel` transpiler (if needed) without frameworks;
    - [x] any `CSS pre/post processor` (ex. `Sass` / `Scss` / `Post-CSS` / ...);
    - [x] any module bundler (ex. `Webpack` / `Rollup` / ..);
    - [x] Usage documentation should be provided in a `README` file;
    - [x] The solution should be placed on your own `GitHub` account;
    - [x] The solution should be placed on `GitHub pages`;


---
This application uses Local Storage to maintain the state of tasks between sessions. If there are other objects in the Local Storage with the same key, there may be failures.