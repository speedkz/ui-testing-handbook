import { Skeleton } from "@chakra-ui/skeleton";
import Loading from "assets/images/atomic/loading.svg";
interface IHeader {
  text: string;
  value: string;
  width: number | string;
}
export interface ITable {
  headers: IHeader[];
  items: any[];
  loading: boolean;
  skeleton?: boolean;
}

export const Table = (props: ITable) => {
  const { headers = [], items = [], loading, skeleton } = props;
  return (
    <div className="base-table flex justify-center overflow-hidden">
      {loading && skeleton ? (
        <div className="flex flex-col gap-4 w-full p-4">
          <Skeleton height={9} />
          {[...Array(5).keys()].map((x) => (
            <Skeleton height={5} key={x} />
          ))}
        </div>
      ) : (
        <>
          {loading && (
            <div className="flex justify-center items-center w-full h-full bg-loading absolute inset-0 ">
              <img src={Loading} alt="loading" className="rotate-360-cw" />
            </div>
          )}
          {Boolean(items.length) || loading ? (
            <table className="w-full">
              <Header headers={headers} />
              <Body
                headers={headers}
                items={loading ? SimulatorData(headers) : items}
              />
            </table>
          ) : (
            <div className="h-[350px] flex flex-col items-center justify-center">
              <img
                className="mb-4"
                src={require("assets/images/atomic/astronaut.png")}
                alt="astronaut"
              />
              <div className=" text-primary text-sm font-semibold">
                No data was found
              </div>
              <div className=" text-primary-text text-sm">
                Please check your request
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const Body = ({ items, headers }) => {
  return (
    <tbody>
      {items.map((item, i) => (
        <tr key={i}>
          {headers.map((header) => (
            <td
              className="text-primary-text text-sm text-left p-4 bg-white"
              key={`${header.value}-${i}`}
            >
              {item[header.value]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Header = ({ headers }: { headers: IHeader[] }) => {
  return (
    <thead>
      <tr className="bg-secondary-background">
        {headers.map((header) => (
          <th
            className="text-primary-text text-sm text-left p-4"
            key={header.value}
          >
            {header.text}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export const SimulatorData = (headers: IHeader[]) => {
  const simulatorRow = 4;
  const items = [...Array(simulatorRow).keys()].map((item) =>
    headers.reduce((acc, cur) => {
      acc[cur.value] = "--";
      return acc;
    }, {})
  );
  console.log(items);
  return items;
};
