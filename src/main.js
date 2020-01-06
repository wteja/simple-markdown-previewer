marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true
});

document.addEventListener("DOMContentLoaded", function () {
    'strict';

    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    let defaultValue = "# Markdown Previewer\n\n";
    defaultValue += "## This is a simple markdown previewer made with HTML + CSS + Vanilla JavaScript\n\n";
    defaultValue += "Check [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) on how to use Markdown.";
    editor.value = defaultValue;
    previewMarkdown(editor.value, preview);

    function handleChange(ev) {
        const value = ev.target.value;
        previewMarkdown(value, preview);
    }

    function previewMarkdown(value, preview) {
        preview.innerHTML = marked(value.trim());
    }
    editor.addEventListener('change', handleChange);
    editor.addEventListener('keyup', handleChange);
})