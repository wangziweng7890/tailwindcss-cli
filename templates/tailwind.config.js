module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true
  },
  purge: {
    layers: [],
    content: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue'],
    options: {
      safelist: [] // 安全区，purgeCss 是全局匹配，如果是用拼接类名的方法可能生产环境不会被打包进去。
    }
  },
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  presets: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      bigtitle: '#141414', // 标题类，及其醒目
      smalltitle: '#333333', // 标题类，较为醒目
      regular: '#666666', // 普通文字，段落，正文
      secondary: '#999999', // 说明类文字，不醒目，提示文字
      disabled: '#cccccc', // 禁用类文字
      warning: '#e6a23c', // 告警色
      danger: '#FF5D5D', // 危险色
      banner: '#F5F7FA',
      btn: '#1F93FF',
      light: {
        // 分割线
        1: '#F0F0F0',
        2: '#D9D9D9'
      },
      // 渐变色一般都是5-6;
      primary: {
        // 主题色10梯度, 主题色需要自己配置在您css或者scss文件
        default: 'var(--color-primary-6)',
        1: 'var(--color-primary-1)',
        2: 'var(--color-primary-2)',
        3: 'var(--color-primary-3)',
        4: 'var(--color-primary-4)',
        5: 'var(--color-primary-5)',
        6: 'var(--color-primary-6)',
        7: 'var(--color-primary-7)',
        8: 'var(--color-primary-8)',
        9: 'var(--color-primary-9)',
        10: 'var(--color-primary-10)'
      },
      gray: {
        // 中性色10梯度
        default: '#FAFAFA',
        1: '#FAFAFA',
        2: '#F5F5F5',
        3: '#F0F0F0',
        4: '#E6E6E6',
        5: '#D9D9D9',
        6: '#cccccc',
        7: '#999999',
        8: '#666666',
        9: '#333333',
        10: '#141414'
      },
      red: {
        default: '#ff4040',
        1: '#fff2f0',
        2: '#ffe7e3',
        3: '#ffc1ba',
        4: '#ff9991',
        5: '#ff6e69',
        6: '#ff4040',
        7: '#d92b31'
      },
      orange: {
        default: '#ff7733',
        1: '#fff7f0',
        2: '#ffe9d6',
        3: '#ffd1ad',
        4: '#ffb685',
        5: '#ff985c',
        6: '#ff7733',
        7: '#d95821'
      },
      yellow: {
        default: '#ffb31a',
        1: '#fffbe6',
        2: '#fff2bd',
        3: '#ffe694',
        4: '#ffd86b',
        5: '#ffc642',
        6: '#ffb31a',
        7: '#d98d0b'
      },
      green: {
        default: '#53BF1D',
        1: '#f7fff0',
        2: '#d7f2bf',
        3: '#b5e691',
        4: '#94d966',
        5: '#73cc3f',
        6: '#53BF1D',
        7: '#39990f'
      },
      blue: {
        default: '#2c5cf7',
        1: '#f0f6ff',
        2: '#d1e2ff',
        3: '#a8c5ff',
        4: '#80a6ff',
        5: '#5784ff',
        6: '#2c5cf7',
        7: '#1b40d1'
      },
      purple: {
        default: '#6736d9',
        1: '#f7f0ff',
        2: '#dfc7ff',
        3: '#c59eff',
        4: '#a875ff',
        5: '#874dff',
        6: '#6736d9',
        7: '#4a24b3'
      },
      coldgray: {
        // 冷灰
        default: '#8a8f99',
        1: '#f0f3fa',
        2: '#e1e6f0',
        3: '#ced4e1',
        4: '#b8becc',
        5: '#a1a7b3',
        6: '#8a8f99',
        7: '#737780'
      },
      magenta: {
        // 玫红
        default: '#F230a2',
        1: '#fff0f6',
        2: '#ffd6e9',
        3: '#ffadd5',
        4: '#ff85c4',
        5: '#ff5cb6',
        6: '#F230a2',
        7: '#cc1f8a'
      },
      cyan: {
        // 明青
        default: '#13BFBF',
        1: '#e6fffb',
        2: '#b3f2ea',
        3: '#85e6dc',
        4: '#5bd9d0',
        5: '#35ccc7',
        6: '#13BFBF',
        7: '#089499'
      }
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8x',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '20': '20px',
      '24': '24px',
      '32': '32px',
      '40': '40px',
      '48': '48px',
      '56': '56px',
      '64': '64px',
      '156': '156px'
    },
    inset: theme => ({
      0: '0px',
      ...theme('spacing')
    }),
    backgroundColor: theme => theme('colors'),
    backgroundImage: {
      none: 'none',
      'gradient-to-t': 'linear-gradient(to top, var(--gradient-color-stops))',
      'gradient-to-tr': 'linear-gradient(to top right, var(--gradient-color-stops))',
      'gradient-to-r': 'linear-gradient(to right, var(--gradient-color-stops))',
      'gradient-to-br': 'linear-gradient(to bottom right, var(--gradient-color-stops))',
      'gradient-to-b': 'linear-gradient(to bottom, var(--gradient-color-stops))',
      'gradient-to-bl': 'linear-gradient(to bottom left, var(--gradient-color-stops))',
      'gradient-to-l': 'linear-gradient(to left, var(--gradient-color-stops))',
      'gradient-to-tl': 'linear-gradient(to top left, var(--gradient-color-stops))'
    },
    gradientColorStops: theme => theme('colors'),
    backgroundOpacity: theme => theme('opacity'),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },
    borderColor: theme => ({
      ...theme('colors'),
      default: theme('colors.gray.300', 'currentColor')
    }),
    borderOpacity: theme => theme('opacity'),
    borderRadius: {
      none: '0',
      sm: '2px',
      default: '2px',
      md: '4px',
      lg: '6px',
      xl: '8px',
      '2xl': '16px',
      '3xl': '24px',
      full: '9999px'
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none'
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },
    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '20': '20px',
      '24': '24px',
      '36': '36px'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    lineHeight: {
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      30: '30px',
      36: '36px'
    },
    maxHeight: {
      full: '100%',
      screen: '100vh'
    },
    minWidth: (theme, { breakpoints }) => ({
      '970': '970px'
    }),
    maxWidth: (theme, { breakpoints }) => ({
      '100': '100px',
      '110': '110px',
      '120': '120px',
      '130': '130px',
      '140': '140px',
      '150': '150px',
      '160': '160px',
      '170': '170px',
      '180': '180px',
      '190': '190px',
      '200': '200px',
      '300': '300px',
      '316': '316px',
      '382': '382px',
      '395': '395px',
      '1445': '1445px',
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens'))
    }),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12'
    },
    padding: theme => theme('spacing'),
    space: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing'))
    }),
    stroke: {
      current: 'currentColor'
    },
    strokeWidth: {
      '0': '0',
      '1': '1',
      '2': '2'
    },
    textColor: theme => theme('colors'),
    textOpacity: theme => theme('opacity'),
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '100': '100px',
      '110': '110px',
      '120': '120px',
      '130': '130px',
      '140': '140px',
      '150': '150px',
      '160': '160px',
      '170': '170px',
      '180': '180px',
      '190': '190px',
      '200': '200px',
      '240': '240px',
      '300': '300px',
      '316': '316px',
      '382': '382px',
      '395': '395px',
      '482': '482px',
      '648': '648px',
      '812': '812px',
      '18%': '18%',
      '38%': '38%',
      '58%': '58%',
      '78%': '78%',
      '100%': '100%',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.666667%',
      '2/6': '33.333333%',
      '3/6': '50%',
      '4/6': '66.666667%',
      '5/6': '83.333333%',
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
      full: '100%',
      screen: '100vw'
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50'
    },
    gap: theme => theme('spacing'),
    gridTemplateColumns: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))'
    },
    gridAutoColumns: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1'
    },
    gridColumnStart: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13'
    },
    gridColumnEnd: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13'
    },
    gridTemplateRows: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))'
    },
    gridAutoRows: {
      auto: 'auto',
      min: 'min-content',
      max: 'max-content',
      fr: 'minmax(0, 1fr)'
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-full': '1 / -1'
    },
    gridRowStart: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7'
    },
    gridRowEnd: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7'
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left'
    },
    scale: {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5'
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      '0': '0',
      '1': '1deg',
      '2': '2deg',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg'
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%'
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '-2': '-2deg',
      '-1': '-1deg',
      '0': '0',
      '1': '1deg',
      '2': '2deg',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg'
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform'
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
    },
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    },
    transitionDelay: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms'
    },
    animation: {
      none: 'none',
      spin: 'spin 1s linear infinite',
      ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
      pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      bounce: 'bounce 1s infinite'
    },
    keyframes: {
      spin: {
        to: { transform: 'rotate(360deg)' }
      },
      ping: {
        '75%, 100%': { transform: 'scale(2)', opacity: '0' }
      },
      pulse: {
        '50%': { opacity: '.5' }
      },
      bounce: {
        '0%, 100%': {
          transform: 'translateY(-25%)',
          animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
        },
        '50%': {
          transform: 'none',
          animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
        }
      }
    }
  },
  variants: {
    accessibility: ['responsive', 'focus'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundClip: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundImage: ['responsive'],
    gradientColorStops: ['responsive', 'hover', 'focus'],
    backgroundOpacity: ['responsive', 'hover', 'focus'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus'],
    borderOpacity: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus'],
    boxSizing: ['responsive'],
    cursor: ['responsive'],
    display: ['responsive'],
    divideColor: ['responsive'],
    divideOpacity: ['responsive'],
    divideStyle: ['responsive'],
    divideWidth: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: ['responsive'],
    clear: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: ['responsive'],
    fontVariantNumeric: ['responsive'],
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    justifyItems: ['responsive'],
    justifySelf: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive', 'hover', 'focus'],
    order: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    overscrollBehavior: ['responsive'],
    padding: ['responsive'],
    placeContent: ['responsive'],
    placeItems: ['responsive'],
    placeSelf: ['responsive'],
    placeholderColor: ['responsive', 'focus'],
    placeholderOpacity: ['responsive', 'focus'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    space: ['responsive'],
    stroke: ['responsive'],
    strokeWidth: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textOpacity: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: ['responsive'],
    zIndex: ['responsive'],
    gap: ['responsive'],
    gridAutoFlow: ['responsive'],
    gridTemplateColumns: ['responsive'],
    gridAutoColumns: ['responsive'],
    gridColumn: ['responsive'],
    gridColumnStart: ['responsive'],
    gridColumnEnd: ['responsive'],
    gridTemplateRows: ['responsive'],
    gridAutoRows: ['responsive'],
    gridRow: ['responsive'],
    gridRowStart: ['responsive'],
    gridRowEnd: ['responsive'],
    transform: ['responsive'],
    transformOrigin: ['responsive'],
    scale: ['responsive', 'hover', 'focus'],
    rotate: ['responsive', 'hover', 'focus'],
    translate: ['responsive', 'hover', 'focus'],
    skew: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDuration: ['responsive'],
    transitionDelay: ['responsive'],
    animation: ['responsive']
  },
  corePlugins: {
    preflight: false, // 禁用掉重置样式，不然对现有基础样式有冲突
    container: false, // 禁言该类名，否则冲 突太多
    display: false
  },
  plugins: []
};
