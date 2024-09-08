import avatarImg from '@assets/avatar.jpg'
import type { PostModel } from '@interfaces/post-model'

// index

export const title = '垃圾佬小宋'

export const description = '这是一个托管在 Cloudflare 上的个人博客，用于记录生活和技术笔记。'

export const avatar = avatarImg

export const quote =
  '仰天大笑出门去，我辈岂是蓬蒿人'

export const links = [
  { url: '/', title: '🌐首页' },
  { url: '/tags', title: '🔖标签' },
  { url: '/archive', title: '🗂️归档' },
  { url: '/search', title: '🔍搜索' },
]

export const getPostLink = (post: PostModel) => `/posts/${post.data.abbrlink}`
