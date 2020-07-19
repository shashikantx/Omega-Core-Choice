export interface ResumeWorkExperienceVo {
  seq: number;
  company: string; // Company / School / College name
  designation: string; //
  start: Date; // Start Date
  end: Date; // End Date
  pointList: Array<string>;
}
