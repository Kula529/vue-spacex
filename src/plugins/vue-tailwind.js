const VueTailwindSettings = {
  TInput: {
    fixedClasses: 'text-gray-700 w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-gray-700 bg-white border-gray-300 focus:ring-blue-500 focus:ring-1 focus:outline-none focus:ring-opacity-50 focus:border-blue-500',
    variants: {
      danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
      success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
      custom: 'text-sm',
    },
  },
  TSelect: {
    fixedClasses: 'block w-full py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-gray-700 placeholder-gray-400 bg-white border-gray-300 focus:border-blue-500 ',
    variants: {
      danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
      success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900',
    },
  },
  TCheckbox: {
    fixedClasses: 'transition duration-100 ease-in-out rounded shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-blue-500 border-gray-300 ',
    variants: {
      error: 'text-red-500 border-red-300',
      success: 'text-green-500 border-green-300',
    },
  },
  TButton: {
    fixedClasses: 'p-2 px-5 transition duration-100 ease-in-out focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
    classes: 'text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600 bg-primary',
    variants: {
      fullwidth: 'w-full',
      secondary: 'text-gray-800 bg-white border border-gray-300 shadow-sm hover:text-gray-600',
      error: 'text-white bg-red-400 border border-transparent rounded shadow-sm hover:bg-red-500',
      success: 'text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600',
      link: 'text-blue-500 underline hover:text-blue-600',
      violet: 'relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500',
    },
  },
  TInputGroup: {
    fixedClasses: {
      wrapper: '',
      label: 'block',
      body: '',
      feedback: 'mt-1 text-sm text-sm',
      description: 'text-gray-700 text-sm',
    },
    classes: {
      wrapper: '',
      label: 'mb-1',
      body: '',
      feedback: 'text-secondary',
      description: 'text-gray-700',
    },
    variants: {
      danger: {
        label: 'text-red-500',
        feedback: 'text-red-500',
      },
      success: {
        label: 'text-green-500',
        feedback: 'text-green-500',
      },
    },
  },
  TTag: {
    fixedClasses: '',
    classes: '',
    variants: {
      title: 'text-2xl leading-8 font-extrabold text-gray-900 tracking-tight',
      subtitle: 'text-lg leading-6 font-medium text-gray-900',
      error: 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-pink-100 text-pink-800',
      badge: 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800',
      warning: 'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800',
      avatar: 'inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500 overflow-hidden leading-none text-center',
    },
  },
  TToggle: {
    fixedClasses: {
      wrapper: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200',
      wrapperChecked: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200  border-2 border-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed',
      wrapperCheckedDisabled: 'relative inline-flex flex-shrink-0 cursor-pointer transition-colors ease-in-out duration-200 opacity-50 cursor-not-allowed border-2 border-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      button: 'inline-block absolute transform translate-x-0 transition ease-in-out duration-200',
      buttonChecked: 'inline-block absolute transform translate-x-full transition ease-in-out duration-200',
      checkedPlaceholder: 'inline-block',
      uncheckedPlaceholder: 'inline-block',
    },
    classes: {
      wrapper: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperChecked: 'bg-blue-500 rounded-full',
      wrapperDisabled: 'bg-gray-100 rounded-full border-2 border-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      wrapperCheckedDisabled: 'bg-blue-500',
      button: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-gray-400 text-xs',
      buttonChecked: 'h-5 w-5 rounded-full bg-white shadow flex items-center justify-center text-blue-500 text-xs',
      checkedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
      uncheckedPlaceholder: 'rounded-full w-5 h-5 flex items-center justify-center text-gray-400 text-xs',
    },
    variants: {
      danger: {
        wrapperChecked: 'bg-red-500 rounded-full',
        wrapperCheckedDisabled: 'bg-red-500 rounded-full',
      },
      success: {
        wrapperChecked: 'bg-green-500 rounded-full',
        wrapperCheckedDisabled: 'bg-green-500 rounded-full',
      },
      box: {
        wrapper: 'bg-gray-100 rounded-sm border-2 border-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        wrapperChecked: 'bg-blue-500 rounded-sm',
        wrapperCheckedDisabled: 'bg-blue-500 rounded-sm',
        button: 'h-6 w-6 rounded-sm bg-white shadow flex items-center justify-center text-gray-400 text-xs',
        buttonChecked: 'h-6 w-6 rounded-sm  bg-white shadow flex items-center justify-center text-blue-500 text-xs',
        checkedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs',
        uncheckedPlaceholder: 'rounded-sm w-6 h-6 flex items-center justify-center text-gray-400 text-xs',
      },
    },
  },
  TAlert: {
    fixedClasses: {
      wrapper: 'relative flex items-center p-4 border rounded shadow-sm',
      body: 'flex-grow text-sm',
      close: 'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      closeIcon: 'fill-current h-4 w-4',
    },
    classes: {
      wrapper: 'bg-blue-50 border-blue-500',
      body: 'text-blue-700',
      close: 'text-blue-500 hover:bg-blue-200',
    },
    variants: {
      danger: {
        wrapper: 'bg-red-50 border-red-500',
        body: 'text-red-700',
        close: 'text-red-500 hover:bg-red-200',
      },
      success: {
        wrapper: 'bg-green-50 border-green-500',
        body: 'text-green-700',
        close: 'text-green-500 hover:bg-green-200',
      },
    },
  },
  TCard: {
    fixedClasses: {
      wrapper: 'border rounded shadow-sm ',
      body: 'p-3',
      header: 'border-b p-3 rounded-t',
      footer: 'border-t p-3 rounded-b',
    },
    classes: {
      wrapper: 'bg-white border-gray-100',
      body: '',
      header: 'border-gray-100',
      footer: 'border-gray-100',
    },
    variants: {
      danger: {
        wrapper: 'bg-red-50 text-red-700 border-red-200',
        header: 'border-red-200 text-red-700',
        footer: 'border-red-200 text-red-700',
      },
    },
  },
  TModal: {
    fixedClasses: {
      overlay: 'z-40 overflow-auto scrolling-touch left-0 top-0 bottom-0 right-0 w-full h-full fixed bg-opacity-50',
      wrapper: 'relative mx-auto z-50 px-3 py-12 min-h-screen',
      modal: 'overflow-visible relative rounded',
      body: 'p-3',
      header: 'border-b p-3 rounded-t',
      footer: ' p-3 rounded-b',
      close: 'flex items-center justify-center rounded-full absolute right-0 top-0 -m-3 h-8 w-8 transition duration-100 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
    },
    classes: {
      overlay: 'bg-black',
      wrapper: 'max-w-lg',
      modal: 'bg-white shadow',
      body: 'p-3',
      header: 'border-gray-100',
      footer: 'bg-gray-100',
      close: 'bg-gray-100 text-gray-600 hover:bg-gray-200',
      closeIcon: 'fill-current h-4 w-4',
      overlayEnterClass: '',
      overlayEnterActiveClass: 'opacity-0 transition ease-out duration-100',
      overlayEnterToClass: 'opacity-100',
      overlayLeaveClass: 'transition ease-in opacity-100',
      overlayLeaveActiveClass: '',
      overlayLeaveToClass: 'opacity-0 duration-75',
      enterClass: '',
      enterActiveClass: '',
      enterToClass: '',
      leaveClass: '',
      leaveActiveClass: '',
      leaveToClass: '',
    },
    variants: {
      danger: {
        overlay: 'bg-red-100',
        header: 'border-red-50 text-red-700',
        close: 'bg-red-50 text-red-700 hover:bg-red-200 border-red-100 border',
        modal: 'bg-white border border-red-100 shadow-lg',
        footer: 'bg-red-50',
      },
      custom: {
        wrapper: 'relative mx-auto z-50 px-3 w-3/4 py-12 min-h-screen',
      },
    },
  },
  TTable: {
    classes: {
      table: 'min-w-full divide-y divide-gray-200',
      thead: 'bg-light',
      theadTr: '',
      theadTh: 'px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider',
      tbody: 'bg-white divide-y divide-gray-200',
      tr: '',
      td: 'px-6 py-4 whitespace-nowrap',
      tfoot: '',
      tfootTr: '',
      tfootTd: '',
    },
    variants: {
      thin: {
        td: 'p-1 whitespace-no-wrap text-sm',
        theadTh: 'p-1 font-semibold text-left bg-gray-100 border-b text-sm',
      },
    },
  },
  TPagination: {
    classes: {
      wrapper: 'table border-collapse text-center bg-white mx-auto shadow-sm',
      element: 'w-8 h-8 border border-gray-200 table-cell hover:border-blue-100',
      activeElement: 'w-8 h-8 border border-gray-200 border-blue-500 table-cell hover:border-blue-600',
      disabledElement: 'w-8 h-8 border border-gray-200 table-cell',
      ellipsisElement: 'w-8 h-8 border border-gray-200 hidden md:table-cell',
      activeButton: 'bg-blue-600 w-full h-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      disabledButton: 'opacity-25 w-full h-full cursor-not-allowed transition duration-100 ease-in-out',
      button: 'hover:bg-blue-100 w-full h-full transition duration-100 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
      ellipsis: '',
    },
    variants: {
      rounded: {
        wrapper: 'bg-white mx-auto text-center flex space-x-2',
        element: 'w-8 h-8 rounded-full',
        activeElement: 'w-8 h-8 rounded-full',
        disabledElement: 'w-8 h-8 rounded-full',
        ellipsisElement: 'w-8 h-8 rounded-full hidden md:inline',
        activeButton: 'border border-blue-500 bg-blue-500 w-full h-full rounded-full text-white hover:bg-blue-600 transition duration-100 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        disabledButton: 'border border-gray-200  opacity-25 w-full h-full rounded-full cursor-not-allowed transition duration-100 ease-in-out',
        button: 'border border-gray-200 hover:bg-blue-100 hover:border-blue-100 rounded-full w-full h-full transition duration-100 ease-in-out focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
        ellipsis: '',
      },
    },
  },
  TDropdown: {
    fixedClasses: {
      button: 'flex items-center text-white block px-4 py-2 transition duration-100 ease-in-out border border-transparent rounded shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      wrapper: 'inline-flex flex-col',
      dropdownWrapper: 'relative z-10',
      dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow mt-1',
      enterClass: '',
      enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
      enterToClass: 'transform opacity-100 scale-100',
      leaveClass: 'transition ease-in transform opacity-100 scale-100',
      leaveActiveClass: '',
      leaveToClass: 'transform opacity-0 scale-95 duration-75',
    },
    classes: {
      button: 'bg-blue-500 hover:bg-blue-600',
      dropdown: 'bg-white',
    },
    variants: {
      danger: {
        button: 'bg-red-500 hover:bg-red-600',
        dropdown: 'bg-red-50',
      },
    },
  },
};

export default VueTailwindSettings;
