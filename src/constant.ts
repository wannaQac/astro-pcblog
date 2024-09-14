import avatarImg from '@assets/avatar.jpg'
import type { PostModel } from '@interfaces/post-model'

// index

export const title = '垃圾佬小宋'

export const description = '这是一个托管在 Cloudflare 上的个人博客，用于记录生活和技术笔记。'

export const avatar = avatarImg

export const quote =
  '致力于分享电脑PC的相关知识，与大家一起成长。本站点基于Cloudflare托管，如果发现网页展示的不是最新内容，等待10s~30s左右即可，会弹出确认框是否强刷页面，或者使用快捷键 Ctrl + F5。'

export const links = [
  { url: '/', title: '🌐首页' },
  { url: '/tags', title: '🔖标签' },
  { url: '/archive', title: '🗂️归档' },
  { url: '/search', title: '🔍搜索' },
]

export const getPostLink = (post: PostModel) => `/posts/${post.data.abbrlink}`
