import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, defineComponent, ref, computed, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "list",
  __ssrInlineRender: true,
  setup(__props) {
    const pokemons = ref([]);
    const searchQuery = ref("");
    const filteredPokemons = computed(() => {
      return pokemons.value.filter(
        (pokemon) => pokemon.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (pokemons.value.length) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-0e3f2af1><h1 class="d-flex justify-content-center m-5" data-v-0e3f2af1>\u0E42\u0E1B\u0E40\u0E01\u0E21\u0E2D\u0E19 \u0E1A\u0E35\u0E1A\u0E21\u0E30\u0E19\u0E32\u0E27\u0E06\u0E48\u0E32\u0E07\u0E39</h1><div class="d-flex justify-content-center" data-v-0e3f2af1> Computed ${ssrInterpolate(searchQuery.value)} <br data-v-0e3f2af1></div><div class="d-flex justify-content-center" data-v-0e3f2af1><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="computed..." class="form-control col-xl-3 mb-3" data-v-0e3f2af1></div><div class="row d-flex justify-content-center m-5" data-v-0e3f2af1><!--[-->`);
        ssrRenderList(filteredPokemons.value, (pokemon) => {
          _push(`<div class="card col-xl-2 m-3" style="${ssrRenderStyle({ "width": "18rem", "margin-bottom": "1rem" })}" data-v-0e3f2af1>`);
          if (pokemon.sprites) {
            _push(`<img${ssrRenderAttr("src", pokemon.sprites.front_default)} class="card-img-top" data-v-0e3f2af1>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="card-body" data-v-0e3f2af1><h2 class="card-title text-center" data-v-0e3f2af1>${ssrInterpolate(pokemon.name)}</h2>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            href: "/pokemon/" + pokemon.id,
            class: "btn btn-primary col-xl-12 mt-3"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14`);
              } else {
                return [
                  createTextVNode("\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-0e3f2af1><div class="text-center" data-v-0e3f2af1><h1 data-v-0e3f2af1>\u0E08\u0E30\u0E23\u0E35\u0E1A\u0E44\u0E1B\u0E44\u0E2B\u0E19...</h1></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pokemon/list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const list = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0e3f2af1"]]);

export { list as default };
//# sourceMappingURL=list-BZ2IrNAe.mjs.map
