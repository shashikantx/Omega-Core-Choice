import {Message} from './message';

/**
 * ApiRunStatus - indicator
 */
export class ApiRunStatus {

  /* ************************************ Instance Fields ************************************ */
  working = false;
  // msg: string;
  msg: Message[] = [];
  showSpinner = false;

}
