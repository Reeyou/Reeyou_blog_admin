import { request } from '@/utils/request'
import formatParam from '@/utils/formatParam'

export async function login(params) {
  return request('/api/admin/login', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function register(params) {
  return request('/api/admin/register', {
    method: 'POST',
    body: {
      ...params
    }
  })
}
export async function getUserList(params) {
  return request(`/api/admin/getUserList?${formatParam(params)}`)
}