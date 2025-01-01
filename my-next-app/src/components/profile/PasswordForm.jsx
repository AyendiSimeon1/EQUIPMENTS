function PasswordForm() {
    return (
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Change Password</h2>
        <form className="space-y-6">
          <FormField
            label="Current Password"
            type="password"
          />
          <FormField
            label="New Password"
            type="password"
          />
          <FormField
            label="Confirm New Password"
            type="password"
          />
          <button className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-white">
            Update Password
          </button>
        </form>
      </Card>
    )
  }
  