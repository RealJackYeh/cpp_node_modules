const calculate = require('./build/Release/calculate')
const hello = require('./build/Release/hello')
const hello_js = require('./hello.js')

function calc() {
    let i, x =  100.734659, y=353.2313423432;
    for (i=0; i<1000000000; i++) {
        x += y;
    }
    const total = x
    return total
}
console.log('c++ addon result vs Node result')
console.log('C++ :' + calculate.calc())
console.log('Node :' + calc())
console.log('---------------------------------------')
console.log('c++ addon vs js addon')
console.log(hello.hello())
console.log(hello_js('Jack Yeh'))