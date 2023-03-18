"use client"

import { FC, useState } from 'react'
import Button from '@/components/ui/Button';
import { signIn, signOut } from 'next-auth/react';

interface SignOutButtonProps {

}

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signOutWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      // toast({
      //   title: 'Error sign out',
      //   message: 'Plase try again latter',
      //   type: 'error',
      // })
    }
  }
  return (
    <Button onClick={signOutWithGoogle} isLoading={isLoading}>
      Sign Out
    </Button>
  )
}

export default SignOutButton