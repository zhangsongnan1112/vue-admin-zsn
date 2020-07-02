import dafaultsetting from '@/setting'
const title = dafaultsetting.title || 'ZSN Element Admin'
export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return title
}
