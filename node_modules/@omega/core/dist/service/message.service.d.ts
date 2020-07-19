import { Message } from "../dto/message";
/**
 * MessageValue -
 */
export declare class MessageService {
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
    mergeMessage(msg: Array<Message>, type: string, text: string, title?: string | undefined, param?: Array<string> | undefined): Array<Message>;
}
