import React, {useEffect, useState} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Card from "../components/Card";
import { v4 as uuidv4 } from 'uuid';
import { fetchUserData } from "../redux/features/auth/authThunks";
import { useDispatch, useSelector } from "react-redux";
import UpdateField from "../components/UpdateField";



const argentBank = [
  {
    check: "Argent Bank Checking (x8349)",
    credit: "$2,082.79",
    balance: "Available Balance"
  },
  {
    check: "Argent Bank Savings (x6712)",
    credit: "$10,928.42",
    balance: "Available Balance"
  },
  {
    check: "Argent Bank Credit Card (x8349)",
    credit: "$184.30",
    balance: "Current Balance"
  }

]

export default function Profil() {
  const authToken = useSelector((state)=> state.auth.token)
  const firstName = useSelector((state)=> state.auth.firstName)
  const lastName = useSelector((state)=> state.auth.lastName)
  const dispatch = useDispatch()
  useEffect(()=> {
   if(authToken){
    dispatch(fetchUserData())
   }
  }, [dispatch, authToken])
  
const [editUser, setEditUser]= useState(false)

const edit = () => {
setEditUser(!editUser)
}


  return (
    <div className="flex flex-col w-full h-auto bg-[#12002B]">
      <Header />

      <main className="mt-24 mb-12 w-full h-auto  flex justify-start items-center flex-col">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-3xl text-center text-white font-bold">
            Welcome back <br></br> {firstName} {lastName}
          </h1>
          {
            editUser ? <button onClick={edit} className="bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 ">
            Close
          </button> : <button onClick={edit} className="bg-[#00BC77] p-2 w-20	text-white text-xs mt-4 ">
            Edit Name
          </button>
          }
          
          {
            editUser ? <UpdateField /> : ""
          }
          
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-4 ">
          {
            argentBank.map(elt => (
              <div key={uuidv4()} className="bg-white p-6 mb-8 w-10/12 sm:w-9/12 flex flex-col  sm:flex-row sm:justify-between sm:items-center">
                 <Card  check={elt.check} credit={elt.credit} balance={elt.balance}/>
                </ div>
             
            ))
          }
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
