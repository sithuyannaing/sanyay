import { ReactNode } from "react";

export type AppContextType = {
  showDrawer: boolean;
  setShowDrawer: (value: boolean) => void;
  auth: any;
  setAuth: (value: boolean) => void;
  showForm: boolean;
  setShowForm: (value: boolean) => void;
  mode: string;
  setMode: (value: string) => void;
  globalMsg: boolean | null;
  setGlobalMsg: (value: any) => void;
};

export type Listprops = {
  children: ReactNode;
};

export type Post = {
  id: number;
  content: string;
  name: string;
};

export type FormProps = {
  add: (content: string, name: string) => void;
};

export type ItemProps = {
  item: {
    id: number;
    content: string;
    name: string;
    created: string;
  };
  remove: (id: number) => void;
};
