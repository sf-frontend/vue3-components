import type { App } from 'vue'
import ElAlert from '@vic/alert'
// import ElAside from '@vic/aside'
// import ElAutocomplete from '@vic/autocomplete'
// import ElAvatar from '@vic/avatar'
import ElBacktop from '@vic/backtop'
// import ElBadge from '@vic/badge'
// import ElBreadcrumb from '@vic/breadcrumb'
// import ElBreadcrumbItem from '@vic/breadcrumb-item'
// import ElButton from '@vic/button'
// import ElButtonGroup from '@vic/button-group'
// import ElCalendar from '@vic/calendar'
// import ElCard from '@vic/card'
// import ElCarousel from '@vic/carousel'
// import ElCarouselItem from '@vic/carousel-item'
// import ElCascader from '@vic/cascader'
// import ElCascaderPanel from '@vic/cascader-panel'
// import ElCheckbox from '@vic/checkbox'
// import ElCheckboxButton from '@vic/checkbox-button'
// import ElCheckboxGroup from '@vic/checkbox-group'
import ElCol from '@vic/col'
// import ElCollapse from '@vic/collapse'
// import ElCollapseItem from '@vic/collapse-item'
// import ElCollapseTransition from '@vic/collapse-transition'
// import ElColorPicker from '@vic/color-picker'
// import ElContainer from '@vic/container'
// import ElDatePicker from '@vic/date-picker'
// import ElDialog from '@vic/dialog'
// import ElDivider from '@vic/divider'
// import ElDrawer from '@vic/drawer'
// import ElDropdown from '@vic/dropdown'
// import ElDropdownItem from '@vic/dropdown-item'
// import ElDropdownMenu from '@vic/dropdown-menu'
// import ElFooter from '@vic/footer'
// import ElForm from '@vic/form'
// import ElFormItem from '@vic/form-item'
// import ElHeader from '@vic/header'
// import ElIcon from '@vic/icon'
// import ElImage from '@vic/image'
import ElInfiniteScroll from '@vic/infinite-scroll'
// import ElInput from '@vic/input'
// import ElInputNumber from '@vic/input-number'
// import ElLink from '@vic/link'
import ElLoading from '@vic/loading'
// import ElMain from '@vic/main'
// import ElMenu from '@vic/menu'
// import ElMenuItem from '@vic/menu-item'
// import ElMenuItemGroup from '@vic/menu-item-group'
// import ElMessage from '@vic/message'
// import ElMessageBox from '@vic/message-box'
// import ElNotification from '@vic/notification'
// import ElOption from '@vic/option'
// import ElOptionGroup from '@vic/option-group'
// import ElPageHeader from '@vic/page-header'
// import ElPagination from '@vic/pagination'
// import ElPopconfirm from '@vic/popconfirm'
// import ElPopover from '@vic/popover'
// import ElPopper from '@vic/popper'
// import ElProgress from '@vic/progress'
// import ElRadio from '@vic/radio'
// import ElRadioButton from '@vic/radio-button'
// import ElRadioGroup from '@vic/radio-group'
// import ElRate from '@vic/rate'
import ElRow from '@vic/row'
import ElScrollBar from '@vic/scrollbar'
// import ElSelect from '@vic/select'
// import ElSlider from '@vic/slider'
// import ElStep from '@vic/step'
// import ElSteps from '@vic/steps'
// import ElSubmenu from '@vic/submenu'
// import ElSwitch from '@vic/switch'
// import ElTabPane from '@vic/tab-pane'
// import ElTable from '@vic/table'
// import ElTableColumn from '@vic/table-column'
// import ElTabs from '@vic/tabs'
// import ElTag from '@vic/tag'
// import ElTimePicker from '@vic/time-picker'
// import ElTimeSelect from '@vic/time-select'
// import ElTimeline from '@vic/timeline'
// import ElTimelineItem from '@vic/timeline-item'
// import ElTooltip from '@vic/tooltip'
// import ElTransfer from '@vic/transfer'
// import ElTree from '@vic/tree'
// import ElUpload from '@vic/upload'
import { use } from '@vic/locale'
import { version as version_ } from './version'
import { setConfig } from '@vic/utils/config'
import type { InstallOptions } from '@vic/utils/config'

const version = version_ // version_ to fix tsc issue

const defaultInstallOpt: InstallOptions =  {
  size: '' as ComponentSize,
  zIndex: 2000,
}

const components = [
  ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  // ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  // ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  // ElForm,
  // ElFormItem,
  // ElHeader,
  // ElIcon,
  // ElImage,
  // ElInput,
  // ElInputNumber,
  // ElLink,
  // ElMain,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  // ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  // ElRadio,
  // ElRadioButton,
  // ElRadioGroup,
  // ElRate,
  ElRow,
  ElScrollBar,
  // ElSelect,
  // ElSlider,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
]

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  // ElMessage,
  // ElMessageBox,
  // ElNotification,
]

const install = (app: App, opt: InstallOptions): void => {
  const option = Object.assign(defaultInstallOpt, opt)
  use(option.locale)
  app.config.globalProperties.$ELEMENT = option
  setConfig(option)

  components.forEach(component => {
    app.component(component.name, component)
  })

  plugins.forEach(plugin => {
    app.use(plugin as any)
  })
}

export {
  ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  // ElBreadcrumb,
  // ElBreadcrumbItem,
  // ElButton,
  // ElButtonGroup,
  // ElCalendar,
  // ElCard,
  // ElCarousel,
  // ElCarouselItem,
  // ElCascader,
  // ElCascaderPanel,
  // ElCheckbox,
  // ElCheckboxButton,
  // ElCheckboxGroup,
  // ElCol,
  // ElCollapse,
  // ElCollapseItem,
  // ElCollapseTransition,
  // ElColorPicker,
  // ElContainer,
  // ElDatePicker,
  // ElDialog,
  // ElDivider,
  // ElDrawer,
  // ElDropdown,
  // ElDropdownItem,
  // ElDropdownMenu,
  // ElFooter,
  // ElForm,
  // ElFormItem,
  // ElHeader,
  // ElIcon,
  // ElImage,
  // ElInfiniteScroll,
  // ElInput,
  // ElInputNumber,
  // ElLink,
  ElLoading,
  // ElMain,
  // ElMenu,
  // ElMenuItem,
  // ElMenuItemGroup,
  // ElMessage,
  // ElMessageBox,
  // ElNotification,
  // ElOption,
  // ElOptionGroup,
  // ElPageHeader,
  // ElPagination,
  // ElPopconfirm,
  // ElPopover,
  // ElPopper,
  // ElProgress,
  // ElRadio,
  // ElRadioButton,
  // ElRadioGroup,
  // ElRate,
  ElRow,
  ElScrollBar,
  // ElSelect,
  // ElSlider,
  // ElStep,
  // ElSteps,
  // ElSubmenu,
  // ElSwitch,
  // ElTabPane,
  // ElTable,
  // ElTableColumn,
  // ElTabs,
  // ElTag,
  // ElTimePicker,
  // ElTimeSelect,
  // ElTimeline,
  // ElTimelineItem,
  // ElTooltip,
  // ElTransfer,
  // ElTree,
  // ElUpload,
  version,
  install,
}

export default {
  version,
  install,
}
