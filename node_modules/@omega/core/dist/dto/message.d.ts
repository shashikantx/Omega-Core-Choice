import { MessageValue } from './message-value';
/**
 * Message -
 */
export interface Message {
    type: string;
    value: Array<MessageValue>;
}
