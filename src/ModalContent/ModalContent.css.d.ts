declare namespace ModalContentCssNamespace {
  export interface IModalContentCss {
    content: string;
  }
}

declare const ModalContentCssModule: ModalContentCssNamespace.IModalContentCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: ModalContentCssNamespace.IModalContentCss;
};

export = ModalContentCssModule;
