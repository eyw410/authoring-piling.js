const {
  createLibrary,
  createLibraryFromState,
  createMatrixPreviewAggregator,
  createMatrixCoverAggregator,
  createRepresentativeAggregator,
  createDbscan,
  createKmeans,
  createImageRenderer,
  createMatrixRenderer,
  createRepresentativeRenderer,
  createSvgRenderer,
  createUmap,
} = window.pilingJs || {};

const createPilingJs = createLibrary;

export default createPilingJs;

export {
  createLibrary,
  createLibraryFromState,
  createMatrixPreviewAggregator,
  createMatrixCoverAggregator,
  createRepresentativeAggregator,
  createDbscan,
  createKmeans,
  createImageRenderer,
  createMatrixRenderer,
  createRepresentativeRenderer,
  createSvgRenderer,
  createUmap,
};
