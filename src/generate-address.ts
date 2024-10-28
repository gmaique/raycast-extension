import { showHUD, Clipboard} from "@raycast/api";



function generateRandomAddress(): string {
  const streets = ["Rua A", "Rua B", "Rua C", "Avenida X", "Praça Y"];
  const randomStreet = streets[Math.floor(Math.random() * streets.length)];
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${randomStreet}, ${randomNumber}`;
}

async function copyGeneratedAddress(): Promise<void> {
  const address = generateRandomAddress();
  await Clipboard.copy(address);
  await showHUD( `Endereço gerado: ${address}`);
}


export default async function main() {
  copyGeneratedAddress();
}
