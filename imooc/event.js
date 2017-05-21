var events =require('events');
var eventEmitter = new events.EventEmitter;

eventEmitter.on('test_info',function(data){
    console.log(data+'test success!');
})
setTimeout(function(){
   eventEmitter.emit('test_info','isTestsuccess');
},1000);