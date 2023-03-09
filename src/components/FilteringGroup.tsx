import React from "react";
import { onFiltering } from "../services/FilterFuntionAdapter";

type Props = {
  type: any;
  setType: any;
  values: string[];
};

function FilteringGroup({ type, setType, values }: Props) {
  return (
    <>
      {values.map((value) => (
        <>
          <div>
            <input
              type="checkbox"
              name={value}
              id={value}
              value={value}
              className="mr-4 w-4 h-4"
              defaultChecked={type?.includes(value)}
              onChange={(e) =>
                onFiltering(e.target.value, e.target.checked, type, setType)
              }
            />
            <p className="inline font-light">{value}</p>
          </div>
        </>
      ))}
    </>
  );
}

export default FilteringGroup;
