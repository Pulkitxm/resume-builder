export default function EditableField({
  value,
  className,
  color,
  fontSize,
  fontWeight,
  isEditable,
  onchange,
}: {
  value: string;
  className?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  isEditable?: boolean;
  onchange: (val: string) => void;
}) {
  return isEditable ? (
    <textarea
      className={`${className} bg-transparent outline-none border-none focus-within:underline resize-none overflow-hidden`}
      style={{
        color,
        fontSize,
        fontWeight,
      }}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onchange(e.target.value);
      }}
    />
  ) : (
    <div
      className={className}
      style={{
        color,
        fontSize,
        fontWeight,
      }}
    >
      {value}
    </div>
  );
}
