var mrk= require('os')

// Getting Info of current user
var data=mrk.userInfo()
console.log(data)

// method returns the sysem uptime in seconds
console.log(`The System Uptime is ${mrk.uptime()} seconds.`);

const currentOSdata = {
    name: mrk.type(),
    release: mrk.release(),
    TotalMem : mrk.totalmem(),
    FreeMem : mrk.freemem()
}

console.log(currentOSdata);