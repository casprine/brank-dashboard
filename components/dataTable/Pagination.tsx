import * as React from 'react';
import { CSSObject } from '@emotion/react';
// components
import { Flex, Stack } from 'components/layout';
import Icon from 'components/icon/Icon';

// theme
import theme from 'theme';

// utils
import { IPagination } from 'types';

function createRange(from: number, to: number, step: number = 1) {
  let i = from;
  const range = [];
  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

const buttonStyles: CSSObject = {
  height: '32px',
  width: '32px',
  fontSize: '14px',
  '&:focus': { outline: 'none', boxShadow: 'none', border: 'none' },
  '&:not(:last-child)': { borderRight: `1px solid ${theme.colors.gray[200]}` },
};

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

//TODO:restrict number of pages shown in pagination control
const Pagination: React.FC<IPagination> = ({
  totalRecords = 0,
  pageLimit = 10,
  pageNeighbours = 1,
  onPageChange = () => {},
  onPageLimitChange = () => {},
}) => {
  const [pageLimitState, setPageLimit] = React.useState(pageLimit);
  const [currentPage, setCurrentPage] = React.useState(1);

  const pageCount = Math.ceil(totalRecords / pageLimitState);

  function generatePageBlocks() {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (pageCount > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = pageCount - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = createRange(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = createRange(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = createRange(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, pageCount];
    }

    return createRange(1, pageCount);
  }

  function goToPage(page: number) {
    const currentPage = Math.max(0, Math.min(page, pageCount));
    setCurrentPage(currentPage);
  }

  function goToNextPage(e: any) {
    e.preventDefault();
    goToPage(currentPage + pageNeighbours * 2 + 1);
  }

  function goToPreviousPage(e: any) {
    e.preventDefault();
    goToPage(currentPage - pageNeighbours * 2 - 1);
  }

  function handlePageSelect(e: any, page: number) {
    e.preventDefault();
    goToPage(page);
  }

  React.useEffect(() => {
    onPageChange({ pageLimit: pageLimitState, currentPage: currentPage });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  React.useEffect(() => {
    onPageChange({ pageLimit: pageLimitState, currentPage: 1 });
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageLimitState]);

  return (
    <div css={{ width: '100%' }}>
      <Flex css={{ width: '100%' }} ai="center">
        <Stack spacing={8} isInline>
          <div>
            {totalRecords ? (
              <Flex
                css={{
                  height: '32px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  border: `1px solid ${theme.colors.gray[200]}`,
                  button: { ...buttonStyles },
                }}
              >
                {generatePageBlocks().map((page, index) => {
                  if (page === LEFT_PAGE) {
                    return (
                      <button key={index} onClick={goToPreviousPage}>
                        <Icon
                          size="sm"
                          color={theme.colors.gray[500]}
                          icon={['fas', 'chevron-left']}
                        ></Icon>
                      </button>
                    );
                  }
                  if (page === RIGHT_PAGE) {
                    return (
                      <button key={index} onClick={goToNextPage}>
                        <Icon
                          size="sm"
                          color={theme.colors.gray[500]}
                          icon={['fas', 'chevron-right']}
                        ></Icon>
                      </button>
                    );
                  }
                  return (
                    <button
                      css={{
                        background: currentPage === page ? theme.colors.gray[100] : 'none',
                        color:
                          currentPage === page ? theme.colors.gray[700] : theme.colors.gray[500],
                      }}
                      onClick={(e) => {
                        handlePageSelect(e, page as number);
                      }}
                      key={index}
                    >
                      {page}
                    </button>
                  );
                })}
              </Flex>
            ) : null}
          </div>
          {/* <div>
            <LegacySelect
              disabled={!totalRecords}
              css={{ width: '150px' }}
              value={pageLimitState}
              onChange={(e) => {
                setPageLimit(e.target.value);
                onPageLimitChange(e.target.value);
              }}
            >
              <option value={5}>Show 5 Records</option>
              <option value={10}>Show 10 Records</option>
              <option value={20}>Show 20 Records</option>
            </LegacySelect>
          </div> */}
          <div>
            <Flex ai="center" css={{ height: '32px' }}>
              <p css={{ fontSize: '13px' }}>
                Page{' '}
                <span css={{ fontFamily: theme.typography.fonts.bold }}>
                  {currentPage} of {pageCount}
                </span>
              </p>
            </Flex>
          </div>
        </Stack>
      </Flex>
    </div>
  );
};

export default Pagination;
