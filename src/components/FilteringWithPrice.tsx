import React from "react";
import { onFilteringWithPrice } from "../services/FilterFuntionAdapter";

type Props = {
  value: any[];
  setHighPrice: any;
  highPrice: any;
  setLowPrice: any;
  lowPrice: any;
};

const FilteringWithPrice = ({
  value,
  setHighPrice,
  highPrice,
  lowPrice,
  setLowPrice,
}: Props) => {
  return (
    <>
      {value.map((price) => (
        <div>
          <input
            type="radio"
            name="price"
            id={price}
            value={price}
            className="mr-4 w-4 h-4"
            onChange={(e) =>
              onFilteringWithPrice(
                price,
                lowPrice,
                setLowPrice,
                highPrice,
                setHighPrice,
                e.target.checked
              )
            }
          />
          <p className="inline font-light">
            $ {price.split(",")[0]} -{" "}
            {price.split(",")[1] ? price.split(",")[1] : "above"}
          </p>
        </div>
      ))}
    </>
  );
};

export default FilteringWithPrice;
