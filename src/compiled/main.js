// Functions
import { startup } from "./func/startup.js";
// Elements
const editor = document.getElementById("editor");
const output = document.getElementById("output");
// Consts
const localStorageKey = "editor-m";
// Startup function which starts eventlisteners, loads storage and does first time processes
startup({ editor: editor, output: output, lsKey: localStorageKey });
