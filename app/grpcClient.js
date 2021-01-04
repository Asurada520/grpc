var PROTO_FILE_PATH = 'D:/idea_programe/grpc_demo/proto/Teacher.proto';
var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.jade.proto;

var client = new grpcService.TeacherService('localhost:8899',grpc.credentials.createInsecure());

client.GetRealNameByUsername({username: 'tt'},function (error, respData) {
    console.log(respData);
});
