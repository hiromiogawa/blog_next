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
        <StyledCategoryText id={category.id}>
          {category.name}
        </StyledCategoryText>
      )}

      <StyledTagList tags={tags} />
    </footer>
  )
}

export default CardFooter

const StyledCategoryText = styled(CategoryText)`
  margin-top: 12px; // atomsになった際に削除
`

const StyledTagList = styled(TagList)`
  margin-top: 8px;
`
