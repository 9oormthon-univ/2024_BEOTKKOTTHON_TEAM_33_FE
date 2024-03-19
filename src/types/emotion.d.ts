import "@emotion/react";
import theme from "themes/theme";

type ColorKeys = keyof (typeof theme)["colors"];
type TextKeys = keyof (typeof theme)["text"];
type ShadowKeys = keyof (typeof theme)["shadow"];

declare module "@emotion/react" {
  export interface Theme {
    colors: { [K in ColorKeys]: (typeof theme)["colors"][K] };
    text: { [K in TextKeys]: (typeof theme)["text"][K] };
    shadow: { [K in ShadowKeys]: (typeof theme)["shadow"][K] };
  }
}
