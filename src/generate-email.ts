import { showHUD, Clipboard} from "@raycast/api";



function generateRandomEmail(): string {
  const domains = ["example.com", "test.com", "demo.com"];
  const randomName = Math.random().toString(36).substring(2, 15);
  return `${randomName}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

async function copyGeneratedEmail(): Promise<void> {
  const email = generateRandomEmail();
  await Clipboard.copy(email);
  await showHUD(`E-mail gerado: ${email}`);
}

export default async function main() {
  copyGeneratedEmail();
}
