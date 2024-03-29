// ** MUI Imports
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from 'mdi-material-ui/FilterOutline';
import SortIcon from 'mdi-material-ui/Sort';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

// ** Next.js Imports
import { useRouter } from 'next/router';
import { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

interface SortOption {
  key: string;
  onSortChange: (key: string, direction: 'ASC' | 'DESC') => void;
}

interface ActionButton {
  color?: ThemeColor;
  title: string;
  onClick: (item: any) => void;
  style?: React.CSSProperties;
}

interface DashboardTableProps {
  items: Record<string, any>[];
  statusObj: Record<string, ThemeColor>;
  onPageChange: (page: number) => void;
  onRowClick: (item: any) => void;
  totalItems: number;
  itemsPerPage: number;
  columnFilters?: Record<string, FilterOption[]>;
  onFilterChange?: (key: string, value: string) => void;
  sortOptions?: Record<string, SortOption>;
  actions?: ActionButton[];
  onSearch?: (query: string) => void;
  enableSearch?: boolean;
}

const DashboardTable: React.FC<DashboardTableProps> = ({
  items,
  statusObj,
  onPageChange,
  onRowClick,
  totalItems,
  itemsPerPage,
  columnFilters,
  onFilterChange,
  sortOptions,
  actions,
  onSearch,
  enableSearch = false
}) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [sortState, setSortState] = useState<Record<string, 'ASC' | 'DESC'>>(
    {}
  );
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  const handleFilterClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    column: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveFilter(column);
  };

  const handleFilterSelect = (filterValue: string) => {
    const newQuery = { ...router.query, [activeFilter]: filterValue };
    router.push({ pathname: router.pathname, query: newQuery }, undefined, {
      shallow: true
    });
    if (onFilterChange) {
      onFilterChange(activeFilter, filterValue);
    }
    handleFilterClose();
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
    setActiveFilter('');
  };

  const toggleSort = (key: string) => {
    const direction = sortState[key] === 'ASC' ? 'DESC' : 'ASC';
    setSortState({ ...sortState, [key]: direction });
    if (
      sortOptions &&
      sortOptions[key] &&
      (sortOptions[key].onSortChange as any)
    ) {
      sortOptions[key].onSortChange(key, direction);
    }
  };

  const renderFilterIcon = (column: string) => (
    <IconButton
      aria-label="filter list"
      size="small"
      onClick={(e: any) => handleFilterClick(e, column)}
    >
      <FilterListIcon fontSize="inherit" />
    </IconButton>
  );

  const renderSortIcon = (column: string) => (
    <IconButton
      aria-label="sort"
      size="small"
      onClick={() => toggleSort(column)}
    >
      <SortIcon fontSize="inherit" />
    </IconButton>
  );

  const renderFilterMenu = () => (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleFilterClose}
    >
      {activeFilter &&
        columnFilters &&
        columnFilters[activeFilter].map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => handleFilterSelect(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
    </Menu>
  );

  const renderCellContent = (item: any, column: string) => {
    if (statusObj && statusObj[item[column]]) {
      const value = item[column];
      return (
        <Chip
          label={value}
          color={statusObj[value]}
          sx={{
            color: '#fff',
            height: 24,
            fontSize: '0.75rem',
            '& .MuiChip-label': { fontWeight: 500 }
          }}
        />
      );
    }
    if (item[column] instanceof Date) {
      return item[column].toLocaleString();
    }
    return item[column];
  };

  return (
    <Card>
      {enableSearch && (
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          alignItems="center"
          margin={2}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Stack>
      )}
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="dashboard table">
          <TableHead>
            <TableRow>
              {Object.keys(items[0] || {}).map((column) => (
                <TableCell key={column}>
                  {column}
                  {columnFilters &&
                    columnFilters[column] &&
                    renderFilterIcon(column)}
                  {sortOptions && sortOptions[column] && renderSortIcon(column)}
                </TableCell>
              ))}
              {actions?.length! > 0 && <TableCell>Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length > 0 ? (
              items.map((item, rowIndex) => (
                <TableRow hover key={rowIndex} onClick={() => onRowClick(item)}>
                  {Object.keys(items[0]).map((column) => (
                    <TableCell key={`${rowIndex}-${column}`}>
                      {renderCellContent(item, column)}
                    </TableCell>
                  ))}
                  {actions?.length! > 0 && (
                    <TableCell>
                      {actions!.map((action, index) => (
                        <Button
                          variant="contained"
                          key={index}
                          color={action.color || 'primary'}
                          onClick={(e) => {
                            e.stopPropagation();
                            action.onClick(item);
                          }}
                          style={action.style}
                        >
                          {action.title}
                        </Button>
                      ))}
                    </TableCell>
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={
                    Object.keys(items[0] || {}).length + (actions ? 1 : 0)
                  }
                  align="center"
                >
                  There are no items.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {renderFilterMenu()}
      {totalItems > 0 && (
        <Stack
          spacing={2}
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Pagination
            count={Math.ceil(totalItems / itemsPerPage)}
            page={parseInt(router.query.page as string) || 1}
            onChange={(event: any, page: any) => onPageChange(page)}
            color="primary"
          />
        </Stack>
      )}
    </Card>
  );
};

export default DashboardTable;
