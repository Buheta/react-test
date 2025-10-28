import React from "react";

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-gray-600 text-sm py-6 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <div className="flex flex-wrap justify-center items-center gap-3">
                    <span>© Copyright 2025 Wisdom School</span>
                    <span>|</span>
                    <a href="#privacy" className="hover:text-blue-700 transition underline">Privacy</a>
                    <span>|</span>
                    <a href="#cookies" className="hover:text-blue-700 transition underline">Cookie Policy</a>
                    <span>|</span>
                    <a href="#terms" className="hover:text-blue-700 transition underline">Terms of Use</a>
                </div>
            </div>
        </footer>
    );
}