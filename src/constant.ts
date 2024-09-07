import avatarImg from '@assets/avatar.jpg'
import type { PostModel } from '@interfaces/post-model'

// index

export const title = '垃圾佬小宋'

export const description = '这是一个托管在 Cloudflare 上的个人博客，用于记录生活和技术笔记。'

export const avatar = avatarImg

export const quote =
  '我个人的一个秘密是在需要极大快乐和悲伤的公众场合却达不到这种快乐和悲伤应有的水平，因而内心惊恐万状，汗如雨下'

export const links = [
  { url: '/astro-pcblog', title: '🌐首页' },
  { url: '/astro-pcblog/tags', title: '🔖标签' },
  { url: '/astro-pcblog/archive', title: '🗂️归档' },
  { url: '/astro-pcblog/search', title: '🔍搜索' },
]

export const getPostLink = (post: PostModel) => `/astro-pcblog/posts/${post.data.abbrlink}`
