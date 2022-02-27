import React from "react";
import "./healthinsurance.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Editmembers from "./images/Editmembers.png";
import shortlist from "./images/shortlist.png"
import Getdata from "./healthproduct";

export const Health=()=>{

    return(
            <div className="div_1">
<div className="idiv_1">
        <div className="showing_plans">
                <span className="heading_1">Showing 92 plans for Self (27 Yrs)</span>
                <span className="info"><InfoOutlinedIcon fontSize="2px"/></span>
        </div>
                <div className="Edit_members">
                        <span className="_shortlist"><img src={shortlist}></img></span>
                        <span className="_Edit"><img src={Editmembers} ></img></span> 
                </div>
</div>
<hr/>
<div className="idiv_2">
<div className="_quickfilters">
<span className="quickspan">Quick filters</span>
</div>
        <div className="filters">
                <div className="_cover id1">
                <select name="coveramount" className="idi2">
                        <option selected disabled>Cover</option>
                        <option value="5L">5L</option>
                        <option value="10L">10L</option>
                        <option value="1cr">1cr</option>
                </select>
                </div>
                <div className="_cover id1">
                        Discount
                </div>
                <div className="_cover id1">
                <select name="coveramount" className="idi2">
                        <option selected disabled>Sort By</option>
                        <option value="low to high">low to high</option>
                        <option value="high to low">high to low</option>
                        <option value="Cashless hopitals">Cashless hopitals</option>
                </select>
                </div>
                <div className="_cover id2">
                        No room rent limit
                </div>
                <div className="_cover id3">
                        1 crore cover
                </div>
                <div className="_cover id3">
                <select name="coveramount" className="idi2">
                        <option selected disabled>Plan Type</option>
                        <option value="Base Plan">Base Plan</option>
                        <option value="Arogya sanjeevani">Arogya sanjeevani</option>
                        <option value="Medi Classic">Medi Classic</option>
                        <option value="1cr">1cr</option>
                </select>
                </div>
                <div className="_cover id3">
                Insurer
                </div>
        </div>
        <div className="Allfilters">
              <div className="_allfilters"> All filters</div> 
        </div>
</div>
<div className="_plandiv">
<Getdata/>
</div>
        
            </div>
    )
}

