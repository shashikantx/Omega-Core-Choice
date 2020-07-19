import { ImageDataVo } from "@omega/core";
export interface UploadDocImageDto {
    imgData: ImageDataVo;
    type: string;
    itrId: string;
    userId: string;
}
