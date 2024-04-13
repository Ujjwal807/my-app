import { Document } from "@react-pdf/renderer";
import mammoth from "mammoth";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { toast } from "react-toastify";
function Bottombar({ content, setContent }) {
  const copyTextToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };
  const handleCopy = (e) => {
    e.preventDefault();
    copyTextToClipboard(content);
    toast("Copied to clipboard successfully!!");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const extension = file.name.split('.').pop().toLowerCase();
    if (extension === "pdf") {
        readPDFFile(file);
    } else if (extension === "txt") {
      const text = event.target.result;
      setContent(text);
    }
    else if (extension === "docx" || extension === "docs") {
        readDOCXFile(file);
    } else {
      console.error('Unsupported file type');
    }
  };

  const readPDFFile = async (file) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      try {
        const pdfDoc = await Document.create(content);
        let text = '';
        for (let i = 0; i < pdfDoc.numPages; i++) {
          const page = pdfDoc.getPage(i);
          const pageText = await page.getTextContent();
          text += pageText.items.map((item) => item.str).join('');
        }
        setContent(text);
      } catch (error) {
        console.error('Error reading PDF:', error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const readDOCXFile = async (file) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const content = event.target.result;
      try {
        const result = await mammoth.extractRawText({ arrayBuffer: content });
        setContent(result.value);
      } catch (error) {
        console.error('Error reading DOCX:', error);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="w-full backdrop-blur-sm bg-gray-400/20  rounded-lg p-2 mx-2">
      <div className="flex justify-between">
        <div style={{ position: "relative", display: "inline-block" }}>
          <label htmlFor="file-upload">
            <IoCloudUploadSharp color="#fffa" className="m-1" size="2rem" />
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileUpload}
            accept=".application/pdf, .doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
          />
        </div>
        <div className="flex">
          <button onClick={handleCopy}>
            <MdOutlineContentCopy color="#fffa" className="mr-3" size="2rem" />
          </button>
          <button
            onClick={() => {
              setContent("");
              toast("Textarea Cleared successfully!");
            }}
          >
            <GoTrash color="#fffa" size="2rem" className="mr-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bottombar;
