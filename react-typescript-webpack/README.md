
# React Typescript Webpack

This is a sample React project setup with Typescript and Webpack from scratch

Sample project: https://github.com/gopinav/React-TypeScript-Webpack-Starter/tree/master/webpack


## Steps to create a React Application from scratch

- Create a project folder
- Initialize git repository:

    ***git init***
- Create a ***.gitignore*** file
- Create a ***src*** folder
- Create a ***build*** folder
- Create ***package.json*** with default details
    
    ***npm init --y***
- Add build to .gitignore file
- Create ***index.html*** file inside src folder
    
    -- Copy html content

    -- Change title

    -- Add div tag with id root inside the body tag
- Add node_modules to .gitignore file
- Add React dependency packages

    ***npm i --save react react-dom***
- Add Typescript dev dependency packages for react and react-dom

    ***npm i -D typescript @types/react @types/react-dom***
- Add a configuration ***tsconfig.json*** file for typescript configurations
- Add babel dev dependencies for code transpilation

    ***npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript***
- Add a babel configuration ***.babelrc*** file for transpilation
- Add webpack bundler dev dependencies

    ***npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin***
- Add babel loader dev dependency

    ***npm i -D babel-loader***
- Create a ***webpack*** folder and add ***webpack.config.js*** file inside it.
- Create the entry point ***index.tsx*** and ***App.tsx*** inside the src folder
- Add npm scripts to run the application inside packages.json

    ***"start": "webpack serve --config webpack/webpack.config.js --open"***
- Run the application

    ***npm run start***
    
## Adding Styles/Images/svg

- Add css/style dev dependencies

   ***npm i -D css-loader style-loader***

- Update webpack.config.js with

   ***{
      test: '/\\.css$/',
      use: ['style-loader', 'css-loader']
   }***

- Add ***declarations.d.ts*** file inside src folder to accomodate images and svgs

    ***declare module "\*.png"***
    
    ***declare module "\*.svg"***    
- Update webpack.config.js with

   ***{
      test: '/\\.(?:ico|png|gif|jpg|jpeg)$/i',
      type: "asset/resource"
   }***


   ***{
       test: '/\\.(woff(2)?|eot|ttf|otf|svg)$/',
      type: "asset/inline"
   }***

## Configuring multiple environments

- Add webpack-merge as a dev dependency

    ***npm i -D webpack-merge***
- Rename webpack.config.js to ***webpack.common.js***
- Add separate webpack files for each environment:

    ***webpack.dev.js***
    
    ***module.exports {
        mode: 'development',
        devtool: 'cheap-module-source-map'
    }***

    ***webpack.prod.js***

    ***module.exports {
        mode: 'production',
        devtool: 'source-map'
    }***
- Add ***webpack.config.js*** file which merges both environment files and common file
- Update run scripts in package.json

    ***'start': 'webpack serve --config webpack/webpack.config.js --env env=dev --open',***
   
    ***'build': 'webpack --config webpack/webpack.config.js --env env=prod'***
- Run the build commands

    ***npm run build***

    ***npx serve***
    

## Fast Refresh/ Hot Reloading

- Refreshing only those React components which actually required to change
- Using React Refresh Webpack Plugin

   ***npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh***
- Update webpack.common.js file with the following:

   ***const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");***

   ***devServer: {
       hot: true,
       open: true
   }***

   ***plugins: [new ReactRefreshWebpackPlugin()]***
## ESLint Integration

- Find and fix problems in javascript code
- Linting is developer specific
- We can add or remove rules from the list
- Install ESLint package

    ***npm i -D eslint***
- Install dependency packages

    ***npm i -D eslint-plugin-react eslint-plugin-react-hooks***
- Install ESLint dependencies which are typescript specific

  ***npm i -D @typescript-eslint/parser @typescript-eslint/eslint-plugin***
- Create ***.eslintrc.js*** file in root folder
- Install some aother ESLint dependencies

    ***npm i -D eslint-plugin-import eslint-plugin-jsx-a11y***
- Update npm scripts:
    
    ***"lint": "eslint --fix \\"./src/\*\*/\*.{js,jsx,ts,tsx,json}\\""***
- Run lint

    ***npm run lint***
    
    
## Prettier Code Formatter

- Install dependencies:

    ***npm i -D prettier eslint-config-prettier eslint-plugin-prettier***
- Create prettier config file ***.prettierrc.js***
- Update ***.eslintrc.js*** file with ***prettier*** and ***plugin:prettier/recommended***
- Add npm scripts to run the format in package.json:

    ***format: "prettier --write \\"./src/\*\*/\*.{js,jsx,ts,tsx,json,css,scss,md}\\""***
- Run the scripts

    ***npm run format***
    
    
    
## Prevent Lint & Format Errors from Commits

- Install dependencies:

    ***npm i -D husky@4 lint-staged***

- Add npm scripts in package.json:

        "husky": {
            "hooks": {
                "pre-commit": "lint-staged"
            }
        }

        "lint-staged": {
            "src/**/*.{js,jsx,ts,tsx,json}": [
                "eslint --fix"
            ],
            "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
                 "prettier --write"
            ]
        }
        
        
 
## Miscellanious Installations

1. To use async await in React app:

    ***npm i -D @babel/runtime @babel/plugin-transform-runtime***
    
    Update .babelrc file

        "plugins": [
            [
                "@babel/plugin-transform-runtime",
                {
                    "regenerator": true
                }
            ]
        ]

2. To copy static assets to build folder

    ***npm i -D copy-webpack-plugin***

    Update webpack.common.js file

        const CopyPlugin = require('copy-webpack-plugin');
        plugins: [
            new CopyPlugin({
                patterns: [{ from:'source', to: 'dest'}]
            })
        ],

3. To visualize webpack output files and its size after build

    ***npm i -D webpack-bundle-analyzer***

    Update webpack.prod.js file
    
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
        plugins: [
            new BundleAnalyzerPlugin()
        ]
        
