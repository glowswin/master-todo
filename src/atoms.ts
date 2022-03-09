import { atom } from "recoil";

export interface ICategory {
  id: number;
  text: string;
}
export interface ITodo {
  id: number;
  text: string;
  categoryid: number;
}

export const categoryState = atom<ICategory[]>({
  key: "categorylist",
  default: [],
});

export const todoState = atom<ITodo[]>({
  key: "todolist",
  default: [],
});
