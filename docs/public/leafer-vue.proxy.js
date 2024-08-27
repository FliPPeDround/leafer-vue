// components/application/index.ts
import { defineComponent, h, onMounted, onUnmounted, ref, renderSlot } from "vue";
import { App } from "leafer-ui";

// renderer/renderer.ts
import { UI as UI2 } from "leafer-ui";
import { camelize, createRenderer } from "vue";

// renderer/commentTag.ts
import { UI } from "leafer-ui";
var Comment = class extends UI {
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
      logData.content += `%c${(item == null ? void 0 : item.content) ?? " "}`;
      logData.css.push(
        `${(item == null ? void 0 : item.color) ? `color:${item.color}` : ""}${(item == null ? void 0 : item.backgroundColor) ? `;background:${item.backgroundColor}` : ""};padding: 0px${index === 0 ? ";border-top-left-radius: 25px; border-bottom-left-radius: 8px" : ""}${index === colorInfo.length - 1 ? ";border-top-right-radius: 8px; border-bottom-right-radius: 8px" : ""}`
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

// renderer/renderer.ts
function getEventNameByAttrName(attrName) {
  return attrName.slice(attrName.startsWith("on:") ? 3 : 2).replace(/([A-Z])/g, (_, letter, index) => index === 0 ? letter.toLowerCase() : `.${letter.toLowerCase()}`);
}
var { log } = useLogger();
var renderer = createRenderer({
  createElement(type, _, _1, props) {
    return UI2.one({ tag: type, ...props });
  },
  patchProp(el, key, _prevValue, nextValue) {
    key = camelize(key);
    if (key.startsWith("on")) {
      el.on(
        getEventNameByAttrName(key),
        nextValue
      );
    }
    el[key] = nextValue === "" ? true : nextValue;
  },
  insert(el, parent) {
    if (el && parent)
      parent.add(el);
  },
  remove(el) {
    el == null ? void 0 : el.destroy();
  },
  createText(text) {
    if (text.trim()) {
      log([
        {
          content: " \u4E0D\u652F\u6301\u76F4\u63A5\u5199\u5165\u6587\u672C\uFF0C\u8BF7\u4F7F\u7528 "
        },
        {
          color: "#6eacf8",
          backgroundColor: "#222222",
          content: `<Text text="${text.trim()}" />`
        },
        {
          content: " \u4EE3\u66FF"
        }
      ]);
    }
    return null;
  },
  createComment() {
    return new Comment();
  },
  setText() {
  },
  setElementText() {
  },
  parentNode(node) {
    return node == null ? void 0 : node.parent;
  },
  nextSibling(node) {
    var _a;
    if (!node)
      return null;
    const children = ((_a = node == null ? void 0 : node.parent) == null ? void 0 : _a.children) || [node];
    if ((children == null ? void 0 : children.length) === 1)
      return null;
    const index = children.findIndex((_node) => _node.innerId === node.innerId);
    if (children.length <= index + 1)
      return null;
    return children[index + 1] ?? null;
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
        start: false,
        width: config.width || 800,
        height: config.height || 600
      });
      const app = createApp({
        render: () => renderSlot(slots, "default")
      });
      app.mount(container);
      container.start();
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
