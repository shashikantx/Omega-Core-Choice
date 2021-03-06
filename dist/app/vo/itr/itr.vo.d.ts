import { ImageDataVo, UserVo } from "@omega/core";
export interface ItrVo {
    id: string;
    orgId: string;
    user: UserVo;
    financialYear: string;
    assistantYear: string;
    document: {
        string: {
            string: ImageDataVo;
        };
    };
    status: string;
    created: Date;
    modified: Date;
}
