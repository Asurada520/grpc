var service = require('../static_codegen/proto/Teacher_grpc_pb');
var messages = require('../static_codegen/proto/Teacher_pb');

var grpc = require('@grpc/grpc-js');

var client = new service.TeacherServiceClient('localhost:8899',grpc.credentials.createInsecure());

var request = new messages.MyRequest();
request.setUsername("zhangsan");

client.getRealNameByUsername(request,function (error,respData) {
   console.log(respData.getRealname());
});

