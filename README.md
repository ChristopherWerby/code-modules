[![][header]][siteurl]

# Code Modules — Sample Files

This is an HTML5 project using BBEdit and Parcel. Theme is [Modern Business][4] from Start Bootstrap.

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
	*	This didn't work with Parcel and was removed in v0.4.8
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
		*	Banner Module calls itself in order to make the nav indicator dashes using the same list of images.



**v0.4.4** 
_Begin Date - 2021-05-24_

*	Work on home page.
*	Add a cards modules with an "online" template for documentation and repo links.
	*	Uses a columns variable to set online for 2 items and default for 3.



**v0.4.5** 
_Begin Date - 2021-05-27_

*	Work on "portfolio panels", which I'm going to use in cards module, for module types.
	*	Each requires a hero image 700x400.



**v0.4.6** 
_Begin Date - 2021-05-31_

*	Add "Features of Code Modules" list. 
	*	Add pomegranate image.
*	Update footer text.
*	Swap an image in the banner carousel.



**v0.4.7** 
_Begin Date - 2021-07-03_

*	Set up the Nav top-level module using navigation from the theme.



**v0.4.8** 
_Begin Date - 2021-07-13_

*	Add all the pages from Modern Business theme to the public root.
	*	Only the about.html page is slightly integrated into Code Modules.
*	.htaccess and Parcel are not compatible.
	*	Remove .htaccess file.
	*	Put all pages in the public root.
	*	Change nav to use non-abstracted URLs.
	*	Use absolute paths starting at the public root.
		*	e.g. "/images/..."



**v0.4.9** 
_Begin Date - 2021-07-17_

*	Continue work on the Tech module.
*	The Home and About pages are templated for head, header, nav, footer, and foot.
*	About page uses the Team module.
*	Integrate Services page.
*	Integrate Contact page.
*	Integrate Portfolio 1, Portfolio 2, Portfolio 3, Portfolio 4, and Portfolio Item pages.
*	Integrate Blog Home 1, Blog Home 2, Blog Post.
*	Integrate Full Width, FAQ, Pricing page, Sidebar page, 404 page.
*	Refactor Nav module to allow for multiple output types.
	*	It can now output the nav bar (as before), a div containing a list of bare anchor tags for the Sidebar page, and an unordered list for the 404 page
	*	The Sidebar page item is the only one using simple-bare type. So the active class is hard-coded into the sidebar item file which overwrites the template div-links.shtml definition for the ACTIVE-CLASS variable.
*	Begun work on FAQ module. Got to the point where I should create items.



**v0.4.10** 
_Begin Date - 2021-07-19_

*	Write the FAQ content and build out the Faq module.
*	Put the Title and Subtitle for each page into a page part.
	*	Delete the old Header markup module.
*	Create a Breadcrumb module and implement for all pages (other than home page).
*	Replace hard coded column numbers in Cards module with variables.



**v0.4.11** 
_Begin Date - 2021-07-24_

*	Fix canonical URLs by adding html extension.
*	Move unused pagination markup to Elements/markup module.
*	Remove extra end div for container from templates.
*	Refactor the Cards module.
	*	The Cards module is just about layout now. There is no content inside of it.
	*	Pull the top-level-modules and online functions out to a new Top-level-modules and Links module respectively.
		*	Each module calls the Cards module when it needs to make a card for the home page.



**v0.4.12** 
_Begin Date - 2021-07-26_

*	Update home page text.
*	Create Portfolio template for Top-level-modules module.
*	Add [Font-Awesome][9], [v4.7.0][10]
	*	Include new link item in Tech module.
	*	[Explore Icons][11]
*	Add an icon markup in Elements module; pass in the particular desired icon.
*	Populate portfolio pages with multiple columns and breakpoints.
*	"Related Projects" section of single portfolio item.
	*	Change from hard coded to flex items.
	*	Use classes to eliminate the current item from the list.
*	Create individual portfolio item pages for each top-level module.
*	Add a new "npm run webdev" command to start up development for Code Modules sample files on my local system.




[![][piplogo]][pipurl]


[header]: https://pipsqueak.com/images/Logo-Code_Modules-OW-256-scaled-fgBlack-bgTrans-600x600.png
[siteurl]: https://sample.codemodules.com
[piplogo]: https://pipsqueak.com/images/Logo-Pipsqueak_Bookplate-Red_Text-bgTrans-200x190.png
[pipurl]: https://pipsqueak.com/



✔	✘	⚪	⇧	∧	⌥	⌘	↩	← → ⟵ ⟶


[1]: https://codemodules.net
[2]: https://sample.codemodules.net/
[3]: https://dev.codemodules.net/
[4]: https://startbootstrap.com/template/modern-business
[5]: https://github.com/startbootstrap/startbootstrap-modern-business
[6]: https://dummyimage.com/
[7]: https://medium.com/@JSdevelop/compiling-less-to-css-in-gulp-7dddf30a63e1
[8]: https://unsplash.com/
[9]: https://fontawesome.com/
[10]: https://fontawesome.com/v4.7/
[11]: https://fontawesome.com/v4.7/icons/
