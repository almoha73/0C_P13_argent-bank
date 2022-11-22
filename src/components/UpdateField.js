import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/features/auth/authThunks";

const UpdateField = () => {
    const authToken = useSelector((state)=> state.auth.token)
    const firstName = useSelector((state)=> state.auth.firstName)
  const lastName = useSelector((state)=> state.auth.lastName)
  const dispatch = useDispatch()
  useEffect(()=> {
   if(authToken){
    dispatch(fetchUserData())
   }
  }, [dispatch, authToken])
  return (
    <div className="mt-10">
      <form className="flex gap-20 ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <input className="p-2 placeholder:text-center" placeholder={firstName} />
          <button className="w-40 bg-[#00BC77] p-2 text-white text-lg font-bold ">Save</button>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <input className="p-2 placeholder:text-center" placeholder={lastName} />
          <button className="w-40 bg-[#00BC77] p-2 text-white text-lg font-bold">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateField;
