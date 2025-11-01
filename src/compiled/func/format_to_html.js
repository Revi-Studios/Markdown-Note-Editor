import { processLineToHtml } from "./process_line_to_html.js";
export function formatToHtml(text) {
    const lines = text.split("\n");
    let convertedLines = [];
    for (const line of lines) {
        convertedLines.push(processLineToHtml(line));
    }
    return convertedLines.join("\n");
}
