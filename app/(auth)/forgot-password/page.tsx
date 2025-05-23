import { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Reset Password | Zentoric',
  description: 'Reset your Zentoric account password.',
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthForm type="forgot-password" />
    </AuthLayout>
  );
}