export const CRAFIX_ORIGIN = "https://photo.crafix.id";

export const CRAFIX_AUTH_LOGIN = `${CRAFIX_ORIGIN}/auth/login`;

export const CRAFIX_CODES_BASE = `${CRAFIX_ORIGIN}/codes`;

export type CrafixUser = {
  id: string;
  email: string;
  name: string;
};

export type CrafixLoginResponse = {
  accessToken: string;
  user: CrafixUser;
};

export type GenerateCodeResponse = {
  code: string;
  maxUsage: number;
};

export type UserCodeItem = {
  id: string;
  code: string;
  usageCount: number;
  maxUsage: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
};
