/**
 * 文字列の最初のn文字を取得する
 * @param {string} str - 抜き出す対象となる文字列
 */
const getFirstNChars = (str: string, n = 150): string => {
  if (str.length <= n) {
    return str
  } else {
    return str.substring(0, n)
  }
}

export default getFirstNChars
