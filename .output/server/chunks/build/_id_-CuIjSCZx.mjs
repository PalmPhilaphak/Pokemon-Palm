import { defineComponent, ref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const pokemon = ref(null);
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      if (pokemon.value) {
        _push(`<div${ssrRenderAttrs(_attrs)}><h1 class="text-center mt-5">Detail</h1><div class="card mx-auto mt-5" style="${ssrRenderStyle({ "width": "18rem" })}"><img class="img"${ssrRenderAttr("src", pokemon.value.sprites.front_default)} alt=""><div class="card-body text-center"><h3>name : ${ssrInterpolate(pokemon.value.name)}</h3><p>height : ${ssrInterpolate(pokemon.value.height)}</p><p>weight : ${ssrInterpolate(pokemon.value.weight)}</p></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-center"><h1>\u0E08\u0E30\u0E23\u0E35\u0E1A\u0E44\u0E1B\u0E44\u0E2B\u0E19...</h1></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pokemon/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CuIjSCZx.mjs.map
