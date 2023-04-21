/**
 * HTMLタグを削除し、テキストのみを返す
 */
const removeHtmlTags = (htmlText: string): string => {
  const clean = htmlText.replace(/<[^>]+>/g, '')
  return clean
}

export default removeHtmlTags
