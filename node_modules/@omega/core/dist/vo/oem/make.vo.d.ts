import { ModelVo } from './model.vo';
export interface MakeVo {
    id: string;
    name: string;
    model: Array<ModelVo>;
    logo: string;
}
