import { showHUD, Clipboard} from "@raycast/api";

async function convertToUppercase(): Promise<void> {
  try {
    const text = await Clipboard.readText();
    console.log(text);
    if (text) {
      const upperText = text.toUpperCase();
      await Clipboard.copy(upperText);
      await showHUD("Texto convertido para uppercase!");
    } else {
      await showHUD("Área de transferência vazia.");
    }
  } catch {
    await showHUD("Erro ao acessar a área de transferência.");
  }
}

export default async function main() {
  convertToUppercase();
}
