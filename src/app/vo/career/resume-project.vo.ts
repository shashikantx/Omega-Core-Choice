export interface ResumeProjectVo {
  seq: number;
  name: string; // Project name
  start: Date; // Start Date
  end: Date; // End Date
  description: string; // descriptionPoint
  responsibilityPoint: Array<string>; // responsibilityPoint
  role: string; //
  tech: string; //
  teamSize: number; //
}
