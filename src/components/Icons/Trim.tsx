export const Trim = ({
  className,
  type,
}: {
  className?: string;
  type: 'success' | 'info' | 'warning' | 'danger';
}) => {
  const colorMap = {
    success: '#47b881',
    info: '#1070ca',
    warning: '#d9822b',
    danger: '#ec4c47',
  };

  return (
    <div
      className={className}
      style={{
        backgroundColor: colorMap[type],
      }}
    />
  );
};
