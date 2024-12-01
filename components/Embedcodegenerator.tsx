"use client";
import React, { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { RainbowButton } from "./ui/rainbow-button";

const EmbedCodeGenerator: React.FC = () => {
    const [code, setCode] = useState<string>(""); // State for input code
    const [embedCode, setEmbedCode] = useState<string>(""); // State for generated embed code

    const handleGenerateEmbedCode = () => {
        if (!code.trim()) {
            alert("Please enter some code before generating embed code.");
            return;
        }

        // Escape special HTML characters
        const escapedCode = code
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");

        // Generate the embeddable HTML snippet
        const embedSnippet = `<pre><code class="language-html">\n${escapedCode}\n</code></pre>`;
        setEmbedCode(embedSnippet);
    };

    const handleCopy = () => {
        if (embedCode) {
            navigator.clipboard.writeText(embedCode)
                .then(() => alert("Embed code copied to clipboard!"))
                .catch(err => alert("Failed to copy: " + err));
        }
    };

    return (
        <div className="max-w-7xl min-h-screen pt-32 pb-20 mx-auto p-6">
            <h1 className="text-4xl text-gray-300 font-extrabold mx-auto mb-10 md:text-5xl">
                Paste your code here !
            </h1>
            <div className="relative">
                <textarea
                    placeholder="Write your code here..."
                    value={code}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
                    className="w-full min-h-48 rounded-2xl text-white bg-neutral-950 p-4 mb-4 font-mono text-sm z-10 relative"
                ></textarea>
            </div>

            <div className="flex justify-center">
            <button
                onClick={handleGenerateEmbedCode}
                className="text-white rounded-md transition relative z-10"
            >
                <RainbowButton className="text-white" >
                    Generate Embeded Code
                </RainbowButton>
            </button>
            </div>

            {embedCode && (
                <div className="relative mt-6">
                    <h1 className="text-4xl text-gray-300 font-extrabold mx-auto mt-20 mb-10 md:text-5xl">
                        Your Embeded code
                    </h1>
                    <textarea
                        readOnly
                        value={embedCode}
                        className="w-full min-h-48 p-4 rounded-2xl text-white bg-neutral-950 font-mono text-sm"
                    ></textarea>
                    <button
                        onClick={handleCopy}
                        className="absolute top-20 lg:top-16 right-2 p-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
                    >
                        <FiClipboard className="w-5 h-5" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default EmbedCodeGenerator;

