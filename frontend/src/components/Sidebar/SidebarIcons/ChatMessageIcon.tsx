const ChatMessageIcon: React.FC<React.HTMLAttributes<SVGElement>> = ({
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 122.88 114.44"
      {...props}
    >
      <defs></defs>
      <path
        // fill="white"
        fillRule="evenodd"
        className="a"
        d="M34.75,35.84A6.72,6.72,0,1,1,28,42.56a6.72,6.72,0,0,1,6.72-6.72ZM7,0H115.91a7,7,0,0,1,7,7V79.86a7,7,0,0,1-7,7H62.55L36.14,106.45c-5,4.76-9.47,7.76-12.88,8-5,.3-7.61-3.1-7-11.56v-16H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0ZM115.91,6.8H7A.17.17,0,0,0,6.8,7V79.86A.17.17,0,0,0,7,80H19.64a3.4,3.4,0,0,1,3.4,3.4v19.49h0a2.09,2.09,0,0,1,0,.25c-.23,3.15-.27,4.48-.17,4.47,1.67-.1,4.77-2.46,8.75-6.24l.32-.26L59.2,80.87A3.36,3.36,0,0,1,61.44,80h54.47a.17.17,0,0,0,.17-.17V7a.17.17,0,0,0-.17-.17Zm-55.47,29a6.72,6.72,0,1,1-6.73,6.72,6.72,6.72,0,0,1,6.73-6.72Zm25.69,0a6.72,6.72,0,1,1-6.73,6.72,6.72,6.72,0,0,1,6.73-6.72Z"
      />
    </svg>
  );
};

export default ChatMessageIcon;