import React from 'react'
import "./payment.css"

const Payment = () => {


    const handleclick=()=>{
        window.location.href="/";
    }

  return (
  
    <div className="App">
    <div>
     <div className="container">
       {/* heading of the payment gateway */}
       <h4 className="detailsHeader">Choose payment mode</h4>
       {/* whole container */}
       <div className="row">
         {/* left side of the the container */}
         <div className="leftSide">
           {/* payment option box */}
           <div className="leftSideLeft">
             <div className="paymentOptions" onclick="myFunction(this)"><img style={{marginRight:"10px"}} src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/50/000000/external-debit-card-accounting-smashingstocks-detailed-outline-smashing-stocks.png" /> Debit Card</div>
             <div className="paymentOptions"><img style={{marginRight:"12px"}}className="icon" src="https://pixlok.com/wp-content/uploads/2021/10/Icon-Banking-93ncs3.png" alt="" />Net Banking</div>
             <div className="paymentOptions"><img style={{marginRight:"12px"}} className="icon" src="https://cdn-icons-png.flaticon.com/512/62/62780.png" alt="" /> credit card</div>
             <div style={{marginLeft:"-20px"}} className="paymentOptions"><img style={{marginRight:"10px"}} className="icon" src="https://cdn.iconscout.com/icon/free/png-256/upi-money-transfer-1817247-1538121.png" alt="" /> UPI <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
           </div>
           <div className="leftSideRight">
             <h5 className="detailsHeader">Debit card details</h5>
             <div className="line" />
             {/* input section of the payment  */}
             <div className="cardNameAndImgDiv">
               <div className="insideCardNameAndImgDiv">
                 <label htmlFor="cardNumber">Card Number</label> <br />
                 <input type="text" name="cardNumber" /><br />
               </div>
               <img className="paymentImg" src="https://bhejo.co/wp-content/uploads/2018/08/payment.png" alt="" />
             </div>
             <div style={{textAlign:"start"}}>
             <label htmlFor="cardName">Card Name</label>
             <br />
             <input  type="text" name="cardName" />
             </div>
             <div className="cardDetails">
               <div className>
                 <div>expire date</div>
                 <select className="optionValue" id="month" name="MM">
                   <option>MM</option>
                   <option value="">January</option>
                   <option value="">February</option>
                   <option value="">March</option>
                   <option value="">April</option>
                   {/* <option value={05}>May</option>
                   <option value={06}>June</option>
                   <option value={07}>July</option>
                   <option value={08}>August</option>
                   <option value={09}>September</option>
                   <option value={10}>October</option>
                   <option value={11}>November</option>
                   <option value={12}>December</option> */}
                 </select>
               </div>
               <div className="cvvDiv">
                 <div>expire year</div>
                 <select className="optionValue" id="month" name="MM">
                   <option>YY</option>
                   <option value={2022}>2022</option>
                   <option value={2021}>2021</option>
                   <option value={2020}>2020</option>
                   <option value={2019}>2019</option>
                   <option value={2018}>2018</option>
                   <option value={2017}>2017</option>
                   <option value={2016}>2016</option>
                   <option value={2015}>2015</option>
                   <option value={2014}>2014</option>
                   <option value={2013}>2013</option>
                   <option value={2012}>2012</option>
                   <option value={2011}>2011</option>
                 </select>
               </div>
               <div className="cvvDiv">
                 <div>cvv</div>
                 <input className="cvv" type="text" />
               </div>
             </div>
             <button onClick={handleclick} className="paymentButton">payment</button>
           </div>
         </div>
         {/* policy details page */}
         <div className="rightSide">
           <div className="rightTopDiv">
             <h4>personal's details</h4>
             <div>
               <div><img style={{margin:"10px"}}className="icon" src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="" /> ri****rv18@gmail.com</div>
               <div style={{marginRight:"60px"}}><img style={{margin:"10px"}} className="icon" src="https://cdn0.iconfinder.com/data/icons/communication-166/512/12-512.png" alt="" /> 83*****653</div>
             </div>
           </div>
           <div className="rightMiddleDiv" />
           <div className="rightBottomDiv">
             <div className="policyDetails">
               <div>Your Cart</div>
               <div className="orderNo">Order no:PB123456</div>
             </div>
             <div className="line" />
             <div className="policy">
               <img className="brandLogoI" src="https://static.pbcdn.in/term-cdn/images/images/insurer/ICICI_logo.png" alt="" />
               <div className="policyName">ismart policy<br />
                 iprotect smart revise montly<br />
                 income
               </div>
               <div>
                 <div />
                 <div />
                 <div />
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* ----------------bottom image of the payment ----------------*/}
     <img 
      className="certifiedLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsntZ4LhocRXUuTBoWjGRNpiSImxtjU7K_wYI713BGyFrDTtw3eQwtKfutrjeggNdkkc&usqp=CAU" alt="" />
   </div>
 </div>
)

  
}

export default Payment
