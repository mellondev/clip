module.exports = {
  name: 'cxp-feature-browser',
  exposes: {
    './Module': 'apps/feature-browser/src/app/remote-entry/entry.module.ts',
    './Widget': 'apps/feature-browser/src/app/feature-metric-widget/feature-metric-widget.component.ts',
    './NewsWidget': 'apps/feature-browser/src/app/feature-news-widget/feature-news-widget.component.ts',
  },
};
