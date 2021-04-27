[![][header]][siteurl]

# Code Modules — Sample Files

This is an HTML5 project using BBEdit and Gulp.

`npm start` — development using Gulp build process



Code Modules documentation can be found at [https://codemodules.net][1]

These sample files can be demoed at [https://sample.codemodules.net][2]


## To Do

Set up `app/styles/` using less compiled to main.css in the root.



## Changelog

**v0.2.0** 
_Begin Date - 2021-04-16_

*	Start to add a set of starter files for the Code Modules project.



**v0.3.0** 
_Release Date - 2021-04-20_

*	Initial setup of web hosting for sample.codemodules.net production and dev servers
*	On do.server1.super.com, for user pip_cm
*	Server IP is 198.199.92.62
*	Git Push to both dev and production servers.
*	Initial placeholder site.



**v0.4.0** 
_Release Date - 2021-04-26_

*	Adopt [Start Bootstrap’s Modern Business Theme][3] + [GitHub][4] and its build process using Gulp.
	*	`npm i startbootstrap-modern-business`
	*	Make adjustments to paths so that `public/` is separate and thinned from `theme/`



**v0.4.1** 
_Release Date - 2021-04-27_

*	Change placehold.it to [dummyimage.com][5] links to support https://
	*	`====http://placehold.it/(\d+x\d+)====` s/r All `====https://dummyimage.com/\1/CCC/999.gif====`
	*	Here's a sample: `https://dummyimage.com/500x300/CCC/999.gif`
*	Add the ability to process less files with gulp. [ref][6]
	*	`npm install --save-dev gulp-less gulp-autoprefixer`
*	Convert style system to less.



**v0.4.2** 
_Begin Date - 2021-04-27_

*	Add parcel to the local project.
	*	`npm install parcel-bundler --save-dev`
*	Update `package.json`
*	Change javascript to a bundle using Parcel.
*	Test js modules with Parcel.
*	Update theme html files to use new styles and js when moved to public.
*	Add .htaccess with Pipsqueak Shortcuts system.





[![][piplogo]][pipurl]


[header]: https://picsum.photos/id/1073/1200/400
[siteurl]: https://sample.codemodules.com
[piplogo]: https://pipsqueak.com/images/Logo-Pipsqueak_Bookplate-Red_Text-bgTrans-200x190.png
[pipurl]: https://pipsqueak.com/





✔	✘	⚪	⇧	∧	⌥	⌘	↩	⇧∧⌥⌘↩	← → ⟵ ⟶



[1]: https://codemodules.net
[2]: https://sample.codemodules.net
[3]: https://startbootstrap.com/template/modern-business
[4]: https://github.com/startbootstrap/startbootstrap-modern-business
[5]: https://dummyimage.com/
[6]: https://medium.com/@JSdevelop/compiling-less-to-css-in-gulp-7dddf30a63e1
