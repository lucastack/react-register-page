const AlertStatusColor = {
  error: "#fd5c63",
  success: "#50C878",
};

const Alert = ({ message, status }) => {
  return (
    <div>
      {status !== "unset" ? (
        <div
          className="p-2 mt-2 border rounded-2 text-white"
          style={{ backgroundColor: AlertStatusColor[status] }}
        >
          {message}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Alert;
