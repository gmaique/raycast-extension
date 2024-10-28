import { showHUD, Clipboard} from "@raycast/api";



async function convertToLowercase(): Promise<void> {
  try {
    const text = await Clipboard.readText();
    if (text) {
      const lowerText = text.toLowerCase();
      await Clipboard.copy(lowerText);
      await showHUD("Texto convertido para minúsculas!");
    } else {
      await showHUD("Área de transferência vazia.");
    }
  } catch {
    await showHUD("Erro ao acessar a área de transferência.");
  }
}


export default async function main() {
  convertToLowercase();
}
