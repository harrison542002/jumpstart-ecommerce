import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSummary } from "../../services/ProductAPI";

type Props = {};

const DataSummary = (props: Props) => {
  const [totalSummary, setTotalSummary] = useState<any>(null);
  const [keys, setKeys] = useState<any>([]);
  useEffect(() => {
    getSummary().then((res) => {
      console.log(res.data);
      setTotalSummary(res.data);
      setKeys(Object.keys(res.data));
    });
  }, []);
  const capitalFirstLetter = (letter: any) =>
    letter.charAt(0).toUpperCase() + letter.slice(1);
  return (
    <div className="w-full text-purple-500">
      <p className="text-center text-3xl font-bold">Data Summary</p>
      <div className="grid grid-cols-2 mt-5">
        {totalSummary != null &&
          keys.map((key) => (
            <div className="px-20">
              <div
                className="m-auto my-3 p-3  shadow-md shadow-purple-200 rounded-md
              hover:-translate-y-3 transition-all delay-75 duration-500"
              >
                <p className="font-bold text-sm">
                  {capitalFirstLetter(key.split("_")[0]) +
                    " " +
                    capitalFirstLetter(key.split("_")[1])}
                </p>
                <p className="my-3 text-2xl font-semibold">
                  {totalSummary[key]}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default DataSummary;
