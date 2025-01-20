import { useDispatch } from "react-redux";
import type { AppDispatch } from "./store"; // `store.ts`dagi AppDispatch turini import qilish

// Redux `dispatch`ni tiplash uchun hook
export const useAppDispatch: () => AppDispatch = useDispatch;
