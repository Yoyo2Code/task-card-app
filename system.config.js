(function( global ) {
    System.config({
        paths: {
            'npm': 'node_modules/'
        },
    map: {
        app: 'app',
        '@angular/core': 'npm@angular/core/bundle/core.umd.js',
        '@angular/common': 'npm@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm@angular/platform-browser-dynamic/bundle/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm@angular/router/bundle/router.umd.js',
        '@angular/forms': 'npm@angular-forms/forms/bundles/forms.umd.js',

        'rxjs': 'npm:rxjs',
        'angular-in-memory-web-api': 'npm:angular-in-memory-web-api'
    },

    packages: {
        app: {
            main: './main.js',
            defaultExtension: 'js'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        'angular-in-memory-api': {
            main: './index.js',
            defaultExtension: 'js'
        }
    }


    });
})(this);