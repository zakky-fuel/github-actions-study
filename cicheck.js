var ci = require('ci-info')

if (ci.isCI) {
    console.log('The name of the CI server is:', ci.name)
} else {
    console.log('This program is not running on a CI server')
}