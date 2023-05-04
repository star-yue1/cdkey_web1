import { get, post } from "@/utils/http"

export const getUserList = (params: any) => get('/user/getUserlist', params)
