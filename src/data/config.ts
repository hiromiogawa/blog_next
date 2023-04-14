/** サイト単位のデータ */
export const SITE_DATA = {
  title: 'ST-HOME',
  description: 'description',
  path: 'http://localhost:3000/'
}

/** ページ単位のデータ */
export const PAGES_DATA = [
  {
    id: 1,
    path: '/page1',
    title: 'page1',
    showInHeader: true,
    showInFooter: true
  },
  {
    id: 2,
    path: '/page2',
    title: 'page2',
    description: 'aaaaaaaaaaaaa',
    showInHeader: true,
    showInFooter: true
  },
  {
    id: 3,
    path: '/page3',
    title: 'page3',
    description: 'aaaaaaaaaaaaa',
    showInHeader: true,
    showInFooter: true
  },
  {
    id: 4,
    path: '/page4',
    title: 'page4',
    description: 'cccccccccccccccc',
    showInHeader: true,
    showInFooter: true
  }
]

/**
 * 指定された id を持つページデータを取得する。
 */
export const getPageDataByID = (id: number): object | undefined =>
  PAGES_DATA.find((value) => value.id === id)
