'use client'; 

import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation.js";

const data = require('../../../data/flights.js');


const FlightProperties = ({setResultsCount}) => {
  const [flightsData, setFlightsData] = useState([data.data]);
  const filter = useSelector((state)=> state.flightFilter)
  const auth_token = Cookies.get('auth_token')
  const router = useRouter();

  useEffect(()=>{
    let inputData = {
      "currencyCode": "USD",
      "originDestinations": [
        {
          "id": "1",
          "originLocationCode": filter.flyingFrom,
          "destinationLocationCode": filter.flyingTo,
          "departureDateTimeRange": {
            "date": filter.departDate
          }
        }
      ],
      "travelers": [
        {
          "id": "1",
          "travelerType": "ADULT"
        }
      ],
      "sources": [
        "GDS"
      ],
      "searchCriteria": {
        "flightFilters": {
          "cabinRestrictions": [
            {
              "cabin": 'BUSINESS',
              "originDestinationIds": [
                "1"
              ]
            }
          ]
        }
      }
    };

    const flightSearch = async()=>{
      await fetch('https://test.api.amadeus.com/v2/shopping/flight-offers', {
        method: 'POST',
          headers:{
              Authorization: `Bearer ${auth_token}`,
              'Content-Type': 'application/json'
          },
          body:JSON.stringify(inputData)
      })
      .then(resp => resp.json())
      .then(data=> {
        setResultsCount(data.meta.count);
        setFlightsData(data.data)
      });
    };
    flightSearch();
  }, [filter]);

  const handleBooking =()=>{
    console.log()
    router.push('/booking-page')
  }
  console.log(flightsData)
  return (
    <>
    {flightsData?.map((item)=>(
      <div className="js-accordion" key={Math.random()}>
          <div className=" py-30 px-30 bg-white rounded-4 base-tr mt-30" key={Math.random()}>
              <div className="row y-gap-30 justify-between" key={Math.random()}>
                <div className="col" key={item.id}>
                  {item?.itineraries?.map((itnry,index)=> (
                    <div className="row y-gap-10 items-center pt-15" key={index}>
                        {itnry?.segments?.map(seg=>(
                          <div className="row y-gap-10 items-center">
                              <div key={seg.index} className="col-sm-auto">
                                <img className="size-40" src="/img/flightIcons/1.png" alt="image"/>
                              </div>
                              <div className="col" key={Math.random()}>
                                <div className="row x-gap-20 items-end" key={Math.random()}>
                                  <div className="col-auto" key={Math.random()}>
                                      <div className="lh-15 fw-500">{seg?.arrival?.at?.split('T')[1]}</div>
                                      <div className="text-15 lh-15 text-light-1">{seg?.arrival?.iataCode}</div>
                                  </div>
                                  <div className="col text-center" key={Math.random()}>
                                      <div className="flightLine" key={Math.random()}>
                                          <div />
                                          <div />
                                      </div>
                                      <div className="text-15 lh-15 text-light-1 mt-10"key={Math.random()}>Stops {seg?.numberOfStops}</div>
                                  </div>
                                  <div className="col-auto" key={Math.random()}>
                                      <div className="lh-15 fw-500">{seg?.departure?.at?.split('T')[1]}</div>
                                      <div className="text-15 lh-15 text-light-1">{seg?.departure?.iataCode}</div>
                                  </div>
                                </div>
                              </div>
                          </div>
                        ))}
                        <div className="col-md-auto" key={Math.random()} >
                          <div className="text-15 text-light-1 px-20 md:px-0" key={Math.random()}>
                            {itnry?.duration?.split('T')[1]}
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-auto">
                <div className="d-flex items-center h-full">
                  <div className="pl-30 border-left-light h-full md:d-none" />
                      <div>
                          <div className="text-right md:text-left mb-10">
                            <div className="text-18 lh-16 fw-500">US$ {item?.price?.total}</div>
                            <div className="text-15 lh-16 text-light-1">16 deals</div>
                          </div>
                          <div className="accordion__button">
                              <button className="button -dark-1 px-30 h-50 bg-blue-1 text-white" onClick={handleBooking} key={item.id}>
                                    View More <div className="icon-arrow-top-right ml-15" />
                                </button>
                            </div>
                      </div>
                </div>
              </div>
          </div>
      </div>
    ))}
      
    </>
  );
};

export default FlightProperties;
