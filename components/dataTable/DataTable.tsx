import React from 'react';
import { TableRow } from './TableRow';
import Cell from './Cell';
import { Flex } from 'components/layout';
import Empty, { IEmptyProps } from './Empty';
import { Separator } from 'components/common';
// import Pagination from './Pagination';
import { usePagination } from 'hooks';
import theme from 'theme';
import Loader from 'components/Loader/Loader';
import { ITable } from 'types';
import { CSSObject } from '@emotion/react';

export interface ITableAction {
  className?: string;
  label: string;
  path?: string;
  action?(data?: any): void;
}

export interface ITableColumn {
  title: string;
  dataIndex: string;
  key: string;
  render?(cellData?: any, rowData?: any): any;
  cellStyle?: CSSObject | {};
  span?: number;
}

interface IDataTable extends ITable {
  className?: string;
  columns?: ITableColumn[];
  data?: any[];
  actions?: ITableAction[];
  isEmpty?: boolean;
  isLoading?: boolean;
  hasBorder?: boolean;
  showHeadings?: boolean;
  showHeader?: boolean;
  searchPlaceholder?: string;
  showDateFilter?: boolean;
  onRowSelect?(rowItem: any): void;
  emptyScreenText?: string;
  emptyStateRender?: any;
  emptyStateProps?: IEmptyProps;
  showTypeFilter?: boolean;
}

const DataTable: React.FC<IDataTable> = ({
  title,
  columns,
  data = [],
  paginationOptions,
  actions,
  isLoading = false,
  className,
  hasBorder = true,
  showHeadings = true,
  onRowSelect,
  showHeader = true,
  showDateFilter = false,
  // showPagination = true,
  emptyStateProps,
}) => {
  const headings = columns?.map((column) => {
    return column.title;
  });

  const { paginatedData } = usePagination(data, paginationOptions);

  return (
    <div
      css={{
        width: '100%',
        background: theme.colors.white,
      }}
      className={className}
    >
      {showHeader && (
        <Flex css={{ paddingBottom: 20 }} jc="space-between" ai="center">
          {title && (
            <Flex className="title-container">
              <h4
                css={{
                  color: theme.colors.secondary,
                  fontSize: 18,
                  fontFamily: theme.typography.fonts.sans,
                  fontWeight: 600,
                }}
              >
                {title}
              </h4>
            </Flex>
          )}
        </Flex>
      )}

      <Separator gap={0} className="header-seperator" />
      {!isLoading && data.length > 0 && (
        <div>
          <div css={{ maxWidth: '100%' }}>
            <table
              css={{
                borderSpacing: '0px',
                width: '100%',
                borderCollapse: 'collapse',
              }}
            >
              {showHeadings && (
                <thead>
                  <tr
                    css={{
                      borderBottom: `1px solid ${theme.colors.gray[100]}`,
                    }}
                  >
                    {headings?.map((heading, index) => {
                      return (
                        <Cell
                          css={{
                            borderBottom: `1px solid ${theme.colors.gray[100]}`,
                            paddingLeft: '0',
                          }}
                          index={hasBorder ? index : 6}
                          key={index}
                          isHeader={true}
                        >
                          {heading}
                        </Cell>
                      );
                    })}
                    {actions && <Cell isHeader>Actions</Cell>}
                  </tr>
                </thead>
              )}

              <tbody>
                {paginatedData.map((item, index) => {
                  return (
                    <TableRow
                      onClick={onRowSelect ? () => onRowSelect(item) : () => {}}
                      key={index}
                      css={{
                        td: {
                          paddingLeft: '0',
                        },
                      }}
                    >
                      {columns?.map((column, index) => {
                        if (column.render) {
                          return (
                            <Cell
                              span={column.span}
                              styles={column?.cellStyle}
                              index={hasBorder ? index : 6}
                              key={index}
                            >
                              {column.render(item[column.dataIndex], item)}
                            </Cell>
                          );
                        }
                        return (
                          <Cell
                            span={column.span}
                            styles={column?.cellStyle}
                            index={index}
                            key={index}
                          >
                            {item[column.dataIndex]}
                          </Cell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Separator gap={0} />
          {/* {paginationConfig?.totalRecords && showPagination ? (
            <Flex css={{ padding: hasBorder ? '12px 0px' : '12px 0' }}>
              <Pagination
                totalRecords={paginationConfig?.totalRecords}
                pageLimit={paginationConfig?.pageLimit}
                onPageChange={paginationConfig?.onPageChange}
                onPageLimitChange={paginationConfig?.onPageLimitChange}
              />
            </Flex>
          ) : null} */}
        </div>
      )}
      {!isLoading && data.length === 0 && (
        <Flex css={{ minHeight: 250 }} jc="flex-start">
          <Empty
            {...emptyStateProps}
            text={
              emptyStateProps?.text
                ? emptyStateProps.text
                : showDateFilter && data
                ? `You have no ${title?.toLowerCase()} for this period`
                : `You have no ${title?.toLowerCase()}`
            }
          />
        </Flex>
      )}
      {isLoading && (
        <Flex ai="center" jc="center" css={{ height: '200px' }}>
          <Loader
            size="small"
            color={theme.colors.secondary}
            scheme="light"
            label={`Loading ${title?.toLowerCase()}`}
          />
        </Flex>
      )}
    </div>
  );
};

export default DataTable;
