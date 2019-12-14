const fs = require('fs')
const path = require('path')

const rootpath = path.resolve(path.dirname(__dirname), './')

const files = fs.readdirSync(rootpath)
const sidebar = files
  .filter(item => !['.vuepress', 'README.md'].includes(item))
  .map(item => `/${item.replace('.md', '')}`)
sidebar.unshift('/')

module.exports = {
  title: '菜谱',
  description: '让你的胃满满登登',
  base: '/cookbook/',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    sidebar,
    lastUpdated: '最后更新时间',
    repo: 'xiguaxigua/cookbook',
    editLinks: true,
    editLinkText: '修改此页面'
  }
}
