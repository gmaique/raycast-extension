import { showHUD, Clipboard} from "@raycast/api";




function generateCPF(): string {
  const random = () => Math.floor(Math.random() * 10);
  const digits = Array.from({ length: 9 }, () => random());
  const calculateDigit = (numbers: number[]) => {
    const sum = numbers.reduce((acc, curr, index) => acc + curr * (numbers.length + 1 - index), 0);
    return (sum * 10) % 11 % 10;
  };
  digits.push(calculateDigit(digits));
  digits.push(calculateDigit([...digits, 0]));
  return digits.join('');
}

async function copyGeneratedCPF(): Promise<void> {
  const cpf = generateCPF();
  await Clipboard.copy(cpf);
  await showHUD( `CPF gerado: ${cpf}`);
}

export default async function main() {
  copyGeneratedCPF();
}
