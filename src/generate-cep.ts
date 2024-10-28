import { showHUD, Clipboard} from "@raycast/api";



function generateRandomCEP(): string {
  const randomCEP = Math.floor(10000000 + Math.random() * 90000000).toString();
  return `${randomCEP.slice(0, 5)}-${randomCEP.slice(5)}`;
}

async function copyGeneratedCEP(): Promise<void> {
  const cep = generateRandomCEP();
  await Clipboard.copy(cep);
  await showHUD(  `CEP gerado: ${cep}`);
}

export default async function main() {
  copyGeneratedCEP();
}
