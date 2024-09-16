[![][header]][siteurl]



# Code Modules

Code Modules (CM) is an include-based architecture for static websites where the pages are created at build time. Code Modules uses the text editor BBEdit, particularly its include and variables features, to make maintainable static websites without databases. Code Modules doesn’t dictate a certain style of website. Code Modules organizes the way in which your pages get built, but what you build is entirely up to you. You can build anything you like using any markup you choose.

*	Click for documentation: [codemodules.net][1]

*	Click for demo Sample Website: [sample.codemodules.net][2]. 
	*	This [GitHub repo][3] contains the source code for the Sample Website so that you can take it apart and see how it works in practice.

*	Click for the starter files for modules at [app/modules-starter/][4]. You can download them, rename the containing folder `app/modules/`, and alter them for your own projects.

Other than Pipsqueak’s logo, Code Modules is open source under the MIT license.

Below are just the notes for the creation of the Sample Website.  The links above should be of more interest.



## Code Modules — Sample Website

This is an HTML5 project using BBEdit, Bootstrap 5, and Parcel. Theme is [Modern Business][5] from Start Bootstrap.

`npm start` — development using Parcel process

`npm run build` — build files for production (or dev) in dist/ folder

gitpush no longer works to push to dev or production server. Instead, use rsync scripts in package.json:

`npm run pushdev` - Push to development server

`npm run pushlive` - Push to production server

v1.0.0 released 2021-09-07.



### To Do

⚪	Refactor Nav module



### Changelog

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

*	Adopt [Start Bootstrap’s Modern Business Theme][5] + [GitHub][6] and its build process using Gulp.
	*	`npm i startbootstrap-modern-business`
	*	Make adjustments to paths so that `public/` is separate and thinned from `theme/`



**v0.4.1** 
_Release Date - 2021-04-27_

*	Change placehold.it to [dummyimage.com][7] links to support https://
	*	`====http://placehold.it/(\d+x\d+)====` s/r All `====https://dummyimage.com/\1/CCC/999.gif====`
	*	Here's a sample: `https://dummyimage.com/500x300/CCC/999.gif`
*	Add the ability to process less files with gulp. [ref][8]
	*	`npm install --save-dev gulp-less gulp-autoprefixer`
*	Convert style system to less.



**v0.4.2** 
_Release Date - 2021-04-27_

*	Add parcel to the local project.
	*	`npm install parcel-bundler --save-dev`
*	Update `package.json`
*	Change javascript to a bundle using Parcel.
*	Test js modules with Parcel.
*	Update theme HTML files to use new styles and js when moved to public.
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
			*	Using images from [Unsplash][9]
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

*	Set up the Nav high level module using navigation from the theme.



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

*	Fix canonical URLs by adding HTML extension.
*	Move unused pagination markup to Elements/markup module.
*	Remove extra end div for container from templates.
*	Refactor the Cards module.
	*	The Cards module is just about layout now. There is no content inside of it.
	*	Pull the high-level-modules and online functions out to a new high-level-modules and Links module respectively.
		*	Each module calls the Cards module when it needs to make a card for the home page.



**v0.4.12** 
_Begin Date - 2021-07-26_

*	Update home page text.
*	Create Portfolio template for high-level-modules module.
*	Add [Font-Awesome][10], [v4.7.0][11]
	*	Include new link item in Tech module.
	*	[Browse Icons][12]
*	Add an icon markup in Elements module; pass in the particular desired icon.
	*	Also can pass in an optional ICON-CLASS variable; defaults to `fa-1x`. [Ref][13].
		*	Can be `fa-lg`, or `fa-2x`, `fa-3x`, `fa-4x`, `fa-5x` for size. 
		*	Can include `fa-fw` for fixed width. 
		*	Can include `fa-li` for use in lists. 
		*	Can include `fa-spin` or `fa-pulse` to animate. 
		*	Can include classes to rotate and flip: `fa-rotate-90`, `fa-rotate-180`, `fa-rotate-270`, `fa-flip-horizontal`, `fa-flip-vertical`.
*	Populate portfolio pages with multiple columns and breakpoints.
*	"Related Projects" section of single portfolio item.
	*	Change from hard coded to flex items.
	*	Use classes to eliminate the current item from the list.
