const convertDateFormat = (dateString: string) => {
  // ISO 8601形式の日付文字列をDateオブジェクトに変換
  const date = new Date(dateString)

  // Dateオブジェクトの年、月、日を取得
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  // "yyyy/mm/dd"形式の文字列に変換して返す
  return `${year}/${month}/${day}`
}

export default convertDateFormat
