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
    defaultValue += "![Markdown Previewer](https://cdn2.iconfinder.com/data/icons/valentines-day-flat-line-1/50/love-notebook-256.png)\n\n";
    defaultValue += "## This is a simple markdown previewer made with HTML + CSS + Vanilla JavaScript\n\n";
    defaultValue += "Check [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) on how to use Markdown.\n\n";
    defaultValue += "### Sample Code Block\n\n";
    defaultValue += "```javascript\nvar message = \"Hello World\";\nconsole.log(message);\n```\n\n"
    defaultValue += "This is `inline code`\n\n";
    defaultValue += "And this is **bold text** and *italic text*\n\n";
    defaultValue += "- Sample List Item 1\n- Sample List Item 2\n- Sample List Item 3\n\n";
    defaultValue += "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida at nisl ut lobortis. Donec mattis risus a neque suscipit bibendum. Curabitur pellentesque, enim vitae sollicitudin iaculis, risus dui iaculis lorem, ac pulvinar neque odio nec est. Nulla volutpat gravida ligula eget fringilla. Quisque vestibulum, magna a rutrum fermentum, felis dui sodales elit, eget mattis urna eros vel magna. Proin in bibendum neque. Pellentesque aliquet diam nisi. Donec a tincidunt magna.\n\n";
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