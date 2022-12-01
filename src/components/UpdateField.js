import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateUserData } from "../redux/features/auth/authThunks";

const UpdateField = ({ save }) => {
	const firstName = useSelector((state) => state.auth.firstName);
	const lastName = useSelector((state) => state.auth.lastName);
	const dispatch = useDispatch();
	const [updateFirstName, setUpdateFirstName] = useState("");
	const [updateLastName, setUpdateLastName] = useState("");
	const onSave = (e) => {
		e.preventDefault();
		const userUpdateData = {
			firstName: updateFirstName ? updateFirstName : firstName,
			lastName: updateLastName ? updateLastName : lastName,
		};
		dispatch(updateUserData(userUpdateData));
		console.log(userUpdateData);
	};

	return (
		<div className="w-full mt-10 flex justify-center">
			<form className="w-11/12 flex gap-5 sm:gap-10 ">
				<div className="w-1/2 flex flex-col gap-5 justify-center items-center sm:items-end">
					<input
						autoFocus={true}
						tabIndex="10"
						className="w-11/12 p-2 placeholder:text-center"
						placeholder={firstName}
						onChange={(e) => setUpdateFirstName(e.target.value)}
					/>
					<button
						tabIndex="30"
						onClick={onSave}
						className="w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold "
					>
						Save
					</button>
				</div>
				<div className="w-1/2 flex flex-col gap-5 justify-center items-center sm:items-start">
					<input
						tabIndex="20"
						className="w-11/12 p-2 placeholder:text-center"
						placeholder={lastName}
						onChange={(e) => setUpdateLastName(e.target.value)}
					/>
					<button
						tabIndex="40"
						onClick={save}
						className="w-20 sm:w-40 bg-[#00BC77] p-2 text-white text-lg font-bold"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
};

export default UpdateField;
