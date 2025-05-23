var os = require('os')
console.log('Free Memory ',os.freemem()/(1024*1024*1024), 'GB Memory');
console.log('Total Memory ',os.totalmem()/(1024*1024*1024), 'GB Memory');
console.log('Home Directory: ',os.homedir());
console.log('OS Platform : ',os.platform());
console.log('OS Arechitecture : ',os.arch());
console.log('Computer on Since : ',os.uptime()/60,'Minute');
console.log('Computer on Since : ',os.uptime()/(60*60),'Hours');
console.log('Computer on Since : ',os.uptime()/(60*60*24),'Days');
console.log('User: ',os.userInfo());
console.log("Os version ", os.version());
console.log("Os version ", os.cpus());
console.log('Release version of os ',os.release());
console.log('OS Type :', os.type());




