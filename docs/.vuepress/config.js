const sidebar = [
  '/',
  '/jiangdoufu'
]

module.exports = {
  title: '厨房阿光',
  description: '让你的胃满满登登',
  base: '/cookbook/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],
  editLinks: true,
  editLinkText: '修改此页面',
  themeConfig: {
    logo: '/logo.png',
    sidebar,
    lastUpdated: '最后更新时间',
    repo: 'xiguaxigua/cookbook',
  }
}
