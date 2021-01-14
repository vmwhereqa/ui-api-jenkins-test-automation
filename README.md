# UI Automation - lieferando App

This project will be used to run UI Automation tests for lieferando App. Build based on Webdriverio, selenium and NodeJs

## Pre - requisite:

 1. NodeJs
 2. YARN or NPM
 3. Java
 4. Browser - Chrome

## Installing

### Setup

> yarn
or
> npm install

##  Code Quality check
To check code quality standards eslint is used. To check code quality 

> yarn lint

To fix fixable issues run below

> yarn lint:fix

##  Running the tests
you can run the automated tests in multiple way. 

To run all the scripts just run:

> yarn test

To run only specific testcase use tags

> yarn test  --cucumberOpts.tagExpression='@cuisine'



## Authors

 - Vinod Muralidharan (vinodvijay.m@gmail.com)
