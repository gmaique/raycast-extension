import { showHUD, Clipboard} from "@raycast/api";



async function convertToCamelCase(): Promise<void> {
  try {
    const text = await Clipboard.readText();
    if (text) {
      const camelCaseText = text
        .split(" ")
        .map((word, index) => (index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1)))
        .join("");
      await Clipboard.copy(camelCaseText);
      await showHUD("Texto convertido para camelCase!");
    } else {
      await showHUD("Área de transferência vazia.");
    }
  } catch {
    await showHUD("Erro ao acessar a área de transferência.");
  }
}


export default async function main() {
  convertToCamelCase();
}
