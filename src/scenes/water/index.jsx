import React, {useState} from 'react'
import './water.css'

const Water = () => {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    const [meterNo, setMeterNo]= useState("")
    const [amount, setAmount]= useState("")
    //const publicKey= process.env.REACT_APP_PAYSTACK_KEY
    const actualAmount = amount*100

    const inputStyles = `mb-5 border-solid border border-[#273f1c] w-full rounded-lg px-5 py-3 placeholder-white`;

    const onSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    
    <>
    <section className='mx-auto w-5/6 pt-18 pb-32 buy-section'>
        <h2 className='electicity-header'>Buy Water</h2>

        <div className='form-section md:w-2/4 mt-8'>
        <form onSubmit={onSubmit} >
                <label>Name</label>
                <input className={inputStyles} label="name" placeholder="FullName" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Email</label>
                <input className={inputStyles} label="email" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>Phone Number</label>
                <input className={inputStyles} label="phone" placeholder="Phone Number" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <label>Water Meter Number</label>
                <input className={inputStyles} label="meter" placeholder="Meter Number" type="text" value={meterNo} onChange={(e)=>setMeterNo(e.target.value)}/>
                
                <label>Amount</label>
                <input className={inputStyles} label="amount" placeholder="Amount" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>

                <button className='pay-button bg-[#273f1c]' type="submit">Make Payment</button>
                
                
            </form>
            </div>
    </section>
    </>
  )
}

export default Water