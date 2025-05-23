export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
}

export interface ForgotPasswordData {
  email: string;
}

export interface AuthError {
  message: string;
  field?: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  error?: AuthError;
}

export type AuthFormType = 'login' | 'register' | 'forgot-password';