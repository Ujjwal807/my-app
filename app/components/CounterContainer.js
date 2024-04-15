import Counter from "./Counter";
function CounterContainer({ content }) {
  const wordPerMinute = 100;
  let wordCount = content.length === 0 ? 0 : content.trim().split(/\s+/).length;
  const readingTime = wordCount / wordPerMinute;
  return (
    <div className="flex min-[320px]:h-full items-center justify-center min-[320px]:flex-wrap min-[320px]:gap-4 min-[320px]:w-full max-w-screen-lg bg-gray-400/20 backdrop-blur-lg rounded-lg sm:w-full sm:mt-0  py-2 px-4 lg:w-9/12  mt-4 mx-5 justify-between">
      <Counter heading="WORDS" content={wordCount} />
      <Counter heading="CHARACTER" content={content.split("").length} />
      <Counter
        heading="SENTENCE"
        content={
          content.split(/[.!?]+/).filter((sentence) => sentence.trim() !== "")
            .length
        }
      />
      <Counter
        heading="READING TIME"
        content={
          readingTime < 1
            ? (readingTime * 60).toFixed(2) + ` s`
            : readingTime + ` m`
        }
      />
      <Counter
        heading="PARAGRAPH"
        content={content.length === 0 ? 0 : content.split(/\n{2,}/).length}
      />
    </div>
  );
}

export default CounterContainer;
