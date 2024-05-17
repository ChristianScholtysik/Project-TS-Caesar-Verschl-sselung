//? Alle Elemente holen
const textareaEncrypt = document.getElementById(
  "textfield-encrypt"
) as HTMLInputElement;
const textareaDecrypt = document.getElementById(
  "textfield-decrypt"
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

//? EventListener
buttonEncrypt?.addEventListener("click", encrypt);
buttonDecrypt?.addEventListener("click", decrypt);

//? Encryption
function encrypt(event: MouseEvent) {
  event.preventDefault();
  console.log("button encrypt klick");
  const shiftValue: string = selectShift.value;
  console.log(shiftValue);
}

//? Decryption
function decrypt(event: MouseEvent) {
  event.preventDefault();
  console.log("button decrypt klick");
}
