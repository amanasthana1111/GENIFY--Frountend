import React, { useEffect, useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Loader from "./Loader";

function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [loading , setLoader] = useState(false)

  async function sendingreq() {
    setLoader(true)
    console.log("enter");
    let res = await fetch("https://ai-gen-server.onrender.com/api",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: { input } }),
    });
    res = await res.json();

    setData(res);
    setLoader(false);
  }
  const downloadZip = () => {
    const zip = new JSZip();

    // Add files to the zip
    zip.file("index.html", data.html || "");
    zip.file("style.css", data.css || "");
    zip.file("script.js", data.js || "");

    // Generate the zip and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "generated-website.zip");
    });
  };

 
  return (
    <>
      <div className="hero bg-[#050711]  grid place-items-center px-6 py-16">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl text-blue-500 sm:text-5xl md:text-6xl font-bold  mb-4">
            What do you want to build?
          </h1>
          <h3 className="text-lg sm:text-xl text-gray-400 mb-8">
            Create stunning apps & websites by chatting with AI.
          </h3>

          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              placeholder="How can GenWe help you today?"
              className="w-full bg-[#0B0F19] text-white text-lg px-6 py-4 rounded-xl border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-gray-400"
            />
            {/* Optional: Enhance Prompt + Generate Buttons */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={sendingreq}
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
              >
                Generate →
              </button>
              <button
                className="bg-gradient-to-r from-sky-500 to-blue-600 hover:opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-md"
                onClick={downloadZip}
              >
                Download Code →
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading ? <Loader></Loader> :    

      <div className="output-section p-6 bg-[#0b0f19] min-h-screen text-white">
        <div className="htmlcssjsinline grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* HTML Block */}
          <div className="html1 bg-[#1e293b] p-4 rounded-xl shadow-md overflow-auto">
            <h2 className="text-xl font-semibold mb-2 text-pink-400">HTML</h2>
            <pre className="text-sm whitespace-pre-wrap break-words">
              {data?.html}
            </pre>
          </div>

          {/* CSS Block */}
          <div className="css1 bg-[#1e293b] p-4 rounded-xl shadow-md overflow-auto">
            <h2 className="text-xl font-semibold mb-2 text-blue-400">CSS</h2>
            <pre className="text-sm whitespace-pre-wrap break-words">
              {data?.css}
            </pre>
          </div>

          {/* JS Block */}
          <div className="jss bg-[#1e293b] p-4 rounded-xl shadow-md overflow-auto">
            <h2 className="text-xl font-semibold mb-2 text-yellow-400">
              JavaScript
            </h2>
            <pre className="text-sm whitespace-pre-wrap break-words">
              {data?.js}
            </pre>
          </div>
        </div>
      </div>}
    </>
  );
}

export { Home };
