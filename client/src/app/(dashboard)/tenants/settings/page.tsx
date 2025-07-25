"use client"


import SettingsForm from '@/components/SettingsForm';
import { useGetAuthUserQuery, useUpdateManagerSettingsMutation } from '@/state/api';
import React from 'react'

const TenantSettings = () => {
  const { data: authUser, isLoading } = useGetAuthUserQuery();
  const [updateTenant] = useUpdateManagerSettingsMutation()

  if (isLoading) return <>Loading...</>;

  // console.log(authUser?.userInfo)
  const initialData = {
    name: authUser?.userInfo?.name,
    email: authUser?.userInfo?.email,
    phoneNumber: authUser?.userInfo?.phoneNumber,
  }


  const handleSubmit = async (data: typeof initialData) => {
    await updateTenant({
      cognitoId: authUser?.cognitoInfo?.userId,
      ...data,
    });
  };

  return (
    <SettingsForm
      initialData={initialData}
      onSubmit={handleSubmit}
      userType='tenant'>

    </SettingsForm>
  )
}

export default TenantSettings