//generics props problem
import { ReactNode } from "react";

interface TableProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

/**
 * 1. Here, we have a table component. It takes an array of data and a function
 * to render each row. The problem is that the type of the data is not generic. It's just `any`. We want to make it generic so that the type of the data is inferred from the `rows` prop.
 */

export const Table = <T,>(props: TableProps<T>) => {
  return (
    <table>
      <tbody>
        {props.rows.map(row => (
          <tr>{props.renderRow(row)}</tr>
        ))}
      </tbody>
    </table>
  );
};

const data = [
  {
    id: 1,
    name: "ashish",
  },
];

export const Parent = () => {
  return (
    <div>
      <Table rows={data} renderRow={row => <td>{row.name}</td>} />
    </div>
  );
};
