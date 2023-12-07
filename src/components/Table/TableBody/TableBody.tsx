import "./TableBody.scss";
import { ReactNode } from "react";
import { CellContext, ColumnDefTemplate, Table } from "@tanstack/react-table";
import Loader from "../../Loader/Loader";
import Spinner from "../../Spinner/Spinner";

interface ITableBody {
  table: Table<unknown>;
  isLoading: boolean;
  getRow: (rowId: unknown) => void;
  flexRender: (
    cell: ColumnDefTemplate<CellContext<unknown, unknown>> | undefined,
    CellContext: CellContext<unknown, unknown>
  ) => ReactNode;
}

const TableBody = ({ table, getRow, flexRender, isLoading }: ITableBody) => {
  return (
    <>
      {isLoading ? (
        <tbody className="vot__tableBody">
          <tr className="vot_loading">
            <Spinner />
          </tr>
        </tbody>
      ) : table.getRowModel().rows.length >= 1 ? (
        <tbody className="vot__tableBody">
          {table.getRowModel().rows.map((row) => {
            return (
              <tr
                className="vot__tableBodyRow"
                key={row.id}
                onClick={() => getRow(row.original)}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      ) : (
        <tbody className="vot__noResult">
          <tr>Nessun risultato</tr>
        </tbody>
      )}
    </>
  );
};

export default TableBody;
