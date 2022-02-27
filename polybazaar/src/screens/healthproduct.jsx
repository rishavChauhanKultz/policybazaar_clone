import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTypes1 } from "../actions/typeActions";

import "./healthinsurance.css";
import pic from "./images/shortlist1.png"
 const Getdata=()=>{
    
    const dispatch = useDispatch();

    const typesstate1 = useSelector((state) => state.getAllTypeReducers1);

    const types = typesstate1.types;
    console.log(types);

// const [data,setData]=useState([])
    useEffect(() => {
        dispatch(getAllTypes1());
      }, []);

return(
      types.map((e,i)=>(
      <div className="productdiv">
<div className="_innerdiv">
    
    <div className="_plan _plan1" >
        <img className="_imgcompany" src={e.image} />
    </div>

    <div className="_plan" >
      <span className="_moreplan">More Plans</span> 
    </div>

</div>
<div className="_innerdiv1">
<div className="_plandetails">
        <div className="_planname"><span className="_spanplan">{e.planname}</span></div>
        <div className="_plancover">
            <div className="_plancover1">
                <span className="_covertxt">Cover</span><br/>
                <span className="_spancover">{e.cover}</span>
            </div>
            <div className="_plancover2">
                <span className="_cash">Cashless Hospitals</span><br/>
                <span className="">{e.cashless_hospital}</span>
            </div>
            <div>

            </div>
        </div>
        <div className="_planbutton">
            <div className="_paybutton"> {e.monthly_premium}/month</div>
            <div className="_payannually">{e.annually_premium} annually</div>
        </div>
        <div className="_planshortlist">
            <img className="_pic" src={pic}></img>
        </div>
        </div>
<hr className="_planhr"/>
<div className="_compare">
<input type="checkbox" className="_compareinput"/> <span className="_spancompare">Add to compare</span>
</div>
</div>

      </div>
      ))
)
}
export default Getdata