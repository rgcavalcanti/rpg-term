import { css, keyframes, Theme } from "@emotion/react";

type EventLineType = React.FC<{ actionText: string; showCarrot?: boolean }>;

export const TYPE_TIME_IN_MS = 800;

export const EventLine: EventLineType = ({
  actionText,
  showCarrot = false,
}) => {
  return (
    <div css={actionContainer}>
      <p css={entry}>$</p>
      <p css={eventLine(showCarrot)}> {actionText}</p>
    </div>
  );
};

const actionContainer = css`
  display: inline-block;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 0.5rem;
`;

const eventLine = (showCarrot: boolean) => (theme: Theme) =>
  css`
    margin: 0px;
    letter-spacing: 1px;
    overflow: hidden;
    display: inline-block;
    color: ${theme.color.primary};
    border-right: 8px solid transparent;
    white-space: nowrap;
    box-sizing: border-box;
    animation: ${typing(theme)} ${TYPE_TIME_IN_MS}ms steps(30, end) forwards
      ${showCarrot && css`, ${blinkCaret(theme)} ${TYPE_TIME_IN_MS}ms infinite`};
    padding-right: 2px;
  `;

const typing = (theme: Theme) => keyframes`
from { width: 0 }
to { width: 100% }
`;

const blinkCaret = (theme: Theme) => keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${theme.color.primary}; }
`;

const entry = (theme: Theme) => css`
  margin: 0px;
  display: inline-block;
  color: ${theme.color.primary};
`;
