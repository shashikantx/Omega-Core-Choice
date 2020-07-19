export interface PartialDto {
  // type collection
  id: string;
  orgId: string;
  brId: string;
  /*
    val = {}; // {key: filenameVal};
    val[key] = value;
   */
  val: any;
  sync: boolean;
  cacheId: string; //updateCache
}