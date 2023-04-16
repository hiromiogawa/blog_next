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
        <CategoryText id={category.id}>{category.name}</CategoryText>
      )}
      <StyledTagList tags={tags} showCategory={showCategory} />
    </footer>
  )
}

export default CardFooter

const StyledTagList = styled(TagList)<{ showCategory: boolean }>`
  margin-top: ${({ showCategory }) => (showCategory ? '8px' : 0)};
`
