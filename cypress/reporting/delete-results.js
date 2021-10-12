#!/usr/bin/env node
const rimraf = require('rimraf')

const testResultsDir = './cypress/cucumber-json'

rimraf(testResultsDir, () => {
    console.log('Deleted former test results.')
})