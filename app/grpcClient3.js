var service = require('../static_codegen/proto/Teacher_grpc_pb');
var message = require('../static_codegen/proto/Teacher_pb');

var grpc = require('@grpc/grpc-js'); // 引用错误 不可以完全按照视频教程做demo,找下官方网站处理

var client = new service.TeacherServiceClient('localhost:8899', grpc.credentials.createInsecure());

var request = new message.MyRequest();
request.setUsername('zhangsan');

client.getRealNameByUsername(request, function (error, respData) {
    console.log(respData.getRealname());
})