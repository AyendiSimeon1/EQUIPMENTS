function ProfileForm() {
    const [formData, setFormData] = useState({
      avatar: null,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: ''
    })
  
    return (
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Set up Profile</h2>
        <form className="space-y-6">
          <AvatarUpload
            value={formData.avatar}
            onChange={(file) => setFormData({ ...formData, avatar: file })}
          />
          
          <div className="grid gap-6 md:grid-cols-2">
            <FormField
              label="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />
            <FormField
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />
            <FormField
              label="Phone Number"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            />
            <FormField
              label="Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
  
          <button className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-white">
            Save Changes
          </button>
        </form>
      </Card>
    )
  }