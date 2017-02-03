# Om Bindings for Palantir's Blueprintjs Library

Demo for this library [here](http://lisperati.com/blueprint)

Palantir's [Blueprintjs](http://blueprintjs.com/) is a React-compatible library of components optimized for desktop web applications. In my opinion, it is a perfect companion for the Clojurescript Om framework.

This `blueprint-cljs` library allows Blueprintjs to be used from Om and OmNext. Note that it is still alpha, which means:

1. It likely won't work with clojurescript advanced compilation
2. It has a couple of ugly hacks (detailed below) that you likely wouldn't want in a production application.

Also, no attempt yet has been made to integrate this library with clojurescript's recent javascript module support, which will likely be needed to get advanced compilation working.

## How to use `blueprint-cljs`

In your project.clj file, include the dependency `[org.clojars.drcode/blueprint-cljs "0.1.1"]`

*Step 1: Make sure you are using Om with "Batteries Included"*

Blueprintjs performs many animations, so you need the react addons, which means you should use Om with addons compiled in, which is the dependency `[org.omcljs/om "1.0.0-addonsalpha48-SNAPSHOT"]`

Additionally, `blueprint-cljs` uses the [`om-tools` convention for attribute maps](https://github.com/plumatic/om-tools#dom-tools), so you may want to use this library in the rest of your program as well, with the dependency `[prismatic/om-tools "0.4.0"]`.

*Step 2: Include the css and the js in your index.html file*

Here are the necessary html declarations:

```
<link href="static_css/blueprint.css" rel="stylesheet" />
<script src="static_js/blueprint_bundle.js" type="text/javascript"></script>
```

The necessary js and css files are in `resources/static_js` and `resources/static_css`, respectively.

*Step 3: Reference blueprintjs components in your Om or OmNext application:*


```clojurescript
(ns kitchensink.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [blueprint-cljs.core :as bp]))

(defui Root
  Object
  (render [this]
          (bp/button nil "Button")))

(def root (om/factory Root))

(js/ReactDOM.render (root) (gdom/getElement "app"))
```

You should now see an extra-pretty Blueprintjs button in your app!

## Building the blueprintjs javascript bundle

You'll need nodejs, npm, browserify, all that fun stuff. Then from the root directory run:

```
> npm install
> sh build_blueprint.sh 
```

Unfortunately, though `blueprint-cljs` is fully functional when used as advised (short of advanced compilation support) it relies on one unfortunate hack, as well as two outright horrible hacks- These are detailed below.

If someone is more competent than me at javascript build tools and clojurescript/javascript interop and wants to submit pull requests to help remove these that would be awesome!

## Unfortunate Hack #1

Blueprintjs has a dependency on the React and ReactDOM NPM packages. However, Om loads its own instance of React and React does not play nice when double loaded. Thanks to pointers from António Monteiro, I was able to use the browserify "package excise" feature to surgically remove these packages from the final blueprint bundle.

## Horrible Hack #1

Of course, now that blueprintjs is missing React, it blows up when it initializes... it's not smart enough to "find" the version of react that was loaded via Om. There is a library called `browserify-shim` that exists specifically to address this problem, but I was not able to get it to work. Instead, I was able to fix this by including a `sed` command in the build script that wires in the correct references to React via manual search-and-replace against the final javascript bundle (sorry...)

## Horrible Hack #2

Another problem is that blueprintjs needs React to initialize, while blueprint-cljs needs blueprintjs to initialize... but each is in a separate js bundle, making either order of initializing the js bundles impossible. So how do we solve this dillema? Very easy, we explicitly initialize the javascript bundle right in the middle of the clojurescript bundle initialization! In `blueprint-cljs.core` you'll find a function call `(js/loadBlueprint)` that does exactly this. (Apologies again...)

