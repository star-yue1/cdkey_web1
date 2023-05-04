
import { get, post } from "@/utils/http"


export const getSdkList = (params: any) => get('/sdk/getSdklist', params)

export const createCdk = (params: any) => get('/sdk/createSdk', params)