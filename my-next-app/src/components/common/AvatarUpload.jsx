function AvatarUpload({ value, onChange }) {
    return (
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-100">
          {value && (
            <img
              src={URL.createObjectURL(value)}
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          )}
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onChange(e.target.files[0])}
            className="hidden"
            id="avatar-upload"
          />
          <label
            htmlFor="avatar-upload"
            className="cursor-pointer rounded-lg bg-gray-100 px-4 py-2 text-sm"
          >
            Change Photo
          </label>
        </div>
      </div>
    )
  }