import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { buttonData } from "../../data/data";
import { authUrl, sandboxUrl, productionSandBox } from "../../data/const";

const SoftwareButton = () => {
  const navigate = useNavigate();

  // const config = {
  //   headers: {
  //     Accept: "application/json",
  //     Authorization:
  //       "Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..3iWb1u3YnyVYFw4Tlaqcfg.atjV4Z3YR2RSO5k1Ure7v1kLA2MmoZQO1jOrUbmI4pTkuSox6fFqw82R_Kc-YR8GYfUaZ5C4jQjsogOUzC98vGaNWtg8WIQQo9Ogqs4cxMZ-iFi6B8b_KAKo28DFpGieG2NrM58P2zjAWLucc2P9X2QJA7X9Tb_06cTuRLCcT83WHmaSWZ85XsVJfe8y1NGnqZW4WgN6R9WGORWwDs35Ih8wq9IZALDIv-Zle-QPkNomZL4lICH_7vee7v-LAbEMIeaU4PvcE3mxI8qW9_ZVi4nitKF5gblADVnbzOBsJastKgqP1nKqgh1CWOQoS2WdURBeTnjlhpPbTbTyqbcIjEN15YBecx9fRNug7hrkN6eqIIyqqIxQ3oqR1dnnJYutimaSgUKBeTaZxcxH2CL75nln6f55UIe766s_YayfXhuwXrYLxIhvT2ZNM6z5NaZBPjyFPq8Nq9GL0t7CAtnhCzVAloiExn6AUdBCEylDbBZi1694u6W54PW-CHp2h4GYbY5XnoDZQZRoEU5Qr_7U3ZuWC6Q7vLALy3fiNxoLaKRdYvRU7gkY6UARfRHCE_DX4yIfTHohybqnpEyo-ZwLGrVJ5blD7yUK4wt_Nv8k5jv9j0Bz9-xGiwi-9Sm42_YVrvrOjYstq7nPbXwheH5kOwC84bkKsosYJJBxFT4AQB_M8XVVJpyTzqGScDNvQaidAHTPXCzBfT4XUS51uv1LvFxG81EtRnmuYKkFyMFBIdDPIrLVnC4yCbKC0mgZW2LT._4jP9PiswbEaES6NNdDXVg",
  //   },
  // };

  // const getToken = () => {
  //   axios
  //     .get(
  //       "https://backend-codat.herokuapp.com/api/fetchQuickBookInvoice/4620816365253336770",
  //       config
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const selectAuth = (data) => {
    // getToken();
    if (data?.name === "sandbox") {
      navigate("/add-company", { state: data?.name });
    }
    if (data?.name === "quickbooksonline") {
      window.open(
        authUrl,
        "",
        "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
      );
    }
  };

  return (
    <div>
      <div className="mt-10 text-lg font-bold">
        Please Select Accounting Software you can use to connect
      </div>
      <div className="flex flex-wrap">
        {buttonData.map((data, idx) => {
          return (
            <div
              key={idx}
              className="mr-16 mt-5 w-40"
              onClick={() => selectAuth(data)}
            >
              <img
                className={`bg-white p-2  rounded-lg object-fill ${
                  idx === 4 || idx === 3
                    ? "opacity-100 drop-shadow-lg cursor-pointer"
                    : "opacity-40"
                }`}
                src={data?.imgSrc}
                alt="logo"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareButton;
