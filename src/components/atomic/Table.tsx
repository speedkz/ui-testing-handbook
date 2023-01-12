import { Skeleton } from "@chakra-ui/skeleton";
interface IHeader {
  text: string;
  value: string;
  width: number | string;
}
export interface ITable {
  headers: IHeader[];
  items: any[];
  loading: boolean;
}

export const Table = (props: ITable) => {
  const { headers = [], items = [], loading } = props;
  return (
    <div className="base-table flex justify-center overflow-hidden">
      {loading ? (
        <div className="flex flex-col gap-4 w-full p-4">
          <Skeleton height={9} />
          {[...Array(5).keys()].map(() => (
            <Skeleton height={5} />
          ))}
        </div>
      ) : (
        <>
          {Boolean(items.length) ? (
            <table className="w-full">
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
