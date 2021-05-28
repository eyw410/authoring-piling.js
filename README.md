# Authoring Piling Tool

This tool was designed to convert [Piling.js](https://github.com/flekschas/piling.js), a programming library designed to visualize small-multiple data, into an end-user library that supports developing and exploring by beginners, while maintaining the flexibilities and capabilities of the original library for experts. This project allows users to load piling project examples, upload their own data into the example projects, and develop their own piling interfaces.

![Usage Diagram](https://user-images.githubusercontent.com/10744026/120001321-ab544a80-bfa1-11eb-9c72-8b4e62565d61.png)

## Get started

Install the dependencies...

```bash
cd authoring-piling.js
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see the app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

## Setup

The outermost tool is the _authoring tool_, the website that is the outer app with the REPL. It is built with Svelte.

The REPL in the authoring tool is configured for creating piling interfaces through a set of files that will be referred to as the _user project_. The files (_components_) that constitute the user project could be used outside the authoring tool, although the authoring tool serves as a sandbox that facilitates the creation of the user project. The piling library is loaded in the user project.

![Layout](https://user-images.githubusercontent.com/10744026/120000721-1d785f80-bfa1-11eb-9be2-38de6a97501a.png)

## Caching

The authoring tool saves user settings (adjustable in the settings modal) as well as the components of the user project in Svelte stores in the browser tab sessionStorage. It additionally stores the piling state between builds of the user project.

The settings modal contains options for whether or not to run automatically when the REPL code is changed and whether or not to preserve the piling state between runs. It also has reset buttons for the app cache (resets completely to the default components and user settings) and the piling state (deletes the previous piling state and allows the current user project to be run fresh). The code for handling these actions is in the onMount function of the user project’s App.svelte. A broadcast channel is used to tell the authoring tool when the piling instance is updated—Editor.svelte listens for the message and updates the Svelte store when it hears that the piling instance has updated.

## Debug Mode

Debug is a URL parameter that, when true, does not save the piling state between runs. Having it false will in future also hide some of the files to simplify the setup that a beginner user encounters.

## Authoring Tool Files

**App.svelte**

main authoring tool file
-	sets up data storage in browser tab sessionStorage
-	authoring tool layout

**stores.js**

Svelte stores that are saved in brower tab sessionStorage
-	the user settings and user project (components) are saved within sessionStorage

**constants.js**

constant values
-	contains default values, keys, and crucially, the default components (the files that together constitute the default user project)

**Editor.svelte**

wrapper for the REPL, based on [Svelte REPL](https://github.com/sveltejs/svelte-repl)

Changes: code for pixiJs, umapJs, and pilingJs are injected into the REPL

**Repl.svelte**

REPL with collapsible panels, based on [Svelte REPL](https://github.com/sveltejs/svelte-repl)

Changes: added helper panel (top left)

-	top left: “helper” panel—provides beginner user with simpler tools
o	shows data when data tab is selected
-	bottom left: code panel
-	top right: compiled user project
-	bottom right: user project developer console

**repl/Input/ModuleEditor.svelte**

code editor component, based on [Svelte REPL](https://github.com/sveltejs/svelte-repl)

**repl/Input/ComponentSelector.svelte**

component for selecting user project files, based on [Svelte REPL](https://github.com/sveltejs/svelte-repl)

Changes: Clean up component titles to strip away file-ending and standardize capitalization

**Output/index.svelte**

output viewer that shows bundled project, based on [Svelte REPL](https://github.com/sveltejs/svelte-repl)

## User Project Files

These are contained in constants.js, as the default components loaded when the authoring tool is run, or they are loaded in from example projects.

**App.svelte**

main user project file
-	sets up piling interface
-	manages rebundling
-	uses sessionStorage for piling state

**data.json**

raw data for piling interface

**data.js**

processes raw data from data.json

**renderers.js**

converts raw data elements into visual elements (items)

**aggregators.js**

determines how piled items are aggregated

**styles.js**

styles for the piling interface

**group-arrange.js**

determines how piled items are grouped and arranged

**sidebar.svelte**

creates sidebar (opens when setting wheel is clicked) for non-permanent exploration of the user project

**option, field, button, checkboxes, select, radio, input svelte files**

helper components for sidebar
(listeners is remnant from original piling.js)

## Features
- [x] build authoring tool that integrates Svelte repl with piling.js
- [x] cache user settings and the user project's piling interface state between runs
- [x] create sample projects that can be loaded
- [x] allow users to modify existing projects or create their own project
- [x] allow users to load their data into a project
- [ ] interactive sidebar (partially implemented)
- [ ] Revisit intermediate preview and use PixiJS object
- [ ] Flesh out the templates for user project components (e.g. renderers, aggregators, styles, grouping and arranging)
- [ ] Hide files under debug=false
- [ ] Exporting/importing project locally
- [ ] templating—exporting piling interface without the data

<!--
This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.
 -->
