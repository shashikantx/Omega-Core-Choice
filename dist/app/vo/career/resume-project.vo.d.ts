export interface ResumeProjectVo {
    seq: number;
    name: string;
    start: Date;
    end: Date;
    description: string;
    responsibilityPoint: Array<string>;
    role: string;
    tech: string;
    teamSize: number;
}
