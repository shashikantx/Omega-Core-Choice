import { ResumeReferenceVo } from './resume-reference.vo';
import { ResumeAwardVo } from './resume-award.vo';
import { ResumeAcademicVo } from './resume-academic.vo';
import { ResumeLanguageVo } from './resume-language.vo';
import { ResumeProjectVo } from './resume-project.vo';
import { ResumeWorkExperienceVo } from './resume-work-experience.vo';
/**
 * Career Summary or Objective Statement: Summarize your qualifications and experience to set the tone for the person reading your resume.
 * Accomplishments or Achievements: Highlighting these in a separate section highlights that you convert your skills and experience into results. Alternatively, sprinkle measurable results across multiple resume sections.
 * Skills Section: Consolidate your most important hard skills and resume keywords to provide an overview of what you bring to the table while optimizing your resume for ATS search.
 * Executive Core Qualifications: Some positions (particularly federal jobs) require qualifications to be addressed in this specific format.
 * Volunteer Work: Helping out at a non-profit is a great way to add key skills and experience to your resume. Format this section similarly to your work experience.
 * Certifications and Licenses: Adding paid or even free certifications to your resume can set you apart from other candidates while adding skills that might be missing in your work experience.
 * Awards and Honors: Add clout to your resume by listing relevant awards and commendations. Once again, the operative word is relevant.
 * Hobbies and Interests: Unless your hobby has added key skills, knowledge, or experience that is relevant to the job, this section is typically reserved for recent grads and entry-level candidates who lack work experience.
 */
export interface ResumeVo {
    id: string;
    userId: string;
    img: string;
    resumeId: string;
    title: string;
    name: string;
    version: string;
    cell: string;
    email: string;
    address: string;
    website: string;
    nameFather: string;
    dob: Date;
    maritalStatus: string;
    passport: string;
    hobbyList: Array<string>;
    strengthList: Array<string>;
    profile: string;
    achievement: Array<string>;
    objective: string;
    expertise: string;
    workExperienceList: Array<ResumeWorkExperienceVo>;
    projectList: Array<ResumeProjectVo>;
    academicList: Array<ResumeAcademicVo>;
    languageList: Array<ResumeLanguageVo>;
    awardList: Array<ResumeAwardVo>;
    extraCurricularList: Array<string>;
    skillList: Array<string>;
    toolList: Array<string>;
    referenceList: Array<ResumeReferenceVo>;
    declaration: string;
    place: string;
    status: string;
    crtBy: string;
    created: Date;
}
