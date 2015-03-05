/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 1 | Getting Started with PhantomJS
 * Recipe 4  | Running a PhantomJS script with arguments
 */
//if (phantom.args.length === 0) {
//  console.log('No arguments were passed in.');
//} else {
//  phantom.args.forEach(function(arg, index) {
//    console.log('[' + index + '] ' + arg);
//  });
//}

require('system').args.forEach(function(arg){
  console.log(arg);
});

phantom.exit();