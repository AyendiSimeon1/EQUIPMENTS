function FormField({ label, type = 'text', ...props }) {
    return (
      <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input
          type={type}
          className="mt-1 block w-full rounded-lg border p-2"
          {...props}
        />
      </div>
    )
  }