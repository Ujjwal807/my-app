function InputText({ content, setContent }) {
  return (
    <textarea
      style={{ resize: "none" }}
      className=" w-full sm:h-56 min-[320px]:h-52 min-[320px]:mt-16 p-4  mt-6 text-xl backdrop-blur bg-gray-800/50 outline-none rounded-lg text-slate-300 font-semibold min-[320px]:w-full:"
      onChange={(e) => setContent(e.target.value)}
      placeholder="Start Typing... "
      // rows={12}
      value={content}
    ></textarea>
  );
}

export default InputText;
