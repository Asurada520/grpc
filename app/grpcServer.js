var PROTO_FILE_PATH = 'D:/idea_programe/grpc_demo/proto/Teacher.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.jade.proto;

var server = new grpc.Server();

server.addService(grpcService.TeacherService.service, {
        getRealNameByUsername: getRealNameByUsername,
        getTeacherByAge: getTeacherByAge,
        getTeacherWrapperByAges: getTeacherWrapperByAges,
        biTalk: biTalk
    }
);

server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUsername(call, callback) {
    console.log('username:' + call.request.username);
    callback(null, {realname: '张三'});
}

function getTeacherByAge() {

}

function getTeacherWrapperByAges() {

}

function biTalk() {

}