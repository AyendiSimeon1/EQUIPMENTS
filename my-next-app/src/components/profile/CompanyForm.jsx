function CompanyForm() {
    const [company, setCompany] = useState({
      name: '',
      address: '',
      contactEmail: '',
      phone: '',
      registration: ''
    })
  
    return (
      <Card className="p-6">
        <h2 className="mb-6 text-xl font-semibold">Company Details</h2>
        <form className="space-y-6">
          <FormField
            label="Company Name"
            value={company.name}
            onChange={(e) => setCompany({ ...company, name: e.target.value })}
          />
          <FormField
            label="Address"
            value={company.address}
            onChange={(e) => setCompany({ ...company, address: e.target.value })}
          />
          <FormField
            label="Contact Email"
            type="email"
            value={company.contactEmail}
            onChange={(e) => setCompany({ ...company, contactEmail: e.target.value })}
          />
          <FormField
            label="Phone"
            value={company.phone}
            onChange={(e) => setCompany({ ...company, phone: e.target.value })}
          />
          <FormField
            label="Registration Number"
            value={company.registration}
            onChange={(e) => setCompany({ ...company, registration: e.target.value })}
          />
          <button className="w-full rounded-lg bg-yellow-500 py-3 font-medium text-white">
            Save Company Details
          </button>
        </form>
      </Card>
    )
  }