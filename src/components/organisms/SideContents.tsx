import styled from 'styled-components'

// components
import Link from 'next/link'
import Image from 'next/image'

// types
import type { CategoryType } from '@/types'

export type SideContentsType = {
  categories: Pick<CategoryType, 'id' | 'name' | 'logo'>[]
}

const SideContents = ({ categories }: SideContentsType) => {
  return (
    <StyledAside>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <Link href={`/blog/${category.id}/1`}>
              <StyledImage
                src={category.logo.url}
                alt={category.name}
                width={category.logo.width}
                height={category.logo.height}
              />
              <h2>{category.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </StyledAside>
  )
}

export default SideContents

const StyledAside = styled.aside`
  max-width: 340px;
  width: 100%;
`
const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
