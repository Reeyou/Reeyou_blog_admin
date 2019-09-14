import request from '@/utils/request'

export async function addArticle(params) {
  return request('/api/addArticle', {
    method: 'POST',
    body: {
      ...params
    }
  })
}