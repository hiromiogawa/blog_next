/**
 * 指定された範囲内の数値を含む配列を返す関数。開始値と終了値も含まれます。
 */
const getRange = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i)

export default getRange
