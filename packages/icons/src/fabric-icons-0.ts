  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-0"`,
      src: `url('${baseUrl}fabric-icons-0-3d691a77.woff') format('woff')`
    },
    icons: {
      'PageLink': '\uE302',
      'CommentSolid': '\uE30E',
      'ChangeEntitlements': '\uE310',
      'Installation': '\uE311',
      'WebAppBuilderModule': '\uE313',
      'WebAppBuilderFragment': '\uE314',
      'WebAppBuilderSlot': '\uE315',
      'BullseyeTargetEdit': '\uE319',
      'WebAppBuilderFragmentCreate': '\uE31B',
      'PageData': '\uE31C',
      'PageHeaderEdit': '\uE31D',
      'ProductList': '\uE31E',
      'UnpublishContent': '\uE31F',
      'DependencyAdd': '\uE344',
      'DependencyRemove': '\uE345',
      'EntitlementPolicy': '\uE346',
      'EntitlementRedemption': '\uE347',
      'InternetSharing': '\uE704',
      'Brightness': '\uE706',
      'MapPin': '\uE707',
      'Airplane': '\uE709',
      'Tablet': '\uE70A',
      'QuickNote': '\uE70B',
      'Video': '\uE714',
      'People': '\uE716',
      'Phone': '\uE717',
      'Pin': '\uE718',
      'Shop': '\uE719',
      'Stop': '\uE71A',
      'Link': '\uE71B',
      'AllApps': '\uE71D',
      'Zoom': '\uE71E',
      'ZoomOut': '\uE71F',
      'Microphone': '\uE720',
      'Camera': '\uE722',
      'Attach': '\uE723',
      'Send': '\uE724',
      'FavoriteList': '\uE728',
      'PageSolid': '\uE729',
      'Forward': '\uE72A',
      'Back': '\uE72B',
      'Refresh': '\uE72C',
      'Lock': '\uE72E',
      'ReportHacked': '\uE730',
      'EMI': '\uE731',
      'MiniLink': '\uE732',
      'Blocked': '\uE733',
      'ReadingMode': '\uE736',
      'Favicon': '\uE737',
      'Remove': '\uE738',
      'Checkbox': '\uE739',
      'CheckboxComposite': '\uE73A',
      'CheckboxFill': '\uE73B',
      'CheckboxIndeterminate': '\uE73C',
      'CheckboxCompositeReversed': '\uE73D',
      'BackToWindow': '\uE73F',
      'FullScreen': '\uE740',
      'Print': '\uE749',
      'Up': '\uE74A',
      'Down': '\uE74B',
      'OEM': '\uE74C',
      'Save': '\uE74E',
      'ReturnKey': '\uE751',
      'Cloud': '\uE753',
      'Flashlight': '\uE754',
      'CommandPrompt': '\uE756',
      'Sad': '\uE757',
      'RealEstate': '\uE758',
      'SIPMove': '\uE759',
      'EraseTool': '\uE75C',
      'GripperTool': '\uE75E',
      'Dialpad': '\uE75F',
      'PageLeft': '\uE760',
      'PageRight': '\uE761',
      'MultiSelect': '\uE762',
      'KeyboardClassic': '\uE765',
      'Play': '\uE768',
      'Pause': '\uE769',
      'InkingTool': '\uE76D',
      'Emoji2': '\uE76E',
      'GripperBarHorizontal': '\uE76F',
      'System': '\uE770',
      'Personalize': '\uE771',
      'SearchAndApps': '\uE773',
      'Globe': '\uE774',
      'EaseOfAccess': '\uE776',
      'ContactInfo': '\uE779',
      'Unpin': '\uE77A',
      'Contact': '\uE77B',
      'Memo': '\uE77C',
      'IncomingCall': '\uE77E',
      'Paste': '\uE77F',
      'WindowsLogo': '\uE782',
      'Error': '\uE783',
      'GripperBarVertical': '\uE784',
      'Unlock': '\uE785',
      'Slideshow': '\uE786',
      'AutoEnhanceOn': '\uE78D',
      'AutoEnhanceOff': '\uE78E',
      'Color': '\uE790'
    }
  };

  registerIcons(subset, options);
}
