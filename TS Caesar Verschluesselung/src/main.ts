//? Alle Elemente holen
const textareaEncrypt = document.getElementById(
  "textfield-encrypt"
) as HTMLInputElement;
const textareaDecrypt = document.getElementById(
  "textfield-decrypt"
) as HTMLInputElement;
const textareaResult = document.getElementById(
  "textfield-result"
) as HTMLInputElement;
const buttonEncrypt = document.getElementById(
  "button-encrypt"
) as HTMLInputElement;
const buttonDecrypt = document.getElementById(
  "button-decrypt"
) as HTMLInputElement;
const selectShift = document.getElementById(
  "selectEncryption"
) as HTMLInputElement;

//? Event Listeners
buttonEncrypt?.addEventListener("click", encrypt);
buttonDecrypt?.addEventListener("click", decrypt);

//? Encryption
function encrypt(event: MouseEvent) {
  event.preventDefault();
  console.log("button encrypt clicked");

  const shiftValue: number = parseInt(selectShift.value);
  console.log(`Shift value: ${shiftValue}`);

  const textInput: string = textareaEncrypt.value;
  console.log(`Text input: ${textInput}`);

  const encryptedText: string = shift(textInput, shiftValue);
  console.log(`Encrypted text: ${encryptedText}`);

  if (textareaDecrypt) {
    textareaDecrypt.value = encryptedText;
  }
}

//? Decryption
function decrypt(event: MouseEvent) {
  event.preventDefault();
  console.log("button decrypt clicked");

  const shiftValue: number = parseInt(selectShift.value);
  console.log(`Shift value: ${shiftValue}`);

  const textInput: string = textareaDecrypt.value;
  console.log(`Text input: ${textInput}`);

  const decryptedText: string = shift(textInput, -shiftValue);
  console.log(`Decrypted text: ${decryptedText}`);

  if (textareaResult) {
    textareaResult.value = decryptedText;
  }
}

//? Shift function for Caesar Encryption
function shift(textInput: string, shiftValue: number): string {
  let result = "";
  shiftValue = shiftValue % 26;

  for (let index = 0; index < textInput.length; index++) {
    let char = textInput[index];

    if (char >= "A" && char <= "Z") {
      let newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 65 + shiftValue + 26) % 26) + 65
      );
      result += newChar;
    } else if (char >= "a" && char <= "z") {
      let newChar = String.fromCharCode(
        ((char.charCodeAt(0) - 97 + shiftValue + 26) % 26) + 97
      );
      result += newChar;
    } else {
      result += char;
    }
  }

  return result;
}

const encryptButton = document.getElementById(
  "encryptButton"
) as HTMLButtonElement;
const decryptButton = document.getElementById(
  "decryptButton"
) as HTMLButtonElement;

if (encryptButton) {
  encryptButton.addEventListener("click", encrypt);
}

if (decryptButton) {
  decryptButton.addEventListener("click", decrypt);
}
