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
(def breadcrumb (declare-component js/Blueprint.Breadcrumb))
(def dialog (declare-factory js/Blueprint.DialogFactory))
(def overlay (declare-factory js/Blueprint.OverlayFactory))

(def input-group (declare-factory js/Blueprint.InputGroupFactory))
(def tag (declare-factory js/Blueprint.TagFactory))

(def slider (declare-factory js/Blueprint.SliderFactory))
(def switch (declare-factory js/Blueprint.SwitchFactory))

(def collapsible-list (declare-factory js/Blueprint.CollapsibleListFactory))

(def menu-item (declare-factory js/Blueprint.MenuItemFactory))
(def menu-divider (declare-factory js/Blueprint.MenuDividerFactory))
(def menu (declare-factory js/Blueprint.MenuFactory))

(def checkbox (declare-factory js/Blueprint.CheckboxFactory))
(def radio (declare-factory js/Blueprint.RadioFactory))
(def radio-group (declare-component js/Blueprint.RadioGroup))

(def non-ideal-state (declare-factory js/Blueprint.NonIdealStateFactory))

(def popover (declare-factory js/Blueprint.PopoverFactory))
(def tooltip (declare-factory js/Blueprint.TooltipFactory))
(def progress-bar (declare-factory js/Blueprint.ProgressBarFactory))

(def tree (declare-factory js/Blueprint.TreeFactory))

(defn clj->tree-nodes [nodes]
  (for [node nodes]
    (dom/format-opts (update node :child-nodes clj->tree-nodes))))

(defn toaster []
  (.create js/Blueprint.Toaster
           ))

(let [i js/Blueprint.Intent]
  (def intents {:primary (.-PRIMARY i)
                :success (.-SUCCESS i)
                :warning (.-WARNING i)
                :danger (.-DANGER i)}))

(def context-menu js/Blueprint.ContextMenu)
