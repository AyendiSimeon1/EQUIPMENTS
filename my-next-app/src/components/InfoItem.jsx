function InfoItem({ label, value }: { label: string; value: string }) {
    return (
      <div className="space-y-1">
        <span className="text-sm text-gray-500">{label}</span>
        <p className="font-medium">{value}</p>
      </div>
    )
  }