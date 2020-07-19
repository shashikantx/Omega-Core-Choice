import {MessageValue} from "../dto/message-value";
import {Message} from "../dto/message";

/**
 * MessageValue -
 */
export class MessageService {


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
  public mergeMessage(msg: Array<Message>, type: string, text: string, title?: string | undefined, param?: Array<string> | undefined): Array<Message> {
    const messageVal = <MessageValue>{};
    messageVal.text = text;
    messageVal.title = title;
    messageVal.param = param;

    let matchIndex = -1;
    let index = 0;
    if (!msg) {
      msg = [];
    }
    msg.forEach(indMsg => {
      if (indMsg.type === type) {
        //message = indMsg;
        matchIndex = index;
      }
      index++;
    });
    console.log('here in matchIndex ', matchIndex);
    let message: Message = <Message>{};
    if (matchIndex > -1) {
      message = msg[matchIndex];
    } else {
      msg.push(message);
    }

    if (!message.type || !message.value) {
      message.type = type;
      message.value = [];
    }

    message.value.push(messageVal);

    return msg;
  }


  /* ************************************ Private Methods ************************************ */

}
