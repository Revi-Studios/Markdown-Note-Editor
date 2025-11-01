import { processLineToHtml } from "./process_line_to_html";

export function formatToHtml(text: String): string {
  const lines: String[] = text.split("\n");

  let convertedLines: String[] = [];

  for (const line of lines) {
    convertedLines.push(processLineToHtml(line));
  }

  return convertedLines.join("\n");
}
