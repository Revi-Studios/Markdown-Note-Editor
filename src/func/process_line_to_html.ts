/** Pocesses and formats a line into [innerHtml].*/
export function processLineToHtml(line: String): String {
  switch (true) {
    // Shows text has heddings
    case line.startsWith("#"): {
      let h: number = 0;
      for (const c of line) {
        if (c !== "#") {
          break;
        }
        h++;
      }
      return `<h${h}> <p>${line.slice(0, h)}</p> ${line.slice(h, line.length).trim()}</h${h}>`;
    }

    // Shows a line
    case line.slice(0, 3) === "---": {
      return `<divider><p>---</p></divider>`;
    }

    // Shows a checkbox
    case line.slice(0, 5) === "- [ ]" || line.slice(0, 5) === "- [x]": {
      return `<div> <p>${line.slice(0, 5)}</p> <input type="checkbox" ${line.slice(3, 4) === "x" ? "checked" : ""}> ${line.slice(5, line.length).trim()}</div>`;
    }
  }
  return `<p>${line}</p>`;
}
