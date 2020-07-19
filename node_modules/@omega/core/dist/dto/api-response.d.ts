import { Message } from './message';
/**
 * ApiResponse
 */
export declare class ApiResponse<T> {
    code: number;
    status: string;
    body: T | null;
    data: any;
    msg: Array<Message> | null;
    errorMessage: string | null;
    constructor();
    addMessage(type: string, text: string, title?: string | undefined, param?: Array<string> | undefined): void;
    addSuccessMessage(text: string, title?: string, param?: Array<string>): void;
    addErrorMessage(text: string, title?: string, param?: Array<string>): void;
    addInfoMessage(text: string, title?: string, param?: Array<string>): void;
    addWarningMessage(text: string, title?: string, param?: Array<string>): void;
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
    private _mergeMessage;
}
