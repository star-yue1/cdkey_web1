import { get } from "@/utils/http"

export const getUserList = (params: any) => get('/user/getUserlist', params)
