declare namespace ModalHeaderCssNamespace {
  export interface IModalHeaderCss {
    header: string;
  }
}

declare const ModalHeaderCssModule: ModalHeaderCssNamespace.IModalHeaderCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModalHeaderCssNamespace.IModalHeaderCss;
};

export = ModalHeaderCssModule;
