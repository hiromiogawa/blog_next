import styled from 'styled-components'
import Router from 'next/router'
import { PER_PAGE } from '@/config'

// components
import ReactPaginate from 'react-paginate'

export type PagiNationType = {
  totalCount: number
  category?: string
}

const PagiNation = ({
  totalCount,
  category = '',
  ...props
}: PagiNationType) => {
  const handlePaginate = (selectedItem: { selected: number }) => {
    Router.push(
      `/blog${category ? `/${category}` : ''}/${selectedItem.selected + 1}`
    )
  }
  return (
    <StyledReactPaginate
      pageCount={Math.ceil(totalCount / PER_PAGE)}
      marginPagesDisplayed={1}
      pageRangeDisplayed={3}
      onPageChange={handlePaginate}
      previousLabel="<"
      nextLabel=">"
      {...props}
    />
  )
}

export default PagiNation

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 8px;

  li {
    width: 30px;
    height: 30px;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: solid 1px #00ae95;
      font-family: 'Bungee Shade';
      color: #00ae95;
      box-shadow: -2px 2px 0px 0px rgba(0, 174, 149, 1);
      margin: 0 0 2px 2px;
      border-radius: 8px;
      line-height: 1;

      &:hover {
        transform: translate(-2px, 2px);
        box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
      }
    }

    &.selected {
      a {
        pointer-events: none;
        background-color: #00ae95;
        color: #fff;
        transform: translate(-2px, 2px);
        box-shadow: 0px 0px 0px 0px rgba(0, 174, 149, 1);
      }
    }
  }
`
