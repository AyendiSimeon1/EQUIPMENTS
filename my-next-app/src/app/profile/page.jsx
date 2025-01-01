'use client'
import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Profile() {
  return (
    <div className="container mx-auto py-8">
      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="company">Company Details</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="password">Change Password</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileForm />
        </TabsContent>
        <TabsContent value="company">
          <CompanyForm />
        </TabsContent>
        <TabsContent value="settings">
          <SettingsForm />
        </TabsContent>
        <TabsContent value="password">
          <PasswordForm />
        </TabsContent>
      </Tabs>
    </div>
  )
}
