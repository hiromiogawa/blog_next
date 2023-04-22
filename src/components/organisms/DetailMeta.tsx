import styled from 'styled-components'

// functions
import mediaQuery from '@/styles/functions/mediaQuery'

// components
import DayTime1 from '@/components/atoms/text/DayTime1'
import TagList from '@/components/molecules/TagList'
import CategoryText from '@/components/atoms/text/CategoryText'

// types
import type { BlogType } from '@/types'

export type DetailMetaType = Pick<
  BlogType,
  'createdAt' | 'updatedAt' | 'title' | 'tags' | 'category'
>

const DetailMeta = ({
  createdAt,
  updatedAt,
  title,
  tags,
  category
}: DetailMetaType) => {
  return (
    <StyledMeta>
      <StyledCategoryText size="12px" id={category.id}>
        {category.name}
      </StyledCategoryText>
      <StyledDay>
        <li>
          投稿日: <StyledDayTime1>{createdAt}</StyledDayTime1>
        </li>
        <li>
          更新日: <StyledDayTime1>{updatedAt}</StyledDayTime1>
        </li>
      </StyledDay>
      <StyledTitle>{title}</StyledTitle>
      <StyledTagList tags={tags} />
    </StyledMeta>
  )
}

export default DetailMeta

const StyledTitle = styled.h1`
  margin-top: 8px;
  font-size: 32px;
  background: #00ae95;
  color: #fff;
  padding: 10px;
  border-radius: 12px;
  line-height: 1.4;

  ${mediaQuery('tb')} {
    font-size: 28px;
    padding: 6px;
  }
`

const StyledMeta = styled.div`
  font-size: 16px;
`

const StyledDay = styled.ul`
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  margin-top: -1em;
  gap: 8px;
  ${mediaQuery('tb')} {
    justify-content: flex-start;
    margin-top: 4px;
    font-size: 14px;
  }
  ${mediaQuery('sp')} {
    display: block;

    > *:not(:first-child) {
      margin-top: 4px;
    }
  }
`

const StyledCategoryText = styled(CategoryText)`
  font-size: 16px;

  a {
    color: #00ae95;

    &:hover {
      text-decoration: underline;
    }
  }
`

const StyledDayTime1 = styled(DayTime1)`
  font-size: 16px;
`

const StyledTagList = styled(TagList)`
  margin-top: 4px;
  font-size: 14x;

  a {
    color: #00ae95;

    &:hover {
      text-decoration: underline;
    }
  }
`