*	Create individual portfolio item pages for each high level module.
*	Add a new "npm run webdev" command to start up development for Code Modules sample files on my local system.
*	Replace direct calls to Unsplash with local versions of the Editorial images.
	*	Original Image URLs for [Markup][14], [Page][15], [Nav][16], [Elements][17], [Tech][18]



**v0.4.13** 
_Begin Date - 2021-07-31_

*	Fill out EXTRA-TEXT variables for each of the five high-level-modules items.
*	Modify the webdev command.



**v0.4.14** 
_Begin Date - 2021-08-08_

*	Work on the Blog module.
	*	Use for the Services page.
	*	Create a single blog post template.
	*	Create a Recent Blog Posts sidebar widget.
	*	Add individual blog posts to navigation.
	*	Build out three blog pages.
*	Refactor of Cards module types.
	*	Abstract out the buttons to parts/
*	Populate the Blog List Pages - Blog Home 1 and Blog Home 2.



**v0.4.15** 
_Begin Date - 2021-08-13_

*	Make the blog items appear on the various nav lists automatically.
	*	This was tricky and will be a bit difficult to explain in documentation. 
	*	But it's a good example of the power of Code Modules.



**v0.4.16** 
_Begin Date - 2021-08-16_

*	Got the Blog and Portfolio (high-level-modules) items to work in the various navigation markup forms.
	*	Uses TERTIARY-NAV-TYPE variable
		*	This defines how the Blog Post and Portfolio items will look in the navigation list.
			*	There are three different navigation placements: top, sidebar, 404.  
			*	Top is a dropdown-item, sidebar is simple-bare, and 404 is dropdown-item-ul.
	*	Uses the recent blog posts list.
		*	Right now, that's the same as all blog posts.
	*	The Portfolio (high-level-modules) items now work in the various navigation markup forms.
*	Some clean-up for navigation changes.
*	Add a Dropdown Divider for top navigation that's null on the other navigation forms.
	*	Defined as null by default and as 'dropdown-divider' for top navigation.
*	Remove single blog post and single portfolio item from navigation.



**v0.4.17** 
_Begin Date - 2021-08-17_

*	Flesh out the About page.
*	Add photos for fake team members.
*	Create a Customers module with fake logos.



**v0.4.18** 
_Begin Date - 2021-08-20_

*	Normalized the #IMAGE-PATH# variable name.
*	Add a Products module.
	*	Use it for the Pricing page.
	*	Set up initially so that it can be used for other pages, even though it's only used on Pricing page at the moment.
		*	This means that there's a prices template which needs to be called when calling Products for the pricing page.
*	Special styling for lists (add class `list-group-items` to parent ul tag) within cards so that individual li tags don't need classes applied.
	* `ul.list-group li.list-group-item` (old) is now equivalent to `ul.list-group-items li`
*	Add an introduction to the Pricing page.
*	Normalize the page subheads.
*	Set up Contact page
	*	Using the Palace of the Legion of Honor as the location.



**v0.4.19** 
_Begin Date - 2021-08-30_

*	Refactor and slim the Tech module.
*	Lots of format changes for the Blog and Card modules.
*	Move content out of About page and into Elements module items.
*	Add Google and Microsoft verification metatags.
*	Create a base and extended description.
*	Simplify the Elements high level module by removing the subfolders.
	*	Adjust all the calls to the Elements module by removing the templates variable.



**v0.5.0** 
_Begin Date - 2021-08-31_

*	Change the default.shtml entry file in every module to entry.shtml.
	*	Affects all the calls and the documentation.
	*	`====#bbinclude ("|')(/[A-Za-z0-9/_-]*)/default.shtml("|')==== s/r CAREFULLY ====#bbinclude "\2/entry.shtml"====`
	*	Check through the text -- e.g. Faq page -- to normalize the use of entry.



**v0.5.1** 
_Begin Date - 2021-09-04_

*	Add image preload links to the head of the home page for the banner carousel.
	*	Just on the home page.
