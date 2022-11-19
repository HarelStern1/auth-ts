export interface AppContextType {
  accessToken: string;
  setAccessToken: (param: string) => void;
  user: {
    name?: string;
    email: string;
    password: string;
  };

  setUser: (param: { name?: string; email: string; password: string }) => void;
}
