[![][header]][siteurl]

# Code Modules — Sample Files

This is an HTML5 project using BBEdit and Parcel.

`npm start` — development using Parcel process

`npm run build` — build files for production (or dev) in dist/ folder

gitpush no longer works to push to dev or production server. Instead, use rsync scripts in package.json:

`npm run pushdev` - Push to development server

`npm run pushlive` - Push to production server



Code Modules documentation can be found at [https://codemodules.net][1]

These sample files can be demoed at [https://sample.codemodules.net/][2]

Development server version of these files at [https://dev.codemodules.net/][3]


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

*	Adopt [Start Bootstrap’s Modern Business Theme][4] + [GitHub][5] and its build process using Gulp.
	*	`npm i startbootstrap-modern-business`
	*	Make adjustments to paths so that `public/` is separate and thinned from `theme/`



**v0.4.1** 
_Release Date - 2021-04-27_

*	Change placehold.it to [dummyimage.com][6] links to support https://
	*	`====http://placehold.it/(\d+x\d+)====` s/r All `====https://dummyimage.com/\1/CCC/999.gif====`
	*	Here's a sample: `https://dummyimage.com/500x300/CCC/999.gif`
*	Add the ability to process less files with gulp. [ref][7]
	*	`npm install --save-dev gulp-less gulp-autoprefixer`
*	Convert style system to less.



**v0.4.2** 
_Release Date - 2021-04-27_

*	Add parcel to the local project.
	*	`npm install parcel-bundler --save-dev`
*	Update `package.json`
*	Change javascript to a bundle using Parcel.
*	Test js modules with Parcel.
*	Update theme html files to use new styles and js when moved to public.
*	Add .htaccess with Pipsqueak Shortcuts system.
*	Remove git push to production or dev.
	*	Instead, need to push the dist/ files created by `npm run build`



**v0.4.3** 
_Begin Date - 2021-04-27_

*	Begin to move markup from home page into modules.
	*	Created the doppelgänger home page in the Pages module.
	*	Made a banner module.
		*	Populated four slides.
			*	Using images from [Unsplash][8]
			*	Attribution in alt tags and in the filenames themselves.
		*	Banner Module calls itself in order to make the nav indicators using the same list of images.



**v0.4.4** 
_Begin Date - 2021-05-24_

*	Work on home page.
*	Add a cards modules with an "online" template for documentation and repo links.
	*	Uses a columns variable to set online for 2 items and default for 3.





[![][piplogo]][pipurl]


[header]: https://picsum.photos/id/1073/1200/400
[siteurl]: https://sample.codemodules.com
[piplogo]: https://pipsqueak.com/images/Logo-Pipsqueak_Bookplate-Red_Text-bgTrans-200x190.png
[pipurl]: https://pipsqueak.com/



✔	✘	⚪	⇧	∧	⌥	⌘	↩	⇧∧⌥⌘↩	← → ⟵ ⟶


[1]: https://codemodules.net
[2]: https://sample.codemodules.net/
[3]: https://dev.codemodules.net/
[4]: https://startbootstrap.com/template/modern-business
[5]: https://github.com/startbootstrap/startbootstrap-modern-business
[6]: https://dummyimage.com/
[7]: https://medium.com/@JSdevelop/compiling-less-to-css-in-gulp-7dddf30a63e1
[8]: https://unsplash.com/
