// src/func/process_line_to_html.ts
function processLineToHtml(line) {
  switch (true) {
    case line.startsWith("#"): {
      let h = 0;
      for (const c of line) {
        if (c !== "#") {
          break;
        }
        h++;
      }
      return `<h${h}> <p>${line.slice(0, h)}</p> ${line.slice(h, line.length).trim()}</h${h}>`;
    }
    case line.slice(0, 3) === "---": {
      return `<divider><p>---</p></divider>`;
    }
    case (line.slice(0, 5) === "- [ ]" || line.slice(0, 5) === "- [x]"): {
      return `<div> <p>${line.slice(0, 5)}</p> <input type="checkbox" ${line.slice(3, 4) === "x" ? "checked" : ""}> ${line.slice(5, line.length).trim()}</div>`;
    }
  }
  return `<p>${line}</p>`;
}

// src/func/format_to_html.ts
function formatToHtml(text) {
  const lines = text.split(`
`);
  let convertedLines = [];
  for (const line of lines) {
    convertedLines.push(processLineToHtml(line));
  }
  return convertedLines.join(`
`);
}

// src/func/startup.ts
function startup(args) {
  args.editor.addEventListener("input", function() {
    args.output.innerHTML = formatToHtml(args.editor.value == null ? "" : args.editor.value);
    localStorage.setItem(args.lsKey, args.editor.value);
  });
  args.output.innerHTML = formatToHtml(args.editor.value == null ? "" : args.editor.value);
  args.editor.value = localStorage.getItem(args.lsKey) ?? `# Title
Normal text
---
More normal text


- Something...
- More
- And even more!

- [x] task`;
  args.output.innerHTML = formatToHtml(args.editor.value);
}

// src/main.ts
var editor = document.getElementById("editor");
var output = document.getElementById("output");
var localStorageKey = "editor-m";
startup({ editor, output, lsKey: localStorageKey });
