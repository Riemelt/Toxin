function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
  }
  
requireAll(require.context('./', true, /\.(js|scss|png|svg|jpg)$/));

