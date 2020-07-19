import {MessageValue} from './message-value';

/**
 * Message -
 */
export interface Message {

  /* ************************************ Instance Fields ************************************ */
  type: string;
  value: Array<MessageValue>;

}
