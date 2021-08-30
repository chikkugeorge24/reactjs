import React from "react";
import {
  ClimbingBoxLoader,
  BeatLoader,
  BounceLoader,
  CircleLoader,
  ClipLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  GridLoader,
  HashLoader,
  MoonLoader,
  PacmanLoader,
  PropagateLoader,
  PuffLoader,
  PulseLoader,
  RingLoader,
  RiseLoader,
  RotateLoader,
  ScaleLoader,
  SkewLoader,
  SquareLoader,
  SyncLoader,
} from "react-spinners";
import { css } from "@emotion/core";

const loaderCss = css`
  margin-bottom: 20px;
  margin-top: 20px;
`;
const ReactSpinnerDemo = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CircleLoader loading css={loaderCss} color="red" />
      <BeatLoader loading css={loaderCss} size={48} color="red" />
      <BounceLoader loading css={loaderCss} size={48} color="red" />
      <SyncLoader loading css={loaderCss} color="red" />
      <PacmanLoader loading css={loaderCss} color="red" />
      <PropagateLoader loading css={loaderCss} color="red" />
      <PulseLoader loading css={loaderCss} color="red" />
      <PuffLoader loading css={loaderCss} color="red" />
      <RingLoader loading css={loaderCss} color="red" />
      <RiseLoader loading css={loaderCss} color="red" />
      <RotateLoader loading css={loaderCss} color="red" />
      <ScaleLoader loading css={loaderCss} color="red" />
      <SkewLoader loading css={loaderCss} color="red" />
      <SquareLoader loading css={loaderCss} color="red" />
      <ClipLoader loading css={loaderCss} color="red" />
      <ClockLoader loading css={loaderCss} color="red" />
      <DotLoader loading css={loaderCss} color="red" />
      <FadeLoader loading css={loaderCss} color="red" />
      <ClimbingBoxLoader loading css={loaderCss} color="red" />
      <GridLoader loading css={loaderCss} color="red" />
      <HashLoader loading css={loaderCss} color="red" />
      <MoonLoader loading css={loaderCss} color="red" />
    </div>
  );
};

export default ReactSpinnerDemo;
