import React from 'react'

export type PropTypes = {
  children: string
}

// 属性の値を返却（他のコンポーネントでも使用しそうな場合は共通化するためコンポーネントの外に記載）
const getAttr = (attrReg: RegExp, tagArray: string[], index: number) => {
  const attrText = index < tagArray.length && tagArray[index].match(attrReg)

  if (!attrText) return ['']
  const textIndex = {
    start: attrText[0].indexOf('"'),
    end: attrText[0].lastIndexOf('"')
  }
  const attr = attrText[0]
    .substring(textIndex.start + 1, textIndex.end)
    .split(' ')

  return attr
}

const Text = ({ children }: PropTypes) => {
  const reg = /<br class=".+?">|<br>/g
  const brArray = children.match(reg)
  const textArray = children.split(reg)

  // 改行がない場合
  if (brArray === null) return <> {children}</>

  // 改行がある場合
  const texts = textArray.map((item, index) => {
    return (
      <React.Fragment key={item}>
        {item}
        <br className={getAttr(/class=".+?"/g, brArray, index).join(' ')} />
      </React.Fragment>
    )
  })

  return <> {texts}</>
}

export default Text
