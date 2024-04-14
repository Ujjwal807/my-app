function InputText({ content, setContent }) {
  return (
    <textarea
      style={{ resize: "none" }}
      className=" w-full p-4 m-2 mt-6 text-xl backdrop-blur bg-gray-800/50 outline-none	rounded-lg text-slate-300 font-semibold"
      onChange={(e) => setContent(e.target.value)}
      placeholder="Start Typing... "
      rows={13}
      value={content}
    ></textarea>
  );
}

export default InputText;
