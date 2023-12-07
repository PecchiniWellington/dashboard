import "./Table.scss";
import React from "react";

import {
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  FilterFn,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";

import TableBody from "./TableBody/TableBody";
import TableFooter from "./TableFooter/TableFooter";
import TableHeader from "./TableHeader/TableHeader";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import { ISystem } from "../../models/system.models";

declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

type eventHandleChange<T extends HTMLElement> = (
  event: React.ChangeEvent<T>
) => void;

type Change<T extends HTMLElement> = eventHandleChange<T>;

interface ITable {
  dataTable: unknown[];
  dispatchEvent?: ((args: unknown) => Promise<void>) | ((e: any) => void);
  onChangePage?: (e: unknown | any) => void;
  showFooter?: boolean;
  tableHeader: { label: string; key: string }[];
  isLoading: boolean;
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({
    itemRank,
  });

  return itemRank.passed;
};

const CustomTable = ({
  dataTable,
  dispatchEvent,
  onChangePage,
  showFooter = false,
  tableHeader,
  isLoading,
}: ITable) => {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [data, setData] = React.useState<any[]>(() => dataTable);

  const columns = React.useMemo<ColumnDef<any>[]>(
    () =>
      tableHeader.map((column: { key: string; label: string }) => {
        return {
          accessorFn: (row) => row[column.key],
          id: column.key,
          cell: (info) => info.getValue(),
          header: () => <span>{column.label}</span>,
        };
      }),

    [tableHeader]
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  React.useEffect(() => {
    setData(dataTable);
    if (table.getState().columnFilters[0]?.id === "fullName") {
      if (table.getState().sorting[0]?.id !== "fullName") {
        table.setSorting([{ id: "fullName", desc: false }]);
      }
    }
  }, [dataTable, table]);

  const getRow = (row: any) => {
    dispatchEvent(row);
  };

  const changePage = (pages: any) => {
    onChangePage(pages);
  };

  return (
    <div className="p-2 vot__customTable">
      <table className="vot__customTableContainer">
        <TableHeader table={table} flexRender={flexRender}></TableHeader>

        <TableBody
          isLoading={isLoading}
          table={table}
          getRow={getRow}
          flexRender={flexRender}
        ></TableBody>
      </table>
      {showFooter ? (
        <TableFooter
          dispatchEvent={(e) => changePage(e)}
          table={table}
        ></TableFooter>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default CustomTable;
