import React, {useState} from 'react'
import './utilities.css'
import {Alert, Steps} from 'antd'
import { useEffect } from 'react'
import { usePaystackPayment } from 'react-paystack';
import { LoadingOutlined, CopyOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { Navigate, useNavigate } from 'react-router-dom';





const Utilities = () => {

    const [current, setCurrent] = useState(0)
    const [getOrderDetails, setGetOrderDetails]= useState({
        utility:"", phone:"", meterNo:"",amount:0
    })
    const[transaction, setTransaction]=useState()
    const onSubmitOrder=(e)=>{
        e.preventDefault()
        console.log(getOrderDetails)
        setCurrent(1)
        }
    const onSubmitReview=()=>{
        setCurrent(2)
        console.log(current)
    }
    const onVerifyPayment=(ref)=>{
        if(ref?.status)setCurrent(2)
        console.log(ref)
        
    }
    const displayPage = [
        <PickUtility getOrderDetails={getOrderDetails} setGetOrderDetails={setGetOrderDetails} onSubmit={onSubmitOrder} />,
        <ShowOrder onReviewSubmit={onSubmitReview} onVerify={onVerifyPayment} setCurrent={setCurrent} current={current} getOrderDetails={getOrderDetails}/>,
        

    ];
    


    return(
    <div className=''>
        <Steps style={{padding: "3rem 4rem"}} onChange={setCurrent} current={current} type="navigation">
            <Steps.Step title="Utility Order" />
            <Steps.Step title="Submit Order" />
            {/* <Steps.Step title="Payment Information" /> */}
            {/* <Steps.Step title="Complete Order" /> */}
        </Steps>

        {displayPage[current]}

    
    </div>
        
        )
   
}


const PickUtility=({getOrderDetails, setGetOrderDetails, onSubmit})=>{
    const utilityOptions = [
        {value:"water",
         label:"Buy Water"},
         {value:"electricity",
         label:"Buy Electricity"},

    ]
    const [limit, setLimit] = useState(0)
    const [checkDisabled, setCheckDisabled] =useState(true)
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      );
   
    // const [utility, setUtility]= useState("")
    // const [phone, setPhone]= useState("")
    // const [meterNo, setMeterNo]= useState("")
    // const [amount, setAmount]= useState(0)

    //const publicKey= process.env.REACT_APP_PAYSTACK_KEY
    // const actualAmount = amount*100

    const inputStyles = `mb-5 border-solid border border-[#273f1c] w-full rounded-lg px-5 py-3 placeholder-white`;

    const handleChange = (event) => {
        const { name, value } = event.target;
       
        if(name==="amount"){
            setGetOrderDetails((orderDetails) => ({ ...orderDetails, [name]: parseInt(value)*100 }));

        }
        if(name==="phone"){
            setLimit(11)
            setGetOrderDetails((orderDetails) => ({ ...orderDetails, [name]: value.slice(0, limit) }));
            
        }
        if(checkDisabled===false && name==="meterNo"){
            setGetOrderDetails((orderDetails) => ({ ...orderDetails, [name]: 1233343}));

        }
        else{

            setGetOrderDetails((orderDetails) => ({ ...orderDetails, [name]: value }));
        }
        
      };

    
    // const handleSelectChange=(e)=>{
    //     setUtility(e.target.value)
        
    // }

    
  return (
    
    <>
    <section className='mx-auto w-5/6 pt-18 pb-32 buy-section'>
        <h2 className='utility-header'>Buy Utilities</h2>

        <div className='form-section md:w-2/4 mt-8'>
        <form onSubmit={onSubmit} >
                <label>Utility</label>
                <select value={getOrderDetails.utility} name="utility" onChange={handleChange} className={inputStyles}>
                    {utilityOptions.map((option,i)=>(
                        <option value={option.value}>{option.label}</option>
                    ))}
               
                
                </select>
                <label>Amount</label>
                <input className={inputStyles} name="amount" placeholder="Amount" type="number" value={getOrderDetails.amount} onChange={handleChange}/>
                <label>Phone Number</label>
                <input className={inputStyles} name="phone" placeholder="Phone Number" type="text" value={getOrderDetails.phone} onChange={handleChange}/>
                {getOrderDetails?.phone.length === 11  ? (<p className='mt-[-20px] flex justify-end'>Customer Name: Alvative</p>) : getOrderDetails?.phone.length > 0 ? (<div className='mt-[-15px] flex justify-end'><Spin indicator={antIcon}/></div>):(<></>) }
                <label> Meter Number</label>
                <input className={inputStyles} disabled={getOrderDetails?.phone.length === 11 ? false:true} name="meterNo" placeholder="Meter Number" type="text" value={getOrderDetails?.phone.length === 11 ? "12345635":''} onChange={handleChange}/>
                


                <button className='pay-button bg-[#273f1c]' type="submit">Proceed to Order</button>
                
                
            </form>
            </div>
    </section>
    </>
  )
}

