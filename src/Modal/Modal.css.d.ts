declare namespace ModalCssNamespace {
  export interface IModalCss {
    modal: string;
    wrapper: string;
  }
}

declare const ModalCssModule: ModalCssNamespace.IModalCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModalCssNamespace.IModalCss;
};

export = ModalCssModule;
