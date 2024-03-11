const SocialButton = ({ iconName }) => {
  const handleButtonClick = () => {
    console.log(`Clicked on ${iconName}`);
  };
  return (
    <div
      className="border rounded-circle border-dark"
      onClick={handleButtonClick}
    >
      <a href="">
        <img src={`/${iconName}.png`} className="w-100 p-3" />
      </a>
    </div>
  );
};

export default SocialButton;
