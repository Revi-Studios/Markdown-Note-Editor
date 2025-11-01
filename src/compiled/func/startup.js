// Functions
import { formatToHtml } from "./format_to_html.js";
export function startup(args) {
    // Event Listeners
    // Reloads when type for instant feedback
    args.editor.addEventListener("input", function () {
        args.output.innerHTML = formatToHtml(args.editor.value == null ? "" : args.editor.value);
        localStorage.setItem(args.lsKey, args.editor.value);
    });
    args.output.innerHTML = formatToHtml(args.editor.value == null ? "" : args.editor.value);
    // Loads your previues text from local storage and returns "", because you probably want to keep what you write
    args.editor.value =
        localStorage.getItem(args.lsKey) ??
            `# Title\n;Normal text\n;---\n;More normal text\n;\n;\n;- Something...\n;- More\n;- And even more!\n;\n;- [x] task`;
    args.output.innerHTML = formatToHtml(args.editor.value);
}
