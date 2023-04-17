import styled from 'styled-components'

// components
import Link from 'next/link'
import Image from 'next/image'
import Heading1 from '@/components/atoms/text/Heading1'
import TagText from '@/components/atoms/text/TagText'

// types
import type { CategoryType, TagType } from '@/types'

export type SideContentsType = {
  categories: Pick<CategoryType, 'id' | 'name' | 'logo'>[]
  tags: Pick<TagType, 'id' | 'name'>[]
}

const SideContents = ({ categories, tags }: SideContentsType) => {
  return (
    <StyledAside>
      <section>
        <StyledHeading1>CATEGORIES</StyledHeading1>
        <StyledCategories>
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
        </StyledCategories>
      </section>
      <StyledTagsSection>
        <StyledHeading1>TAGS</StyledHeading1>
        <StyledTags>
          {tags.length > 0 &&
            tags.map((tag) => (
              <li key={tag.name}>
                <StyledTagText id={tag.id}>{tag.name}</StyledTagText>
              </li>
            ))}
        </StyledTags>
      </StyledTagsSection>
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

const StyledCategories = styled.ul`
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
  box-shadow: -3px 3px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-3px, 3px);
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

const StyledTagsSection = styled.section`
  margin-top: 40px;
`

const StyledTags = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const StyledTagText = styled(TagText)`
  display: inline-block;
  font-size: 12px;
  padding: 8px;
  background-color: #fff;
  border-radius: 12px;
  border: solid 1px #00ae95;
  box-shadow: -3px 3px 0px 0px rgba(0, 174, 149, 1);

  &:hover {
    transform: translate(-3px, 3px);
    box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
  }
`
