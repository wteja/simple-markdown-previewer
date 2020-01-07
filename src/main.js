'use strict';

// Set Marked.js default options.
marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: true
});

document.addEventListener("DOMContentLoaded", function () {

    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    /**
     * Convert markdown text to HTML.
     * @param {String} value Markdown that you want to convert to HTML.
     */
    function convertMarkdown(value) {
        return marked(value.trim());
    }

    /**
     * Render markdown text to preview area.
     * @param {String} markdown Markdown Text
     */
    function renderMarkdown(markdown) {
        preview.innerHTML = convertMarkdown(markdown);
    }

    /**
     * Handle text editor change.
     * @param {Object} ev Event Argument.
     */
    function handleChange(ev) {
        const value = ev.target.value;
        renderMarkdown(value);
    }

    // Adding default markdown.
    let sampleMarkdown = "# Markdown Previewer\n\n";
    sampleMarkdown += "![Markdown Previewer](./image.png)\n\n";
    sampleMarkdown += "## This is a simple markdown previewer made with HTML + CSS + Vanilla JavaScript\n\n";
    sampleMarkdown += "Check [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) on how to use Markdown.\n\n";
    sampleMarkdown += "### Sample Code Block\n\n";
    sampleMarkdown += "```javascript\nvar message = \"Hello World\";\nconsole.log(message);\n```\n\n"
    sampleMarkdown += "This is `inline code`\n\n";
    sampleMarkdown += "And this is **bold text** and *italic text*\n\n";
    sampleMarkdown += "- Sample List Item 1\n- Sample List Item 2\n- Sample List Item 3\n\n";
    sampleMarkdown += "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida at nisl ut lobortis. Donec mattis risus a neque suscipit bibendum. Curabitur pellentesque, enim vitae sollicitudin iaculis, risus dui iaculis lorem, ac pulvinar neque odio nec est. Nulla volutpat gravida ligula eget fringilla. Quisque vestibulum, magna a rutrum fermentum, felis dui sodales elit, eget mattis urna eros vel magna. Proin in bibendum neque. Pellentesque aliquet diam nisi. Donec a tincidunt magna.\n\n";
    editor.value = sampleMarkdown;

    // Render sample markdown.
    renderMarkdown(editor.value);

    editor.addEventListener('change', handleChange);
    editor.addEventListener('keyup', handleChange);
})