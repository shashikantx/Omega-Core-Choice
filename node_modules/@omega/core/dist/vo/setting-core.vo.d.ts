export interface SettingCoreVo {
    id: string;
    theme: string;
    lang: string;
    link: string;
    build: number;
    buildLatest: number;
    syncStatus: string;
    setup: string;
    doneSetup: boolean;
    notification: boolean;
}
