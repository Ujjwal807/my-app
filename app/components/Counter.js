function Counter({heading, content}) {
  return (
    <div className="flex flex-col items-center  ">
      <h5 className="text-sm min-[320px]:text-[12px] sm:text-xs lg:text-sm text-violet-200 font-semibold">{heading}</h5>
      <p className="text-4xl sm:text-base min-[320px]:text-[10px] md:text-lg font-extrabold text-indigo-200">{content}</p>
    </div>
  );
}

export default Counter;
