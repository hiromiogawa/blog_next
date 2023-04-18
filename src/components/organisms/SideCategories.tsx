import styled from 'styled-components'

// components
import Heading1 from '@/components/atoms/text/Heading1'
import FlexCols from '@/components/molecules/FlexCols'
import ImgCardSmall from '@/components/atoms/img/ImgCardSmall'

// types
import type { CategoryType } from '@/types'

export type SideCategoriesType = {
  categories: Pick<CategoryType, 'id' | 'name' | 'logo'>[]
}

const SideCategories = ({ categories, ...props }: SideCategoriesType) => {
  return (
    <section {...props}>
      <StyledHeading1>CATEGORIES</StyledHeading1>
      <StyledFlexCols gap={8}>
        {categories.map((category) => (
          <li key={category.name}>
            <ImgCardSmall
              href={`/blog/${category.id}/1`}
              src={category.logo.url}
              alt={category.name}
              width={category.logo.width}
              height={category.logo.height}
            />
          </li>
        ))}
      </StyledFlexCols>
    </section>
  )
}

export default SideCategories

const StyledHeading1 = styled(Heading1)`
  font-size: 20px;
`

const StyledFlexCols = styled(FlexCols)`
  margin-top: 16px;
`
