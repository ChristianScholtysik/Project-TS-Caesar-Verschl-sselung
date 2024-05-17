// Holen der Referenzen auf die HTML-Elemente für Verschlüsselung, Entschlüsselung und das Ergebnisfeld.
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

// Hinzufügen von Event-Listenern für die Verschlüsselungs- und Entschlüsselungsschaltflächen.
buttonEncrypt?.addEventListener("click", encrypt);
buttonDecrypt?.addEventListener("click", decrypt);

// Verschlüsselungsfunktion: Verschiebt jeden Buchstaben im Eingabetext um den angegebenen Betrag.
function encrypt(event: MouseEvent) {
  event.preventDefault();
  console.log("Encrypt button clicked");

  // Abrufen des Verschiebungswerts aus dem Auswahlfeld.
  const shiftValue: number = parseInt(selectShift.value);
  console.log(`Shift value: ${shiftValue}`);

  // Abrufen des Texteingabewerts aus dem Eingabefeld für die Verschlüsselung.
  const textInput: string = textareaEncrypt.value;
  console.log(`Text input: ${textInput}`);

  // Verschlüsseln des Textes und Anzeigen des verschlüsselten Textes im Entschlüsselungsfeld.
  const encryptedText: string = shift(textInput, shiftValue);
  console.log(`Encrypted text: ${encryptedText}`);

  if (textareaDecrypt) {
    textareaDecrypt.value = encryptedText;
  }
}

// Entschlüsselungsfunktion: Verschiebt jeden Buchstaben im Eingabetext um den negierten Verschiebungsbetrag.
function decrypt(event: MouseEvent) {
  event.preventDefault();
  console.log("Decrypt button clicked");

  // Abrufen des Verschiebungswerts aus dem Auswahlfeld.
  const shiftValue: number = parseInt(selectShift.value);
  console.log(`Shift value: ${shiftValue}`);

  // Abrufen des Texteingabewerts aus dem Eingabefeld für die Entschlüsselung.
  const textInput: string = textareaDecrypt.value;
  console.log(`Text input: ${textInput}`);

  // Entschlüsseln des Textes und Anzeigen des entschlüsselten Textes im Ergebnisfeld.
  const decryptedText: string = shift(textInput, -shiftValue);
  console.log(`Decrypted text: ${decryptedText}`);

  if (textareaResult) {
    textareaResult.value = decryptedText;
  }
}

// Caesar-Verschiebungsfunktion: Verschiebt einen Buchstaben um den angegebenen Wert im Alphabet.
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

// Hinzufügen von Event-Listenern für die Verschlüsselungs- und Entschlüsselungsschaltflächen.
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
