"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
/**
 * MessageValue -
 */
var MessageService = /** @class */ (function () {
    function MessageService() {
    }
    /* ************************************ Public Methods ************************************ */
    /**
     'msg': [
     {
     'type': 'SUCCESS',
     'value': [
       {
       'title': 'Info Title',
       'text': 'body for info msg param {foo} value',
       'param': {'foo': 'bar'}
       }
     ]
     },
     . . .
     ]
     */
    MessageService.prototype.mergeMessage = function (msg, type, text, title, param) {
        var messageVal = {};
        messageVal.text = text;
        messageVal.title = title;
        messageVal.param = param;
        var matchIndex = -1;
        var index = 0;
        if (!msg) {
            msg = [];
        }
        msg.forEach(function (indMsg) {
            if (indMsg.type === type) {
                //message = indMsg;
                matchIndex = index;
            }
            index++;
        });
        console.log('here in matchIndex ', matchIndex);
        var message = {};
        if (matchIndex > -1) {
            message = msg[matchIndex];
        }
        else {
            msg.push(message);
        }
        if (!message.type || !message.value) {
            message.type = type;
            message.value = [];
        }
        message.value.push(messageVal);
        return msg;
    };
    return MessageService;
}());
exports.MessageService = MessageService;
