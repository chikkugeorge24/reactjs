
# React Testing with Jest & Enzyme

Sample project which does the react testing with Jest and Enzyme.


## Installation 

Install the below dependencies

```bash 
  npm i -D enzyme enzyme-adapter-react-16 jest-enzyme
```


## Features

- Test file should be named as **filename.test.js**
- Instead of className use another custom attribute to handle the shallow comparison like
    **data-test**
- Test coverage

    **npm test -- --coverage --watchAll=false**
    
    Update package.json

      "jest": {
        "collectCoverageFrom": [
          "src/**/*.{js,jsx,ts,tsx}",
          "!<rootDir>/node_modules/",
          "!<rootDir>/path/to/dir/"
        ],
        "coverageThreshold": {
          "global": {
            "branches": 90,
            "functions": 90,
            "lines": 90,
            "statements": 90
          }
        },
        "coveragePathIgnorePatterns": [
          "src/index.js",
          "src/App.js"
        ]
      }
      
      
- Prop Types

  - Prop types used to set type checking.
  - When an invalid value is passed for a prop, a warning is displayed on the JavaScript console.

    **npm i --save prop-types**

    **npm i -D check-prop-types** //for testing

    **checkPropTypes(component.propTypes, expectedProps, "props", component.name)**

  
    
