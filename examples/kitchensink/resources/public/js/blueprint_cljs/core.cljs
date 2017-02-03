(ns blueprint-cljs.core
  (:require [om-tools.dom :as dom]))

(defn extract-opts [args]
  (if (and (seq args) (map? (first args)))
    [(first args) (rest args)]
    [{} args]))

(defn declare-factory [factory]
  (fn [& args]
    (let [[props children] (extract-opts args)]
      (apply factory (dom/format-opts props) children))))

(defn declare-component [component]
  (fn [& args]
    (let [[props children] (extract-opts args)]
      (apply js/React.createElement component (dom/format-opts props) children))))

(js/loadBlueprint)

(def button (declare-factory js/Blueprint.ButtonFactory))
(def spinner (declare-factory js/Blueprint.SpinnerFactory))
(def editable-text (declare-factory js/Blueprint.EditableTextFactory))

(def collapse (declare-component js/Blueprint.Collapse))

(def tabs (declare-factory js/Blueprint.TabsFactory))
(def tab-list (declare-factory js/Blueprint.TabListFactory))
(def tab (declare-factory js/Blueprint.TabFactory))
(def tab-panel (declare-factory js/Blueprint.TabPanelFactory))

(def alert (declare-component js/Blueprint.Alert))
(def dialog (declare-factory js/Blueprint.DialogFactory))
(def overlay (declare-factory js/Blueprint.OverlayFactory))

(def input-group (declare-factory js/Blueprint.InputGroupFactory))
(def tag (declare-factory js/Blueprint.TagFactory))

(defn toaster []
  (.create js/Blueprint.Toaster
           #js {:position js/Blueprint.Position.BOTTOM}))

(let [i js/Blueprint.Intent]
  (def intents {:primary (.-PRIMARY i)
                :success (.-SUCCESS i)
                :warning (.-WARNING i)
                :danger (.-DANGER i)}))
