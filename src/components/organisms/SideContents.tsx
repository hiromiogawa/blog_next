import styled from 'styled-components'

// components
import Link from 'next/link'
import Image from 'next/image'
import Heading1 from '@/components/atoms/text/Heading1'

// types
import type { CategoryType } from '@/types'

export type SideContentsType = {
  categories: Pick<CategoryType, 'id' | 'name' | 'logo'>[]
}

const SideContents = ({ categories }: SideContentsType) => {
  return (
    <StyledAside>
      <section>
        <StyledHeading1>CATEGORIES</StyledHeading1>
        <StyledUl>
          {categories.map((category) => (
            <li key={category.name}>
              <StyledLink href={`/blog/${category.id}/1`}>
                <StyledImageWrap>
                  <StyledImage
                    src={category.logo.url}
                    alt={category.name}
                    width={category.logo.width}
                    height={category.logo.height}
                  />
                </StyledImageWrap>
              </StyledLink>
            </li>
          ))}
        </StyledUl>
      </section>
    </StyledAside>
  )
}

export default SideContents

const StyledAside = styled.aside`
  max-width: 176px;
  width: 100%;
  margin-left: 32px;
`

const StyledHeading1 = styled(Heading1)`
  font-size: 20px;
`

const StyledUl = styled.ul`
  display: flex;
  gap: 13px;
  flex-wrap: wrap;
  margin-top: 16px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  background: #fff;
  border-radius: 12px;
  border: solid 1px #00ae95;
  box-shadow: -5px 5px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-5px, 5px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`

const StyledImageWrap = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`
