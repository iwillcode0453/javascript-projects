function generatePassword() {
	const length = document.getElementById("length").value;
	const useUpper = document.getElementById("uppercase").checked;
	const useLower = document.getElementById("lowercase").checked;
	const useNumbers = document.getElementById("numbers").checked; // New variable
	const useSymbols = document.getElementById("symbols").checked;

	const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const lowerChars = "abcdefghijklmnopqrstuvwxyz";
	const numberChars = "0123456789"; // Digit character set
	const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

	let charPool = "";
	if (useUpper) charPool += upperChars;
	if (useLower) charPool += lowerChars;
	if (useNumbers) charPool += numberChars; // Add numbers to pool
	if (useSymbols) charPool += symbolChars;

	if (charPool === "") {
		alert("Please select at least one option!");
		return;
	}

	let password = "";
	for (let i = 0; i < length; i++) {
		// Generate a random index based on current charPool length
		const randomIndex = Math.floor(Math.random() * charPool.length);
		password += charPool.charAt(randomIndex);
	}

	document.getElementById("passwordResult").value = password;
}

function copyToClipboard() {
	const passwordField = document.getElementById("passwordResult");
	if (!passwordField.value) return;

	// Use the modern Clipboard API
	navigator.clipboard.writeText(passwordField.value).then(() => {
		alert("Copied!");
	});
}