*	Update some text.
*	Rename top-level-modules module to high-level-modules; adjust documentation.
*	Remove unused global variables.
*	Normalize variable names to all caps kebab case.
*	Create a **modules-starter/** folder with a skeleton of the modules system.
	*	This is what users would download and use to start their own projects.
	*	Still needs work.



**v0.5.2** 
_Begin Date - 2021-09-06_

*	Normalize more variables (e.g. ALTTITLE to ALT-TITLE).
*	Remove the unused markup/videos/ module.
	*	Keep the markup/quotes module which is unused.



**v1.0.0** 
_Release Date - 2021-09-07_

*	Open GitHub repo.
*	Change ACTIVECLASS variable to ACTIVE-CLASS.
*	Banner module is using images from originals/ subfolder.
	*	Compress and scale images
	*	Use new image names in Banner module items.
*	Code Modules is released.



**v1.0.1** 
_Release Date - 2021-09-07_

*	Regularize em-dashes to be surrounded by spaces.



**v1.0.2** 
_Release Date - 2021-09-10_

*	Add a pushimages script to push the whole image folder to the server.
	*	Necessary for documentation to pull images from the Sample website. The Sample Website itself uses Parcel to build the site and doesn't use the images/ folder on the production server.
*	Reorganize the push scripts a bit. Add the pushimages script to the end of pushlive.
	*	Ignore the tmp folders in images/
	*	Ignore .DS_Store files.
*	Add some images -- screenshots and diagrams -- that are pulled from the server for Code Module docs.



**v1.0.3** 
_Release Date - 2021-09-11_

*	Adjust the **modules-starter/** folder.
	*	Tech has a links preload item that references banner markup module that's not in the starter set. Remove the preload item.
		*	That makes the necessity of separating the home page from the rest moot.
	*	Add a call to the FAQ module from the Home page doppelgänger.
	*	Change call to Footer Markup module from persistent to simple include.



**v1.0.4** 
_Release Date - 2021-09-13_

*	It is more consistent to replace PAGE variable calls to the Pages module with TEMPLATE.
	*	Sometimes, the PAGE variable is used within a module which may have overwritten the TEMPLATE variable. So define `#PAGE# = '#TEMPLATE#'` in the global variables so that it can be used further down the chain.
*	Add a title attribute to the related Portfolio items anchor tags around related images.
*	Add a color to the far background of all pages to match header and footer color.
	*	Stops the white bounce when scroll up or down to the extremes of the page.
*	Adjust the Tech module so that most items call a type file.
	*	Some remain markup without a type file.
	*	Make these adjustments to the modules-starter set as well.
	*	Move canonical-url from meta items to link items.
*	Take off the notice that says Code Modules isn't released yet.



**v1.0.5** 
_Release Date - 2021-09-17_

*	Nav template `unordered-linked-list.shtml` has an unwieldy name. Change to `ul-links.shtml`
	*	Update Sample Website and Documentation.



**v1.0.6** 
_Release Date - 2022-01-01_

*	Update copyright date.



**v1.0.7** 
_Release Date - 2023-01-01_

*	Update copyright date.



**v1.0.8** 
_Release Date - 2024-01-01_

*	Update copyright date.



**v1.0.9** 
_Release Date - 2024-01-01_

*	



[![][piplogo]][pipurl]



[header]: https://pipsqueak.com/images/Logo-Code_Modules-OW-256-scaled-fgBlack-bgTrans-600x600.png
[siteurl]: https://sample.codemodules.com/
[piplogo]: https://pipsqueak.com/images/Logo-Pipsqueak_Bookplate-Red_Text-bgTrans-200x190.png
[pipurl]: https://pipsqueak.com/



✔	✘	⚪	⇧	∧	⌥	⌘	↩	⇧∧⌥⌘↩	← → ⟵ ⟶


[1]: https://codemodules.net/
[2]: https://sample.codemodules.net/
[3]: https://github.com/ChristopherWerby/code-modules
[4]: https://github.com/ChristopherWerby/code-modules/tree/master/app/modules-starter
[5]: https://startbootstrap.com/template/modern-business
[6]: https://github.com/startbootstrap/startbootstrap-modern-business
[7]: https://dummyimage.com/
[8]: https://medium.com/@JSdevelop/compiling-less-to-css-in-gulp-7dddf30a63e1
[9]: https://unsplash.com/
[10]: https://fontawesome.com/
[11]: https://fontawesome.com/v4.7/
[12]: https://fontawesome.com/v4.7/icons/
[13]: https://fontawesome.com/v4.7/examples/
[14]: https://source.unsplash.com/DGHy9KgdTj0/700x400
[15]: https://source.unsplash.com/-zmHJsYXjqM/700x400
[16]: https://source.unsplash.com/VNcWRWZn4Dw/700x400
[17]: https://source.unsplash.com/0GDN7NSoYRI/700x400
[18]: https://source.unsplash.com/MTny44oAFx0/700x400
