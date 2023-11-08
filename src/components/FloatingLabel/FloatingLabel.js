import {
  jsx as _jsx,
  jsxs as _jsxs,
  Fragment as _Fragment,
} from "react/jsx-runtime";
import { forwardRef, useId } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "~/src/helpers/merge-deep";
import { useTheme } from "../..";
export const FloatingLabel = forwardRef(
  (
    {
      color,
      helperText,
      sizing = "md",
      variant,
      label,
      disabled = false,
      className,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(useTheme().theme.floatingLabel, customTheme);
    const randomId = useId();
    if (color === null || color === undefined) color = "default";
    return _jsx(_Fragment, {
      children: _jsxs("div", {
        children: [
          _jsxs("div", {
            className: twMerge("relative", variant === "standard" ? "z-0" : ""),
            children: [
              _jsx("input", {
                type: "text",
                id: props.id ? props.id : "floatingLabel" + randomId,
                "aria-describedby": "outlined_success_help",
                className: twMerge(
                  theme.input[color][variant][sizing],
                  className,
                ),
                placeholder: " ",
                "data-testid": "floating-label",
                disabled: disabled,
                ...props,
                ref: ref,
              }),
              _jsx("label", {
                htmlFor: props.id ? props.id : "floatingLabel" + randomId,
                className: twMerge(
                  theme.label?.[color]?.[variant]?.[sizing],
                  className,
                ),
                children: label,
              }),
            ],
          }),
          _jsx("p", {
            id: "outlined_helper_text" + randomId,
            className: twMerge(theme.helperText[color], className),
            children: helperText,
          }),
        ],
      }),
    });
  },
);
FloatingLabel.displayName = "FloatingLabel";