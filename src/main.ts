// Functions
import { startup } from "./func/startup";

// Elements
const editor: HTMLTextAreaElement = document.getElementById("editor")! as HTMLTextAreaElement;
const output: HTMLDivElement = document.getElementById("output")! as HTMLDivElement;

// Consts
const localStorageKey = "editor-m";

// Startup function which starts eventlisteners, loads storage and does first time processes
startup({ editor: editor, output: output, lsKey: localStorageKey });
