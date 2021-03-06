import * as React from 'react';
import { IPagination } from 'types';

const defaultOptions: IPagination = {
  pageLimit: 20,
  currentPage: 1,
};

const usePagination = (data: any[], options?: IPagination) => {
  const optionOverrides: IPagination = options ? { ...defaultOptions, ...options } : defaultOptions;
  const [recordsPerPage, setRecordsPerPage] = React.useState(optionOverrides.pageLimit);
  const [currentPage, setCurrentPage] = React.useState(optionOverrides.currentPage);

  const offset = ((currentPage as number) - 1) * (recordsPerPage as number);
  const paginatedData =
    offset > data.length
      ? data.slice(0, 0 + (recordsPerPage as number))
      : data.slice(offset, offset + (recordsPerPage as number));

  function handlePageChange(pageData: IPagination) {
    setRecordsPerPage(+(pageData.pageLimit as number));
    setCurrentPage(pageData.currentPage);
  }

  return {
    paginatedData,
    paginationConfig: {
      ...optionOverrides,
      onPageChange: handlePageChange,
      totalRecords: data.length,
    },
  };
};

export default usePagination;
