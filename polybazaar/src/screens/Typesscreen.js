import React from "react";

import "./types.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes } from "../actions/typeActions";
import { useNavigate } from "react-router-dom";




const Typesscreen = () => {
 const navigate=useNavigate()
   
  const typesstate = useSelector((state) => state.getAllTypeReducers);

  const types = typesstate.types;
  console.log(typesstate.types);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllTypes());
  }, []);

  const handleClick=(e)=>{
   
    const policydata={
      age:e.policyAge,
      value:e.policyValue,
      price:e.montlyPrice
    }
localStorage.setItem("policydata",JSON.stringify(policydata))
    navigate("/Termlife")
  }


  return (
    <div className="App">
      {/* ------------------sorting button---------------------------- */}
      <div className="sortingButtonDiv">
        <button className="sortingButton">Insurer</button>
        <button className="sortingButton">Benefits</button>
        <button className="sortingButton">cover till age</button>
        <button className="sortingButton">claim settled*</button>
        <button className="sortingButton">pay montly</button>
      </div>
      {/* ------------conatiner-------------- */}
      <div className="row">
        {/* -------------------left side------------------- */}
        <div className="col-sm-8">
          {types.map((e) => (
            //  -------------------maping data from termLifeInnsurance.json file-----------------------------

            <div key={e._id} className="policyDiv">
              <div className="policyDivInside">
                <img src={e.brandLogo} alt="" className="brandLogo" />
                <div className="brandName">{e.brandName}</div>
                <div className="hrLogo">
                  <img src={e.hrLogo} alt="" /> 24hr claim settlement
                </div>
              </div>
              <div className="policyDivInside">
                <div className="cr">1Cr</div>
              </div>
              <div className="policyDivInside">
                <div className="cr">60yr</div>
              </div>
              <div className="policyDivInside">
                <div className="cr">{e.SettlmentPercentage}</div>
              </div>
              <div className="policyDivInside">
                <div className="saving">Buy Online & Save {e.savingUpTo} </div>
                <button onClick={(e_id)=>handleClick(e)} className="montlyPrice">{e.montlyPrice}</button>
              </div>
            </div>
          ))}
        </div>
        {/* ---------------right side---------------------- */}
        <div className="col-sm-4">
          <div className="policyAds">
            {/* first ad of the page right side */}
            <div className="policyads-1">
              <h2 className="policyAdshead">Why buy from Policybazaar?</h2>
              <ul>
                <li>Best Prices</li>
                <li>Dedicated Claim Assistance</li>
                <li>One click easy refunds</li>
              </ul>
              <a href="" className="policyads-a">
                Know more
              </a>
              <img
                className="policyAdsImg"
                src="https://termlife.policybazaar.com/family_adv.bfefdf35861e99b3d3dd.png"
                alt=""
              />
            </div>
            <div className="policyAdsMiddle"></div>
            <div className="policyads-1">
              <h2 className="policyAdshead">Why buy from Policybazaar?</h2>
              <ul>
                <li>
                  Policybazaar Guarantees</li> <li> claim support for your </li> <li> family in those
                  difficult times
                </li>
              </ul>
              <a href="" className="policyads-a">
                Know more
              </a>
              <img
                className="policyAdsImg2"
                src="https://termlife.policybazaar.com/assistance.26f974d931ef801c2b85.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typesscreen;
