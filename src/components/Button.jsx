const Button = ({ label, iconUrl }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-[#ff6452] rounded-full text-white border-[#ff6452] hover:bg-[#ff6452]/90'>
      {label}
      <img
        src={iconUrl}
        alt='Arrow Right Icon'
        className='ml-2 rounded-full w-5 h-5'
      />
    </button>
  );
};
export default Button;
