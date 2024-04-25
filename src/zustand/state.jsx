import { create } from 'zustand';

const useStore = create((set) => ({
  isLogin: null,
  userData: null,
  mobileSidebar:false,
  dataMeet:null,
  localMeet:null
}));

export default useStore;
