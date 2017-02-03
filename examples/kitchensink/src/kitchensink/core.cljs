(ns kitchensink.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om-tools.dom :as dom]
            [blueprint-cljs.core :as bp]))

(enable-console-print!)

(def my-toaster (bp/toaster))

(defui Root
  Object
  (initLocalState [this]
                  {:collapse true
                   :slider 8
                   :text "This looks like text but can be edited"
                   :radio "slaw"})
  (render [this]
          (let [toggle   (fn [key]
                           (fn []
                             (om/update-state! this update key not)))
                enabled? (fn [key]
                           ((om/get-state this) key))
                section  (fn [& args]
                           (dom/div {:style {:padding-top "1em"}}
                                    (apply dom/div args)
                                    (dom/div {:style {:margin-top       "1em"
                                                      :height           "1em"
                                                      :background-color "silver"}})))]
            (dom/div {:class (when (enabled? :dark)
                               "pt-dark")}
                     (dom/nav {:class "pt-navbar"}
                              (dom/div {:class "pt-navbar-group pt-align-left"}
                                       (dom/div {:class "pt-navbar-heading"}
                                                "A page with all Blueprintjs Components, rendered in Om"))
                              (dom/div {:class "pt-navbar-group pt-align-right"}
                                       (dom/a {:href "https://github.com/drcode/blueprint-cljs"}
                                              (bp/button {:icon-name "home"
                                                          :class     "pt-minimal"
                                                          :intent    (bp/intents :primary)}
                                                         "Github"))
                                       (dom/a {:href "https://github.com/drcode/blueprint-cljs/blob/master/examples/kitchensink/src/kitchensink/core.cljs"}
                                              (bp/button {:icon-name "pt-icon-document-open"
                                                          :class "pt-minimal"}
                                                         "Code for this page"))))
                     (dom/div {:style {:display "flex"
                                       :justify-content "center"}}
                              (dom/div {:style {:width            "800px"
                                                :background-color (if (enabled? :dark)
                                                                    "#333844"
                                                                    "#EEE")
                                                :padding          "3em"}}

                                       
                                       (section "Click on things for animations & stuff. " (dom/i "This demo page is intended for desktop browsers only."))
left-icon-name "refresh"
                                                                 :value "Text input with icons & stuff"
                                                                 :right-element (bp/button {:intent (bp/intents :warning)}
                                                                                           "Do It!")}))
                                       (section (bp/menu (bp/menu-item {:icon-name "new-object" :text "Here's"})
                                                         (bp/menu-item {:icon-name "new-text-box" :text "A haiku that's"})
                                                         (bp/menu-item {:icon-name "new-link" :text "Written inside"})
                                                         (bp/menu-divider)
                                                         (bp/menu-item {:icon-name "cog" :text "A menu."})))
                                       (section (bp/non-ideal-state {:title "Please Stop It."
                                                                     :description "This widget cannot be burglebated more than five times with a yip yap."
                                                                     :visual "pt-icon-thumbs-down"}))
                                       (section (bp/popover {:content (dom/div (dom/p "Random stuff in here")
                                                                               (bp/button "A Button"))
                                                             :popover-class-name "pt-popover-content-sizing"}
                                                            (bp/button {:on-click (toggle :popover)}
                                                                       "Popover")))

                                       (section (dom/p (bp/progress-bar {:value 0.8}))
                                                (dom/p) (bp/spinner))


                                       (section (dom/table {:class "pt-table pt-striped"}
                                                           (dom/thead (dom/th "Col1") (dom/th "Col2") (dom/th "Col3"))
                                                           (dom/tbody
                                                            (dom/tr (dom/td "Stuff") (dom/td "In") (dom/td "A Table"))
                                                            (dom/tr (dom/td "Stuff") (dom/td "In") (dom/td "A Table"))
                                                            (dom/tr (dom/td "Stuff") (dom/td "In") (dom/td "A Table")))))

                                       (section (dom/p (bp/tag "Just"))
                                                (dom/p (bp/tag {:intent (bp/intents :primary)}
                                                               "Some"))
                                                (dom/p (bp/tag {:on-remove (fn [])}
                                                               "Tags")))
                                       (section (bp/tooltip {:content "This is very important text"}
                                                            "Hover over me."))

                                       (section (bp/tree {:contents (bp/clj->tree-nodes [{:label "Foo"}
                                                                                         {:label       "Bar"
                                                                                          :is-expanded true
                                                                                          :child-nodes [{:label "Qux"}
                                                                                                        {:label "Quux"}
                                                                                                        {:label "Quuux"}]}
                                                                                         {:label "Baz"}])}))))))))

(def root (om/factory Root))

(js/ReactDOM.render (root) (gdom/getElement "app"))
