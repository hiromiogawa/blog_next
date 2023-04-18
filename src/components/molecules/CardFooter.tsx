import styled from 'styled-components'

// components
import CategoryText from '@/components/atoms/text/CategoryText'
import TagList, { TagListType } from '@/components/molecules/TagList'

// type
import type { CategoryType } from '@/types'

export type CardFooterType = {
  showCategory?: boolean
  category: Pick<CategoryType, 'id' | 'name'>
} & TagListType

const CardFooter = ({
  showCategory = true,
  category,
  tags,
  ...props
}: CardFooterType) => {
  return (
    <footer {...props}>
      {showCategory && (
        <StyleCategoryText id={category.id}>{category.name}</StyleCategoryText>
      )}
      <StyledTagList tags={tags} showCategory={showCategory} />
    </footer>
  )
}

export default CardFooter

const StyledTagList = styled(TagList)<{ showCategory: boolean }>`
  margin-top: ${({ showCategory }) => (showCategory ? '8px' : 0)};
`

const StyleCategoryText = styled(CategoryText)`
  margin-top: 12px; // atomsになった際に削除
`
