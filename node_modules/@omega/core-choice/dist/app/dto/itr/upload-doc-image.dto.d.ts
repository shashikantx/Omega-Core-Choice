import { ImageDataVo } from "@parakh/core";
export interface UploadDocImageDto {
    imgData: ImageDataVo;
    type: string;
    itrId: string;
    userId: string;
}
