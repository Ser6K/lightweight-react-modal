declare namespace OverlayCssNamespace {
  export interface IOverlayCss {
    overlay: string;
  }
}

declare const OverlayCssModule: OverlayCssNamespace.IOverlayCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: OverlayCssNamespace.IOverlayCss;
};

export = OverlayCssModule;
