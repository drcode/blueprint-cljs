# Om Bindings for Palantir's Blueprintjs Library

See a demo for this library (here)[http://lisperati.com/blueprint_cljs]

Palantir's (Blueprintjs)[http://blueprintjs.com/] is a React-compatible library of components optimized for desktop web applications. This library allows Blueprint to be used from Om and OmNext. Note that it is still alpha, which means:

1. It likely won't work with clojurescript advanced compilation
2. It has a couple of ugly hacks (detailed below) that you likely wouldn't want in a production application.

Also, no attempt yet has been made to integrate this library with clojurescript's recent javascript module support, which will likely be needed to get advanced compilation working.

## How to use `blueprint-cljs`

In your project.clj file, include the dependency `[org.clojars.drcode/blueprint-cljs "0.1.1"]`

*Step 1: Make sure you are using Om with "Batteries Included"

Blueprintjs performs many animations, so you need the react addons, which means you should use Om with addons compiled in, which is the dependency `[org.omcljs/om "1.0.0-addonsalpha48-SNAPSHOT"]`

Additionally, `blueprint-cljs` uses the (`om-tools` convention for attribute maps)[https://github.com/plumatic/om-tools#dom-tools], so you may want to use this library in the rest of your program as well, with the dependency `[prismatic/om-tools "0.4.0"]`.

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




## Ugly hack 



