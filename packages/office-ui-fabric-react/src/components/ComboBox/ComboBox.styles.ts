import { IComboBoxStyles } from './ComboBox.Props';
import {
  ITheme,
  IStyle,
  mergeStyleSets,
  FontSizes,
  FontWeights,
  getFocusStyle
} from '../../Styling';
import { memoizeFunction } from '../../Utilities';

const MS_HIGHCONTRAST_ACTIVE = '@media screen and (-ms-high-contrast: active)';
const MS_HIGHCONTRAST_BLACK_ON_WHITE = '@media screen and (-ms-high-contrast: black-on-white)';

const ComboBoxHeight = '32px';
const ComboBoxLineHeight = '30px';
const ComboxBoxCaretDownWidth = '32px';
const ComboBoxItemHeight = '36px';

const getDisabledStyles = (theme: ITheme): IStyle => {
  const { semanticColors, palette } = theme;
  return {
    backgroundColor: semanticColors.disabledBackground,
    borderColor: semanticColors.disabledBackground,
    color: semanticColors.disabledText,
    cursor: 'default',
    [MS_HIGHCONTRAST_ACTIVE]: {
      borderColor: palette.contrastBlackDisabled,
      color: palette.contrastBlackDisabled
    },

    [MS_HIGHCONTRAST_BLACK_ON_WHITE]: {
      borderColor: palette.contrastWhiteDisabled,
      color: palette.contrastWhiteDisabled
    },
  };
};

const getListItemHighContrastStyles = (theme: ITheme): IStyle => {
  const { semanticColors, palette } = theme;
  return {
    [MS_HIGHCONTRAST_ACTIVE]: {
      backgroundColor: palette.contrastBlackSelected,
      borderColor: palette.contrastBlackSelected,
      color: palette.black,
      ':focus': {
        borderColor: palette.black,
      }
    },

    [MS_HIGHCONTRAST_BLACK_ON_WHITE]: {
      backgroundColor: palette.contrastBlackSelected,
      borderColor: palette.contrastBlackSelected,
      color: palette.white
    },
  };
};

export const getStyles = memoizeFunction((
  theme: ITheme,
  customStyles?: IComboBoxStyles,
): IComboBoxStyles => {

  const { semanticColors, fonts, palette } = theme;

  const ComboBoxItemBackgroundSelected = semanticColors.menuItemBackgroundChecked;
  const ComboBoxItemBackgroundHovered = semanticColors.menuItemBackgroundHovered;

  const styles: IComboBoxStyles = {
    container: {

    },
    root: {
      boxShadow: 'none',
      margin: '0',
      padding: '0',
      font: fonts.medium,
      color: semanticColors.bodyText,
      marginBottom: '10px',
      position: 'relative',
      outline: '0',
      userSelect: 'none',
      background: semanticColors.bodyBackground,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: semanticColors.inputBorder,
      paddingRight: ComboxBoxCaretDownWidth,
      cursor: 'text ',
      display: 'block',
      height: ComboBoxHeight,
      lineHeight: ComboBoxLineHeight,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      boxSizing: 'content-box',
      ' .ms-Label': {
        display: 'inline-block',
        marginBottom: '8px',
      }
    },
    rootHoveredOrFocused: {
      borderColor: semanticColors.inputFocusBorderAlt,
      [MS_HIGHCONTRAST_ACTIVE]: {
        color: palette.contrastBlackSelected
      },

      [MS_HIGHCONTRAST_BLACK_ON_WHITE]: {
        color: palette.contrastWhiteSelected
      },
    },
    rootDisabled: getDisabledStyles(theme),
    rootError: {
      borderColor: semanticColors.errorText
    },
    input: {
      boxSizing: 'border-box',
      width: '100%',
      height: '100%',
      border: 'none',
      outline: 'none',
      font: 'inherit',
      textOverflow: 'ellipsis',
      paddingLeft: '12px'
    },
    inputDisabled: getDisabledStyles(theme),
    caretDown: {
      color: palette.neutralDark,
      fontSize: FontSizes.small,
      position: 'absolute',
      height: ComboBoxHeight,
      lineHeight: ComboBoxHeight,
      width: ComboxBoxCaretDownWidth,
      textAlign: 'center',
      cursor: 'default',
    },
    caretDownHovered: {
      backgroundColor: palette.neutralQuaternaryAlt,
    },
    caretDownActive: {
      backgroundColor: palette.neutralTertiaryAlt,
    },
    caretDownReadOnly: {
      backgroundColor: 'inherit',
    },
    caretDownDisabled: getDisabledStyles(theme),
    callout: {
      boxShadow: '0 0px 5px 0px rgba(0, 0, 0, 0.4)',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: palette.neutralLight,
    },
    errorMessage: {
      color: semanticColors.errorText,
      ':before': {
        content: '* ',
      }
    },
    items: {
      display: 'block'
    },
    item: [
      {
        background: 'transparent',
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'block',
        width: '100%',
        height: 'auto',
        minHeight: ComboBoxItemHeight,
        lineHeight: '20px',
        padding: '5px 16px',
        position: 'relative',
        border: '1px solid transparent',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        textAlign: 'left',

        [MS_HIGHCONTRAST_ACTIVE]: {
          borderColor: palette.black
        },

        [MS_HIGHCONTRAST_BLACK_ON_WHITE]: {
          borderColor: palette.white
        },
        ':hover': {
          backgroundColor: ComboBoxItemBackgroundHovered,
          color: palette.black,
          ...getListItemHighContrastStyles(theme)
        },
        ':focus': {
          backgroundColor: ComboBoxItemBackgroundHovered
        },
        ':active': {
          backgroundColor: ComboBoxItemBackgroundHovered,
          color: palette.black
        },
      },
      getFocusStyle(theme),
    ],
    itemDisabled: {
      backgroundColor: palette.white,
      color: palette.neutralTertiary,
      cursor: 'default',
      ' .ms-Button-flexContainer': {
        justifyContent: 'flex-start'
      }
    },
    itemSelected: [
      {
        backgroundColor: ComboBoxItemBackgroundSelected,
        color: palette.black,
        ':hover': {
          backgroundColor: ComboBoxItemBackgroundSelected
        },
        ...getListItemHighContrastStyles(theme)
      },
      getFocusStyle(theme)
    ],
    header: {
      fontSize: fonts.medium,
      fontWeight: FontWeights.semibold,
      color: semanticColors.menuHeader,
      background: 'none',
      border: 'none',
      height: ComboBoxItemHeight,
      lineHeight: ComboBoxItemHeight,
      cursor: 'default',
      padding: '0px 16px',
      userSelect: 'none',
      textAlign: 'left' // TODO
    },
    divider: {
      height: '1px',
      backgroundColor: semanticColors.bodyDivider
    },
    optionText: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      minWidth: '0px',
      maxWidth: '100%',
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      margin: '1px'
    }
  };

  return mergeStyleSets(styles, customStyles);
});