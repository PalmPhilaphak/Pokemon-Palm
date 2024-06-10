import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { resolveComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("pikachu.wa4uzSou.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = resolveComponent("router-link");
  _push(`<!--[--><div class="row d-flex justify-content-center" data-v-ca50211d>`);
  _push(ssrRenderComponent(_component_router_link, {
    to: "/pokemon/list",
    class: "card p-5 d-flex col-xl-3 mt-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="col-xl-6" data-v-ca50211d${_scopeId}><h4 data-v-ca50211d${_scopeId}>Pokemon</h4><img class="img"${ssrRenderAttr("src", _imports_0)} alt="" data-v-ca50211d${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", { class: "col-xl-6" }, [
            createVNode("h4", null, "Pokemon"),
            createVNode("img", {
              class: "img",
              src: _imports_0,
              alt: ""
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div data-v-ca50211d>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ca50211d"]]);

export { index as default };
//# sourceMappingURL=index-BPTMOC6n.mjs.map