const ShowOrder =(onReviewSubmit, onVerify, setCurrent, current)=>{
    
    const [transaction, setTransaction]= useState({})
    const [orderData, setOrderData] = useState({})
    const [showSuccess, setShowSuccess] = useState(false)
    const navigate = useNavigate()
    const Success =(
        <Alert  message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon/>
    )

    const SuccessMessage=(
        <div className='flex items-center justify-items-center mt-3 gap-3'>

         <p className='success-message'>
            Here's your token : 1703994652167281 
         </p>
         <CopyOutlined />
        </div>
    )
    const getAllUsers = () => {
        return new Promise((resolve, reject) => {
          setTimeout(resolve({
            users: [
              { name: "Alvative", email:"alvative@alvative.com",phone:"0803445678", meterNo:"555444376", amount:200 },
              { name: "Segun", email:"alvative@alvative.com", phone:"0803445678",meterNo:"555444376", amount:200000 },
              { name: "Okiki", email:"alvative@alvative.com", phone:"0803445678",meterNo:"555444376", amount:200000 },
            
            ]
          }), Math.random() * 3000)
        })
      }
      const getTheDetails= async ()=>{
        const res = await getAllUsers()
        setOrderData(res.users[0]) 
        console.log(orderData)
      }
      useEffect(()=>{
        getTheDetails()

      },[])
      console.log(orderData)
      const config = {
        reference: (new Date()).getTime().toString(),
        email: orderData?.email,
        amount: orderData?.amount*100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_fcf329365b64e0864d0ac2b58d4c5c61aa7d7524',
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      
      setTransaction(reference)
      setShowSuccess(true)
      console.log(reference);
      setCurrent(2)
      onVerify(reference);
      console.log(current)
      
      
      
   
     
 
     


    };
    console.log(transaction)
   
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
      navigate('/utilities')
    }

    const initializePayment = usePaystackPayment(config);

      return(
        <div className="w-full mx-auto gap-5 md:pl-40 py-3">
        <div className="md:w-5/6 px-8">
            <div className=''>
                {showSuccess && (
              <Alert  message="Payment Succeessful"
                      description={SuccessMessage}
                      type="success"
                      showIcon/>

                )}

            </div>
         <div className="data-items">
            <p className="font-semibold">Customer Name</p>
            <p>{orderData?.name}</p>
          </div>
          <div className="data-items">
            <p className="font-semibold">Customer Email</p>
            <p>{orderData?.email}</p>
          </div>

          <div className="data-items">
            <p className="font-semibold">Meter Number</p>
            <p>{orderData?.meterNo}</p>
          </div>
          <div className="data-items">
            <p className="font-semibold">Phone Number</p>
            <p>{orderData?.phone}</p>
          </div>
          <div className="data-items">
            <p className="font-semibold">Amount</p>
            <p>N{orderData?.amount}</p>
          </div>
          <button onClick={()=>{
                initializePayment(onSuccess, onClose);
                onReviewSubmit;
            }} className='pay-button mb-8 sm:mt-8 bg-[#273f1c]' type="submit">Proceed to Pay</button>
        </div>
        </div>
      )



}
const VerifyPayment=()=>{

    return(
        <>
        <div>Verifying Payment...</div>
        </>

    )
  }

export default Utilities