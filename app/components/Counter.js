function Counter({heading, content}) {
  return (
    <div className="flex flex-col items-center ">
      <h5 className="text-sm text-violet-200		 font-semibold">{heading}</h5>
      <p className="text-4xl font-extrabold text-indigo-200		">{content}</p>
    </div>
  );
}

export default Counter;
