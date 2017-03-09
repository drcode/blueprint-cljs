(defproject kitchensink "0.1.0-SNAPSHOT"
  :description "Blueprint-cljs example"
  :dependencies [[org.clojure/clojure "1.9.0-alpha12"]
                 [org.clojure/clojurescript "1.9.229"]
                 [org.omcljs/om "0.9.0" :exclusions [cljsjs/react]]
                 [cljsjs/react-with-addons "0.13.3-0"]
                 [org.clojars.drcode/blueprint-cljs "0.1.1-SNAPSHOT"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]])
