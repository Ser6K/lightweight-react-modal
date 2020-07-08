declare namespace CloseButtonCssNamespace {
  export interface ICloseButtonCss {
    closeButton: string;
  }
}

declare const CloseButtonCssModule: CloseButtonCssNamespace.ICloseButtonCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: CloseButtonCssNamespace.ICloseButtonCss;
};

export = CloseButtonCssModule;
