import React, {useState} from "react";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
 import { useDispatch } from "react-redux";
 import { updateUserData } from "../redux/features/auth/authThunks";

const UpdateField = ({save}) => {
    
    const firstName = useSelector((state)=> state.auth.firstName)
  const lastName = useSelector((state)=> state.auth.lastName)
  const dispatch = useDispatch()
  const [updateFirstName, setUpdateFirstName] = useState("");
	  const [updateLastName, setUpdateLastName] = useState("");
  const onSave=(e)=>{
    e.preventDefault()
    const userUpdateData= {
      firstName: updateFirstName? updateFirstName: firstName,
      lastName: updateLastName ? updateLastName : lastName,
    }
    dispatch(updateUserData(userUpdateData))
    console.log(userUpdateData)
    
  }

  

  return (
    <div className="mt-10">
      <form className="flex gap-20 ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <input className="p-2 placeholder:text-center" placeholder={firstName}  onChange={(e)=>setUpdateFirstName(e.target.value)}/>
          <button onClick={onSave} className="w-40 bg-[#00BC77] p-2 text-white text-lg font-bold ">Save</button>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <input className="p-2 placeholder:text-center" placeholder={lastName} onChange={(e)=>setUpdateLastName(e.target.value)}/>
          <button onClick={save} className="w-40 bg-[#00BC77] p-2 text-white text-lg font-bold">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateField;
