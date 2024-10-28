import { showHUD, Clipboard} from "@raycast/api";



function generateCNPJ(): string {
  const random = () => Math.floor(Math.random() * 10);
  const digits = Array.from({ length: 12 }, () => random());
  const calculateDigit = (numbers: number[], length: number) => {
    const sum = numbers.reduce((acc, curr, index) => acc + curr * (length - index), 0);
    return (sum % 11 < 2 ? 0 : 11 - (sum % 11));
  };
  digits.push(calculateDigit(digits, 5));
  digits.push(calculateDigit([...digits], 6));
  return digits.join('').replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, '$1.$2.$3/$4-');
}

async function copyGeneratedCNPJ(): Promise<void> {
  const cnpj = generateCNPJ();
  await Clipboard.copy(cnpj);
  await showHUD(`CNPJ gerado: ${cnpj}`);
}

export default async function main() {
  copyGeneratedCNPJ();
}
