var service = require('../static_codegen/proto/Teacher_grpc_pb');
var message = require('../static_codegen/proto/Teacher_pb');

var grpc = require('@grpc/grpc-js'); // 引用错误 不可以完全按照视频教程做demo,找下官方网站处理

var server = new grpc.Server();

server.addService(service.TeacherServiceService,{
    getRealNameByUsername: getRealNameByUsername,
    getTeacherByAge: getTeacherByAge,
    getTeacherWrapperByAges: getTeacherWrapperByAges,
    biTalk: biTalk
});

server.bindAsync('localhost:8899', grpc.ServerCredentials.createInsecure(),()=>{
    server.start();
});


function getRealNameByUsername(call, callback) {
    console.log('username:' + call.request.getUsername());

    var myResponse = new message.MyResponse();
    myResponse.setRealname("赵六")
    callback(null, myResponse);
}


function getTeacherByAge() {

}

function getTeacherWrapperByAges() {

}

function biTalk() {

}