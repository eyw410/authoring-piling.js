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
};
