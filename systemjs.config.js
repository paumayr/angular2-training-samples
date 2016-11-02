/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': '../node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api',
    },
    
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      gettingstarted: { main: '../gettingstarted.js', defaultExtension: 'js' },
      displayingdata: { main: '../displayingdata.js', defaultExtension: 'js' },
      buttonclick: { main: '../buttonclick.js', defaultExtension: 'js' },
      repeatingelements: { main: '../repeatingelements.js', defaultExtension: 'js' },
      showif: { main: '../showif.js', defaultExtension: 'js' },
      textinput: { main: '../textinput.js', defaultExtension: 'js' },
      modelbinding: { main: '../modelbinding.js', defaultExtension: 'js' },
      fruitbasket: { main: '../fruitbasket.js', defaultExtension: 'js' },
      service: { main: '../service.js', defaultExtension: 'js' },
      valueinjection: { main: '../valueinjection.js', defaultExtension: 'js' },
      multivalueinjection: { main: '../multivalueinjection.js', defaultExtension: 'js' },
      inputbindings: { main: '../inputbindings.js', defaultExtension: 'js' },
      outputbindings: { main: '../outputbindings.js', defaultExtension: 'js' },
      stylebindings: { main: '../stylebindings.js', defaultExtension: 'js' },
      classbindings: { main: '../classbindings.js', defaultExtension: 'js' },
      switching: { main: '../switching.js', defaultExtension: 'js' },
      pipes: { main: '../pipes.js', defaultExtension: 'js' },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
