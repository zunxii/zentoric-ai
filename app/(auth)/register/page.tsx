import { Metadata } from 'next';
import AuthLayout from '@/components/auth/AuthLayout';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Create Account | Zentoric',
  description: 'Create your Zentoric account and start building AI models without code.',
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthForm type="register" />
    </AuthLayout>
  );
}