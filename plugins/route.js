export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        try {
            const opacity = 'index' === to.name ? '1' : '0.4';
            const style = window.document.createElement("style");
            window.document.head.appendChild(style);
            const sheet = style.sheet
            sheet.insertRule('@media only screen and (min-width: 1024px) {\n' +
                '  html:after {\n' +
                '    opacity: '+ opacity + ';\n' +
                '  }\n' +
                '}', 0);
        } catch {}
        next();
    })
}