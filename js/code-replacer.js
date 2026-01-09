function ReplaceInCode(selector, content) {
    console.log(arguments)
    const codeBlock = document.querySelector('code[id="' + selector + '"]');
    codeBlock.innerHTML = hljs.highlight(content, { language: 'csharp' }).value;
}