"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
var response_status_1 = require("../enums/response-status");
var enums_1 = require("../enums");
var message_service_1 = require("../service/message.service");
/**
 * ApiResponse
 */
var ApiResponse = /** @class */ (function () {
    /* ************************************ Constructors ************************************ */
    function ApiResponse() {
        this.code = 200;
        this.status = response_status_1.ResponseStatus[response_status_1.ResponseStatus.SUCCESS];
        this.body = null;
        this.data = null;
        this.msg = null;
        this.errorMessage = null;
    }
    /* ************************************ Public Methods ************************************ */
    ApiResponse.prototype.addMessage = function (type, text, title, param) {
        this._mergeMessage(type, text, title, param);
    };
    ApiResponse.prototype.addSuccessMessage = function (text, title, param) {
        this._mergeMessage(enums_1.MessageType[enums_1.MessageType.SUCCESS], text, title, param);
    };
    ApiResponse.prototype.addErrorMessage = function (text, title, param) {
        this._mergeMessage(enums_1.MessageType[enums_1.MessageType.ERROR], text, title, param);
    };
    ApiResponse.prototype.addInfoMessage = function (text, title, param) {
        this._mergeMessage(enums_1.MessageType[enums_1.MessageType.INFO], text, title, param);
    };
    ApiResponse.prototype.addWarningMessage = function (text, title, param) {
        this._mergeMessage(enums_1.MessageType[enums_1.MessageType.WARNING], text, title, param);
    };
    /* ************************************ Private Methods ************************************ */
    /**
     'msg': [
     {
     'type': 'info',
     'value': [
       {
       'title': 'Info Title',
       'text': 'body for info msg param {foo} value',
       'param': {'foo': 'bar'}
       }
     ]
     },
     */
    /*
    private _addMessage(type: string, text: string, title?: string, param?: Array<string>) {
      const message = <Message>{};
      message.type = type;
      message.value = [];
      const messageVal = <MessageValue>{};
      messageVal.text = text;
      messageVal.title = title;
      messageVal.param = param;
      message.value.push(messageVal);
  
      if (!this.msg) {
        this.msg = [];
      }
      this.msg.push(message);
    }
  */
    ApiResponse.prototype._mergeMessage = function (type, text, title, param) {
        if (!this.msg) {
            this.msg = [];
        }
        new message_service_1.MessageService().mergeMessage(this.msg, type, text, title, param);
    };
    return ApiResponse;
}());
exports.ApiResponse = ApiResponse;
