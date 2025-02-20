
'use client'
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import FlyingFromLocation from "./FlyingFromLocation";
import FlyingToLocation from "./FlyingToLocation";

import { useSelector, useDispatch } from "react-redux";
import { setDepart_date, setReturn_date} from '../../features/flight/flightFilterSlice';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


const MainFilterSearchBox = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [Auth, setAuth] = useState(false)

  useEffect(()=>{
      if(Cookies.get('jwt_token')){setAuth(true) }
    },[])

  return (
    <>
      <div className="mainSearch -col-4 -w-1070 bg-white shadow-1 rounded-4 pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 mt-15">
        <div className="button-grid items-center">
          <FlyingFromLocation />
          {/* End Location Flying From */}

          <FlyingToLocation />
          {/* End Location Flying To */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Depart</h4>
              <DateSearch setDate={(date)=> dispatch(setDepart_date(date))} />
            </div>
          </div>
          {/* End Depart */}

          <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Return</h4>
              <DateSearch setDate={(date)=> dispatch(setReturn_date(date))}/>
            </div>
          </div>
          {/* End Return */}

          <GuestSearch />
          {/* End guest */}

          <div className="button-item">
            <button
              className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-dark-1 text-white"
              onClick={() => {Auth? router.push("/flight-list-v1"): router.push('/login')}}>
              <i className="icon-search text-20 mr-10" />
              Search
            </button>
          </div>
          {/* End search button_item */}
        </div>
      </div>
      {/* End .mainSearch */}
    </>
  );
};

export default MainFilterSearchBox;
