import "./TableHeader.scss";
import { ReactNode } from "react";
import { ColumnDefTemplate, HeaderContext, Table } from "@tanstack/react-table";

interface ITableHeader {
  table: Table<unknown>;
  flexRender: (
    header: ColumnDefTemplate<HeaderContext<unknown, unknown>> | undefined,
    headerContext: HeaderContext<unknown, unknown>
  ) => ReactNode;
}

const TableHeader = ({ table, flexRender }: ITableHeader) => {
  return (
    <thead className="vot__tableHeader">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="vot__tableHeaderRow">
          {headerGroup.headers.map((header) => {
            return (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <>
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: " 🔼",
                        desc: " 🔽",
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </>
                )}
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
