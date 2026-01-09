function ScrollTo(selector) {
    console.log(arguments)
    document.querySelector('div[id="' + selector + '"]').scrollIntoView({
        behavior: 'smooth'
    });
}