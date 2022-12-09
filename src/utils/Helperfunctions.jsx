import CryptoJS from "crypto-js";

/**
 * 
 * @returns {string} function that retrieves the 3 parts of the encrypted token, assembles them and decrypts
 */



export const getToken = () => {
	const decryp1 = localStorage.getItem("token");
	const decryp2 = localStorage.getItem("token2");
	const decryp3 = recupererCookie("token");
	const decryp = decryp1 + decryp3 + decryp2;
	const bytes = CryptoJS.AES.decrypt(decryp, "1973");
	var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
	
	return decryptedData;
};

export const removeToken = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("token2");
};

/**
 * 
 * @param {string} val 
 * @returns {string} function that encrypts the token, cuts it 3 and distributes it in the localstorage and cookies
 */


export const setToken = (val) => {
	//token encryption
	var encrypted = CryptoJS.AES.encrypt(val, "1973").toString();
	console.log(encrypted);
	console.log(encrypted.length);

	//split encrypted token
	const splitToken = splitChunks(encrypted);
	console.log(splitChunks(encrypted));
	//stoquage of the three parts
	localStorage.setItem("token", splitToken[0]);
	document.cookie = `token=${splitToken[1]}; max-age=10000; path=/`;
	localStorage.setItem("token2", splitToken[2]);
	return encrypted;
};

/**
 * 
 * @param {string} string 
 * @returns {string} function to cut in 3 a string
 */

function splitChunks(string) {
	var regex = RegExp(".{1," + Math.ceil(string.length / 3) + "}", "g");
	return string.match(regex);
}

/**
 * 
 * @param {string} nom 
 * @returns {string|null} function that retrieves a cookie based on its name
 */


function recupererCookie(nom) {
	nom = nom + "=";
	var liste = document.cookie.split(";");
	for (var i = 0; i < liste.length; i++) {
		var c = liste[i];
		while (c.charAt(0) === " ") c = c.substring(1, c.length);
		if (c.indexOf(nom) === 0) return c.substring(nom.length, c.length);
	}
	return null;
}

/**
 * 
 * @param {string} val 
 * @returns {string} function that set an encryped Cookie
 */

export function setCookie(val) {
	var encrypted = CryptoJS.AES.encrypt(val, "noel").toString();
	console.log(encrypted);
	return (document.cookie = `remember=${encrypted}; max-age=84000; path=/`);
}

/**
 * 
 * @param {string} val 
 * @returns {string} function that retrieves a cookie, decrypts it and returns it
 */

export function getCookie(val) {
	const cookie = recupererCookie(val);
	if (cookie) {
		const bytes = CryptoJS.AES.decrypt(cookie, "noel");
		var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
		console.log(decryptedData);
		return decryptedData;
	} else {
		return null;
	}
}

/**
 * 
 * @param {string} name function that erase a cookie according to the name
 * 
 */

export function eraseCookie(name) {
	document.cookie = name + "=; Max-Age=-99999999;";
}
