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
      fontFamily: `"FabricMDL2Icons-7"`,
      src: `url('${baseUrl}fabric-icons-7-0cef213c.woff') format('woff')`
    },
    icons: {
      'ReplyAllMirrored': '\uEE36',
      'Medal': '\uEE38',
      'AddGroup': '\uEE3D',
      'QuestionnaireMirrored': '\uEE4B',
      'CloudImportExport': '\uEE55',
      'TemporaryUser': '\uEE58',
      'CaretSolid16': '\uEE62',
      'GroupedDescending': '\uEE66',
      'GroupedAscending': '\uEE67',
      'AwayStatus': '\uEE6A',
      'MyMoviesTV': '\uEE6C',
      'GenericScan': '\uEE6F',
      'AustralianRules': '\uEE70',
      'WifiEthernet': '\uEE77',
      'TrackersMirrored': '\uEE92',
      'DateTimeMirrored': '\uEE93',
      'StopSolid': '\uEE95',
      'DoubleChevronUp12': '\uEE96',
      'DoubleChevronDown12': '\uEE97',
      'DoubleChevronLeft12': '\uEE98',
      'DoubleChevronRight12': '\uEE99',
      'CalendarAgenda': '\uEE9A',
      'ConnectVirtualMachine': '\uEE9D',
      'AddEvent': '\uEEB5',
      'AssetLibrary': '\uEEB6',
      'DataConnectionLibrary': '\uEEB7',
      'DocLibrary': '\uEEB8',
      'FormLibrary': '\uEEB9',
      'FormLibraryMirrored': '\uEEBA',
      'ReportLibrary': '\uEEBB',
      'ReportLibraryMirrored': '\uEEBC',
      'ContactCard': '\uEEBD',
      'CustomList': '\uEEBE',
      'CustomListMirrored': '\uEEBF',
      'IssueTracking': '\uEEC0',
      'IssueTrackingMirrored': '\uEEC1',
      'PictureLibrary': '\uEEC2',
      'OfficeAddinsLogo': '\uEEC7',
      'OfflineOneDriveParachute': '\uEEC8',
      'OfflineOneDriveParachuteDisabled': '\uEEC9',
      'TriangleSolidUp12': '\uEECC',
      'TriangleSolidDown12': '\uEECD',
      'TriangleSolidLeft12': '\uEECE',
      'TriangleSolidRight12': '\uEECF',
      'TriangleUp12': '\uEED0',
      'TriangleDown12': '\uEED1',
      'TriangleLeft12': '\uEED2',
      'TriangleRight12': '\uEED3',
      'ArrowUpRight8': '\uEED4',
      'ArrowDownRight8': '\uEED5',
      'DocumentSet': '\uEED6',
      'GoToDashboard': '\uEEED',
      'DelveAnalytics': '\uEEEE',
      'ArrowUpRightMirrored8': '\uEEEF',
      'ArrowDownRightMirrored8': '\uEEF0',
      'CompanyDirectory': '\uEF0D',
      'OpenEnrollment': '\uEF1C',
      'CompanyDirectoryMirrored': '\uEF2B',
      'OneDriveAdd': '\uEF32',
      'ProfileSearch': '\uEF35',
      'Header2': '\uEF36',
      'Header3': '\uEF37',
      'Header4': '\uEF38',
      'RingerSolid': '\uEF3A',
      'Eyedropper': '\uEF3C',
      'MarketDown': '\uEF42',
      'CalendarWorkWeek': '\uEF51',
      'SidePanel': '\uEF52',
      'GlobeFavorite': '\uEF53',
      'CaretTopLeftSolid8': '\uEF54',
      'CaretTopRightSolid8': '\uEF55',
      'ViewAll2': '\uEF56',
      'DocumentReply': '\uEF57',
      'PlayerSettings': '\uEF58',
      'ReceiptForward': '\uEF59',
      'ReceiptReply': '\uEF5A',
      'ReceiptCheck': '\uEF5B',
      'Fax': '\uEF5C',
      'RecurringEvent': '\uEF5D',
      'ReplyAlt': '\uEF5E',
      'ReplyAllAlt': '\uEF5F',
      'EditStyle': '\uEF60',
      'EditMail': '\uEF61',
      'Lifesaver': '\uEF62',
      'LifesaverLock': '\uEF63',
      'InboxCheck': '\uEF64',
      'FolderSearch': '\uEF65',
      'CollapseMenu': '\uEF66',
      'ExpandMenu': '\uEF67',
      'Boards': '\uEF68',
      'SunAdd': '\uEF69',
      'SunQuestionMark': '\uEF6A',
      'LandscapeOrientation': '\uEF6B',
      'DocumentSearch': '\uEF6C',
      'PublicCalendar': '\uEF6D',
      'PublicContactCard': '\uEF6E',
      'PublicEmail': '\uEF6F',
      'PublicFolder': '\uEF70',
      'WordDocument': '\uEF71',
      'PowerPointDocument': '\uEF72'
    }
  };

  registerIcons(subset, options);
}
