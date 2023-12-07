import "./TableFooter.scss";
import ButtonRound from "../../Buttons/ButtonRound/ButtonRound";
import { Table } from "@tanstack/react-table";
import Select from "../../Select/Select";
import { useEffect, useState } from "react";

interface ITableFooter {
  table: Table<any>;
  dispatchEvent: (e: any) => void;
}

const TableFooter = ({ table, dispatchEvent }: ITableFooter) => {
  const [page, setIndexPage] = useState({ indexPage: 1, pageLimit: 20 });

  const onPrevPage = (index?: number) => {
    table.previousPage(index);
    const p = {
      ...page,
      indexPage: page.indexPage - 1,
    };
    setIndexPage(p);
    dispatchEvent(p);
  };
  const onNextPage = () => {
    table.nextPage();
    const p = {
      ...page,
      indexPage: page.indexPage + 1,
    };
    setIndexPage(p);

    dispatchEvent(p);
  };
  const onSetPageIdx = (index: number) => {
    table.setPageIndex(index);
    const p = {
      ...page,
      indexPage: page.indexPage + index,
    };
    setIndexPage(p);
    dispatchEvent(p);
  };

  const onSetPageSize = (size: number) => {
    table.setPageSize(size);

    const p = {
      ...page,
      pageLimit: size,
    };
    setIndexPage(p);
    dispatchEvent(p);
  };

  useEffect(() => {
    table.setPageSize(20);
  }, [table]);

  return (
    <div className="vot__tableFooter">
      <ButtonRound
        disable={!table.getCanPreviousPage()}
        dispatchEvent={() => onPrevPage(0)}
      >
        {"<<"}
      </ButtonRound>
      <ButtonRound
        dispatchEvent={() => onPrevPage()}
        disable={!table.getCanPreviousPage()}
      >
        {"<"}
      </ButtonRound>
      <ButtonRound
        dispatchEvent={() => onNextPage()}
        disable={
          !table.getCanNextPage() || table.getPageCount() <= page.pageLimit
        }
      >
        {">"}
      </ButtonRound>
      <ButtonRound
        dispatchEvent={() => onSetPageIdx(table.getPageCount() - 1)}
        disable={
          !table.getCanNextPage() || table.getPageCount() <= page.pageLimit
        }
      >
        {">>"}
      </ButtonRound>
      <Select
        onChange={(e) => {
          onSetPageSize(Number(e.target.value));
        }}
        value={table.getState().pagination.pageSize}
        options={[
          { label: "20", value: 20 },
          { label: "30", value: 30 },
          { label: "40", value: 40 },
          { label: "50", value: 50 },
        ]}
        moreInfoOpt="/Pagina"
      ></Select>
    </div>
  );
};

export default TableFooter;
