import CryptoJS from "crypto-js";

export const getToken = () => {
	const decryp = localStorage.getItem("token");
	console.log(decryp);
	const bytes = CryptoJS.AES.decrypt(decryp, "1973");
	var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
	console.log(decryptedData);
	return decryptedData;
};

export const removeToken = () => {
	localStorage.removeItem("token");
};

export const setToken = (val) => {
	var encrypted = CryptoJS.AES.encrypt(val, "1973").toString();
	console.log(encrypted);
	localStorage.setItem("token", encrypted);
};
