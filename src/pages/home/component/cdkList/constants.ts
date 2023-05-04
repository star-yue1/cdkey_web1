
export enum STATUS {
    INIT = 0,
    USE,
    END,
    STOP
}

export const STATUS_MAP = {
    [STATUS.INIT]: '未开启',
    [STATUS.USE]: '使用中',
    [STATUS.END]: '已到期',
    [STATUS.STOP]: '已停用'
}