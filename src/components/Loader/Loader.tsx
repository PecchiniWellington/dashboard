import { CSSProperties } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { ConstantsFE } from "../../utils/constants";

interface ILoader {
  color?: string;
  loading: boolean;
  override: CSSProperties;
}

function Loader({ color, loading, override }: ILoader) {
  const base = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    color: "blue",
  };
  return (
    <ClipLoader
      color={color || ConstantsFE.COLOR_PRIMARY}
      loading={loading}
      cssOverride={{ ...base }}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
