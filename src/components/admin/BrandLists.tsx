import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../../services/AdminAPI";

type Props = {};

const BrandLists = (props: Props) => {
  const [brands, setBrands] = useState<any>([]);
  useEffect(() => {
    getBrands().then((res) => {
      setBrands(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="w-full">
      <p className="text-center text-3xl font-bold">Manage Brands</p>
      <div className="flex justify-center mt-5 mx-10">
        <table className="border-collapse border border-slate-500">
          <thead>
            <tr className="text-lg font-bold text-purple-500">
              <td className="p-3 border border-slate-500 bg-slate-100">
                S.No.
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">Name</td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Brand Email
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Contact No.
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Brand Image
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Description
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Action
              </td>
            </tr>
          </thead>
          <tbody>
            {brands.length > 0 &&
              brands.map((brand, index) => (
                <tr>
                  <td className="p-3 border border-slate-500">{index + 1}</td>
                  <td className="p-3 border border-slate-500 ">
                    {brand.brandName}
                  </td>
                  <td className="p-3 border border-slate-500">
                    {brand.brandEmail}
                  </td>
                  <td className="p-3 border border-slate-500">
                    {brand.contact}
                  </td>
                  <td className="p-3 border border-slate-500 ">
                    <img
                      src={brand.img}
                      alt={brand.brandName}
                      className="w-14"
                    />
                  </td>
                  <td className="p-3 border border-slate-500 ">
                    {brand.description}
                  </td>
                  <td className="p-3 border border-slate-500">
                    <div className="flex flex-col justify-center">
                      <Link
                        to={"/admin/edit-brand/" + brand.bid}
                        className="p-3 bg-slate-500 text-white rounded-lg w-20 my-3
                        text-center"
                      >
                        Edit
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandLists;
