// components/Checkbox.tsx
interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }
  
  export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
      <label className="flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <span className="text-sm text-gray-700">{label}</span>
      </label>
    );
  };