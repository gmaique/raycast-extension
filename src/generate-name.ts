import { showHUD, Clipboard} from "@raycast/api";



function generateRandomFullName(): string {
  const firstNames = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gustavo", "Helena"];
  const lastNames = ["Silva", "Souza", "Pereira", "Lima", "Oliveira", "Santos", "Costa"];
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

async function copyGeneratedFullName(): Promise<void> {
  const fullName = generateRandomFullName();
  await Clipboard.copy(fullName);
  await showHUD( `Nome gerado: ${fullName}`);
}

export default async function main() {
  copyGeneratedFullName();
}
