import { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Sign In | Zentoric',
  description: 'Sign in to your Zentoric account and start building AI models without code.',
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthForm type="login" />
    </AuthLayout>
  );
}