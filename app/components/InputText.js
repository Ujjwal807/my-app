function InputText({ content, setContent }) {
  return (
    <textarea
      style={{ resize: "none" }}
      className=" w-full p-4 m-2 mt-6 text-xl backdrop-blur bg-slate-50/60 outline-none	rounded-lg text-zinc-900 font-semibold"
      onChange={(e) => setContent(e.target.value)}
      placeholder="Start Typing... "
      rows={14}
      value={content}
    ></textarea>
  );
}

export default InputText;
