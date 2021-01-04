// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_Teacher_pb = require('../proto/Teacher_pb.js');

function serialize_com_jade_proto_MyRequest(arg) {
  if (!(arg instanceof proto_Teacher_pb.MyRequest)) {
    throw new Error('Expected argument of type com.jade.proto.MyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_MyRequest(buffer_arg) {
  return proto_Teacher_pb.MyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jade_proto_MyResponse(arg) {
  if (!(arg instanceof proto_Teacher_pb.MyResponse)) {
    throw new Error('Expected argument of type com.jade.proto.MyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_MyResponse(buffer_arg) {
  return proto_Teacher_pb.MyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jade_proto_StreamRequest(arg) {
  if (!(arg instanceof proto_Teacher_pb.StreamRequest)) {
    throw new Error('Expected argument of type com.jade.proto.StreamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_StreamRequest(buffer_arg) {
  return proto_Teacher_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jade_proto_StreamResponse(arg) {
  if (!(arg instanceof proto_Teacher_pb.StreamResponse)) {
    throw new Error('Expected argument of type com.jade.proto.StreamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_StreamResponse(buffer_arg) {
  return proto_Teacher_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jade_proto_TeacherRequest(arg) {
  if (!(arg instanceof proto_Teacher_pb.TeacherRequest)) {
    throw new Error('Expected argument of type com.jade.proto.TeacherRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_TeacherRequest(buffer_arg) {
  return proto_Teacher_pb.TeacherRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jade_proto_TeacherResponse(arg) {
  if (!(arg instanceof proto_Teacher_pb.TeacherResponse)) {
    throw new Error('Expected argument of type com.jade.proto.TeacherResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_TeacherResponse(buffer_arg) {
  return proto_Teacher_pb.TeacherResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_jade_proto_TeacherResponseList(arg) {
  if (!(arg instanceof proto_Teacher_pb.TeacherResponseList)) {
    throw new Error('Expected argument of type com.jade.proto.TeacherResponseList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_jade_proto_TeacherResponseList(buffer_arg) {
  return proto_Teacher_pb.TeacherResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}


var TeacherServiceService = exports.TeacherServiceService = {
  getRealNameByUsername: {
    path: '/com.jade.proto.TeacherService/GetRealNameByUsername',
    requestStream: false,
    responseStream: false,
    requestType: proto_Teacher_pb.MyRequest,
    responseType: proto_Teacher_pb.MyResponse,
    requestSerialize: serialize_com_jade_proto_MyRequest,
    requestDeserialize: deserialize_com_jade_proto_MyRequest,
    responseSerialize: serialize_com_jade_proto_MyResponse,
    responseDeserialize: deserialize_com_jade_proto_MyResponse,
  },
  getTeacherByAge: {
    path: '/com.jade.proto.TeacherService/GetTeacherByAge',
    requestStream: false,
    responseStream: true,
    requestType: proto_Teacher_pb.TeacherRequest,
    responseType: proto_Teacher_pb.TeacherResponse,
    requestSerialize: serialize_com_jade_proto_TeacherRequest,
    requestDeserialize: deserialize_com_jade_proto_TeacherRequest,
    responseSerialize: serialize_com_jade_proto_TeacherResponse,
    responseDeserialize: deserialize_com_jade_proto_TeacherResponse,
  },
  getTeacherWrapperByAges: {
    path: '/com.jade.proto.TeacherService/GetTeacherWrapperByAges',
    requestStream: true,
    responseStream: false,
    requestType: proto_Teacher_pb.TeacherRequest,
    responseType: proto_Teacher_pb.TeacherResponseList,
    requestSerialize: serialize_com_jade_proto_TeacherRequest,
    requestDeserialize: deserialize_com_jade_proto_TeacherRequest,
    responseSerialize: serialize_com_jade_proto_TeacherResponseList,
    responseDeserialize: deserialize_com_jade_proto_TeacherResponseList,
  },
  biTalk: {
    path: '/com.jade.proto.TeacherService/BiTalk',
    requestStream: true,
    responseStream: true,
    requestType: proto_Teacher_pb.StreamRequest,
    responseType: proto_Teacher_pb.StreamResponse,
    requestSerialize: serialize_com_jade_proto_StreamRequest,
    requestDeserialize: deserialize_com_jade_proto_StreamRequest,
    responseSerialize: serialize_com_jade_proto_StreamResponse,
    responseDeserialize: deserialize_com_jade_proto_StreamResponse,
  },
};

exports.TeacherServiceClient = grpc.makeGenericClientConstructor(TeacherServiceService);
