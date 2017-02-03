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
                                    (dom/div {:style {:margin-top "1em"
                                                      :height "1em"
                                                      :background-color "silver"}})))]
                     (dom/div {:class (when (enabled? :dark)
                                        "pt-dark")}
                              (dom/nav {:class "pt-navbar"}
                                       (dom/div {:class "pt-navbar-group pt-align-left"}
                                                (dom/div {:class "pt-navbar-heading"}
                                                         "A page with all Blueprintjs Components, rendered in Om"))
                                       (dom/div {:class "pt-navbar-group pt-align-right"}
                                                (dom/a {:href "https://github.com/drcode/blueprint-cljs"} (bp/button {:icon-name "home" :class "pt-minimal"
                                                              :intent (bp/intents :primary)} "Github"))
                                                (dom/a {:href "https://github.com/drcode/blueprint-cljs/blob/master/examples/kitchensink/src/kitchensink/core.cljs"} (bp/button {:icon-name "pt-icon-document-open" :class "pt-minimal"} "Code for this page"))))
                              (dom/div {:style {:display "flex"
                                                :justify-content "center"}}
                                       (dom/div {:style {:width "800px" :background-color (if (enabled? :dark)
                                                                                                "#333844"
                                                                                                "#EEE")
                                                         :padding          "3em"}}

                                                
                                                (section "Click on things for animations & stuff. " (dom/i "This demo page is intended for desktop browsers only."))
                                                (section (bp/switch {:on-click (toggle :dark)} "Turn off the lights!"))
                                                
                                                (section (bp/button {:on-click (toggle :alert)}
                                                                    "Open Alert"))
                                                
                                                (bp/alert {:is-open    (enabled? :alert)
                                                           :cancel-button-text "Get me outa here"
                                                           :on-cancel (toggle :alert)
                                                           :confirm-button-text "I like this!"
                                                           :on-confirm (toggle :alert)}
                                                          "This is an alert with text.")

                                                (section (bp/button {:on-click (fn []
                                                                                 (.show my-toaster #js {:intent (:danger bp/intents)
                                                                                                        :message "This is a very dangerous button. Do not press it again." } ))} "Toast (Press multiple times)"))
                                                
                                                (section (bp/button {:on-click (toggle :dialog)}
                                                                    "Show Dialog"))

                                                (section (bp/tabs (bp/tab-list (bp/tab "A Tab") (bp/tab "Another Tab") (bp/tab "Last Tab"))
                                                                  (bp/tab-panel "Some stuff.")

                                                                  (bp/tab-panel "Some more stuff.")
                                                                  (bp/tab-panel "The last stuff.")))


                                                (bp/dialog {:icon-name "inbox"
                                                            :is-open (enabled? :dialog)
                                                            :on-close (toggle :dialog)
                                                            :title "Awesome Dialog"}
                                                           
                                                           (dom/div {:class "pt-dialog-body"}
                                                                    (dom/p "Here is some random text in this awesome dialog")
                                                                    (dom/p (dom/input {:class "pt-input" :placeholder "foo"})))
                                                           (dom/div {:class "pt-dialog-footer"}
                                                                    (dom/div {:class "pt-dialog-footer-actions"}
                                                                             (bp/button {:intent (bp/intents :primary)} "Submit")
                                                                             (bp/button "Nothing"))))
                                                (section (bp/button {:on-click #(.show  bp/context-menu
                                                                                        (bp/menu (bp/menu-item {:text "One Item"})
                                                                                                 (bp/menu-item {:text "Another Item"}))
                                                                                        #js {:left 100 :top 300})} "Show context menu"))

                                                (section {:class "pt-breadcrumbs"}
                                                         (dom/li (bp/breadcrumb {:text "Crumb1"}))
                                                         (dom/li (bp/breadcrumb {:text "Crumb2"}))
                                                         (dom/li (bp/breadcrumb {:text "Crumb3"})))


                                                (section (dom/p (bp/button {:intent (bp/intents :primary)} "I'm Primary"))
                                                         (dom/p (bp/button {:intent (bp/intents :danger)} "Danger!"))
                                                         (dom/p (bp/button {:icon-name "refresh"} "I've got an icon")))
                                                
                                                (section {:class "pt-button-group"}
                                                         (bp/button {:intent (bp/intents :success)} "Buttons") (bp/button "in a") (bp/button "group"))

                                                (section {:class "pt-callout pt-intent-danger"}
                                                         (dom/h5 "Warning")
                                                         "You are reading the text in a callout.")

                                                (section (dom/div {:class "pt-card pt-elevation-3"}
                                                                  "Look at me! I'm floating!"))

                                                (section (bp/button {:on-click (toggle :collapse)} "Collapse")
                                                         (bp/collapse {:is-open (enabled? :collapse)}
                                                                      "This is the text that will collapse"))

                                                (section (bp/slider {:min 1
                                                                     :max 10
                                                                     :value (:slider (om/get-state this))
                                                                     :on-change (fn [value]
                                                                                  (om/update-state! this assoc :slider value))})
                                                         (bp/collapsible-list {:class "pt-breadcrumbs"
                                                                               :visible-item-count (:slider (om/get-state this))
                                                                               :dropdown-target (dom/span {:class "pt-breadcrumbs-collapsed"})
                                                                               :render-visible-item (fn [props]
                                                                                                      (dom/span {:class "pt-breadcrumb"} (.-text props)))}
                                                                              (bp/menu-item {:text "These"})
                                                                              (bp/menu-item {:text "Words"})
                                                                              (bp/menu-item {:text "Can"})
                                                                              (bp/menu-item {:text "Be"})
                                                                              (bp/menu-item {:text "Removed"})
                                                                              (bp/menu-item {:text "With"})
                                                                              (bp/menu-item {:text "The"})
                                                                              (bp/menu-item {:text "Slider"})))

                                                (section (dom/div "This is just text")
                                                         (dom/div (bp/editable-text {:on-change (fn [s]
                                                                                                  (om/update-state! this assoc :text s))
                                                                                     :value (:text (om/get-state this))}))
                                                         (dom/div "This is just text"))

                                                (section (bp/checkbox {:checked (enabled? :checkbox)
                                                                       :on-change (toggle :checkbox)}
                                                                      "Checkbox"))

                                                (section (bp/radio-group {:on-change (fn [event]
                                                                                       (om/update-state! this assoc :radio (.-value (.-target event))))
                                                                          :selected-value (:radio (om/get-state this))}
                                                                         (bp/radio {:label "Cole Slaw" :value "slaw"})
                                                                         (bp/radio {:label "Fries" :value "fries"})
                                                                         (bp/radio {:label "Mango Chips" :value "chips"})))

                                                (section (bp/input-group {:left-icon-name "refresh"
                                                                          :value "Text input with icons & stuff"
                                                                          :right-element (bp/button {:intent (bp/intents :warning)} "Do It!")}))
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
                                                                      :popover-class-name "pt-popover-content-sizing"} (bp/button {:on-click (toggle :popover)} "Popover")))

                                                (section (dom/p (bp/progress-bar {:value 0.8}))
                                                         (dom/p) (bp/spinner))


                                                (section (dom/table {:class "pt-table pt-striped"}
                                                                    (dom/thead (dom/th "Col1") (dom/th "Col2") (dom/th "Col3"))
                                                                    (dom/tbody
                                                                     (dom/tr (dom/td "Stuff") (dom/td "In") (dom/td "A Table"))
                                                                     (dom/tr (dom/td "Stuff") (dom/td "In") (dom/td "A Table"))
                                                                     (dom/tr (dom/td "Stuff") (dom/td "In") (dom/td "A Table")))))

                                                (section (dom/p (bp/tag "Just"))
                                                         (dom/p (bp/tag {:intent (bp/intents :primary)} "Some"))
                                                         (dom/p (bp/tag {:on-remove (fn [])}  "Tags")))
                                                (section (bp/tooltip {:content "This is very important text"} "Hover over me."))

                                                (section (bp/tree {:contents (bp/clj->tree-nodes [{:label "Foo"}
                                                                                                  {:label "Bar"
                                                                                                   :is-expanded true
                                                                                                   :child-nodes [{:label "Qux"}
                                                                                                                 {:label "Quux"}
                                                                                                                 {:label "Quuux"}]}
                                                                                                  {:label "Baz"}])}))))))))

(def root (om/factory Root))

(js/ReactDOM.render (root) (gdom/getElement "app"))
