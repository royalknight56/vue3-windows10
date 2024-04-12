import { ScreenComponentVue } from '@packages/ui';
import WinButtonVue from './components/WinButton.vue';
import WinCheckBox from './components/WinCheckBox.vue';
import WinInput from './components/WinInput.vue';
import WinLoadingVue from './components/WinLoading.vue';
import WinLogoVue from './components/WinLogo.vue';
import WinProcess from './components/WinProcess.vue';
import WinSelect from './components/WinSelect.vue';
import WinUpButtonGroupVue from './components/WinUpButtonGroup.vue';

export {
  WinButtonVue,
  WinCheckBox,
  WinInput,
  WinLoadingVue,
  WinLogoVue,
  WinProcess,
  WinSelect,
  WinUpButtonGroupVue,
};

const plug = {
  install: function (app: any): any {
    app.component('Screen', ScreenComponentVue);
  },
};
export default plug;
export type { VtronFileInterface } from '@/packages/kernel/file/FIleInterface';
export * from '@/packages/kernel/file/FileSystem';
export * from '@/packages/kernel/file/Path';
export * from '@/packages/kernel/shell/Shell';
export type { ShellInterface } from '@/packages/kernel/shell/ShellType';
export { System, useSystem } from '@/packages/system/index';
export { Dialog } from '@/packages/ui/dialog/Dialog';
export { i18n } from '@/packages/ui/i18n';
export { Menu } from '@/packages/ui/menu/Menu';
export { MenuItem } from '@/packages/ui/menu/MenuItem';
export { Notify } from '@/packages/ui/notification/Notification';
export { Tray } from '@/packages/ui/tray/Tary';
export { BrowserWindow } from '@/packages/ui/window/BrowserWindow';
export { vDragable } from '@/packages/ui/window/MakeDragable';
export type { SystemOptions, WinApp } from '@packages/type/type';
export { dealIcon } from '@packages/util/Icon';
