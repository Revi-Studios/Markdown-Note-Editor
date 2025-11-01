// Functions
import { formatToHtml } from "./format_to_html";

interface startupArgs {
  editor: HTMLTextAreaElement;
  output: HTMLDivElement;
  lsKey: String;
}

export function startup(args: startupArgs): void {
  // Event Listeners

  // Reloads when type for instant feedback
  args.editor.addEventListener("input", function () {
    args.output.innerHTML = formatToHtml(
      (args.editor.value as String) == null ? "" : (args.editor.value as String),
    );
    localStorage.setItem(args.lsKey as string, args.editor.value);
  });
  args.output.innerHTML = formatToHtml(
    (args.editor.value as String) == null ? "" : (args.editor.value as String),
  );

  // Loads your previues text from local storage and returns "", because you probably want to keep what you write
  args.editor.value =
    localStorage.getItem(args.lsKey as string) ??
    `# Title\nNormal text\n---\nMore normal text\n\n\n- Something...\n- More\n- And even more!\n\n- [x] task`;
  args.output.innerHTML = formatToHtml(args.editor.value as String);
}
