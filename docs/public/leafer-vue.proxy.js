// components/application/index.ts
import { defineComponent, h, onMounted, onUnmounted, ref, renderSlot } from "vue";
import { App } from "leafer-ui";

// renderer/renderer.ts
import { UI as UI2 } from "leafer-ui";
import { camelize, createRenderer, markRaw } from "@vue/runtime-core";

// renderer/commentTag.ts
import { UI } from "leafer-ui";
var Empty = class extends UI {
  constructor() {
    super(...arguments);
    this.visible = false;
  }
};

// composables/useLogger.ts
function useLogger() {
  function log2(colorInfo) {
    const logData = {
      content: "",
      css: []
    };
    colorInfo.unshift({
      content: "\u2618\uFE0FLeafer-vue warn:"
    });
    colorInfo.forEach((item, index) => {
      logData.content += `%c${item?.content ?? " "}`;
      logData.css.push(
        `${item?.color ? `color:${item.color}` : ""}${item?.backgroundColor ? `;background:${item.backgroundColor}` : ""};padding: 0px${index === 0 ? ";border-top-left-radius: 25px; border-bottom-left-radius: 8px" : ""}${index === colorInfo.length - 1 ? ";border-top-right-radius: 8px; border-bottom-right-radius: 8px" : ""}`
      );
    });
    console.warn(
      `${logData.content}`,
      ...logData.css
    );
  }
  return {
    log: log2
  };
}

// utils/index.ts
function isOn(key) {
  return key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
}
function getEventNameByAttrName(attrName) {
  return attrName.replace(/^(on:?)?|Once$/g, "").replace(/([A-Z])/g, (_match, letter, index) => index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`);
}

// renderer/renderer.ts
var { log } = useLogger();
var renderer = createRenderer({
  createElement(tag) {
    const element = UI2.one({ tag });
    markRaw(element);
    return element;
  },
  patchProp(el, key, _prevValue, nextValue) {
    key = camelize(key);
    if (isOn(key)) {
      const eventName = getEventNameByAttrName(key);
      if (key.endsWith("Once"))
        el.once(eventName, nextValue);
      else
        el.on(eventName, nextValue);
    } else {
      el[key] = nextValue === "" ? true : nextValue;
    }
  },
  insert(el, parent) {
    if (parent?.tag === "App" && el?.tag !== "Leafer") {
      return;
    }
    if (el && parent)
      parent.add(el);
  },
  remove(el) {
    el?.destroy();
  },
  createText(text) {
    const trimmedText = text.trim();
    if (trimmedText) {
      log([
        {
          content: "[leafer-vue warn:]",
          color: "#feb027"
        },
        {
          content: "Direct text writing is not supported, please use "
        },
        {
          color: "#6eacf8",
          backgroundColor: "#222222",
          content: `<Text text="${trimmedText}" />`
        },
        {
          content: " instead"
        }
      ]);
    }
    return new Empty();
  },
  createComment() {
    return new Empty();
  },
  setText() {
  },
  setElementText() {
  },
  parentNode(node) {
    return node?.parent;
  },
  nextSibling(node) {
    if (!node || !node.parent)
      return null;
    const children = node.parent.children;
    const index = children.findIndex((_node) => _node.innerId === node.innerId);
    return index + 1 < children.length ? children[index + 1] : null;
  }
});

// renderer/index.ts
var createApp = renderer.createApp;

// composables/useGetPropsAndEventByAttrs/index.ts
function useGetPropsByAttrs(attrs) {
  const config = {};
  Object.keys(attrs).forEach((key) => {
    if (!key.startsWith("on"))
      config[key] = attrs[key];
  });
  return config;
}

// composables/useEffectUpdate.ts
import { watch } from "vue";
function useEffectUpdate(attrs, instance) {
  watch(
    () => useGetPropsByAttrs(attrs),
    (newConfig) => {
      instance.set(newConfig);
    }
  );
}

// components/application/index.ts
var LeaferApp = defineComponent({
  inheritAttrs: false,
  setup(_props, { slots, expose, attrs }) {
    const canvas = ref();
    const config = useGetPropsByAttrs(attrs);
    let container;
    function mount() {
      container = new App({
        ...config,
        view: canvas.value,
        // start: false,
        width: config.width || 800,
        height: config.height || 600
      });
      const app = createApp({
        render: () => renderSlot(slots, "default")
      });
      app.mount(container);
    }
    function unMount() {
      container.destroy();
    }
    onMounted(() => {
      mount();
      useEffectUpdate(attrs, container);
      expose(container);
    });
    onUnmounted(unMount);
    return () => h("canvas", { ref: canvas });
  }
});
export {
  LeaferApp
};
