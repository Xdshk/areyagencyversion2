"use client";

import { useState, useCallback } from "react";
import { pdfjs, Document, Page } from "react-pdf";

// Worker для PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import { motion, AnimatePresence } from "framer-motion";
import { CaseItem } from "./cases";
export default function CaseViewer({ caseData, onClose }: { caseData: CaseItem; onClose: () => void }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfError, setPdfError] = useState(false);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (caseData.type === "pdf" && numPages) {
        if (e.key === "ArrowRight" || e.key === " ") {
          e.preventDefault();
          setCurrentPage((prev) => Math.min(prev + 1, numPages));
        }
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          setCurrentPage((prev) => Math.max(prev - 1, 1));
        }
      }
    },
    [onClose, caseData.type, numPages],
  );

  const onDocumentLoadSuccess = ({ numPages: total }: { numPages: number }) => {
    setNumPages(total);
    setCurrentPage(1);
    setPdfError(false);
  };

  const onDocumentLoadError = () => {
    setPdfError(true);
  };

  const handleSwipe = useCallback(
    (info: { offset: { x: number } }) => {
      if (caseData.type !== "pdf" || !numPages) return;
      const threshold = 60;
      if (info.offset.x < -threshold) {
        setCurrentPage((prev) => Math.min(prev + 1, numPages));
      } else if (info.offset.x > threshold) {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      }
    },
    [caseData.type, numPages],
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        autoFocus
      >
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal content */}
        <motion.div
          className="relative z-10 flex h-full max-h-[85vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-white/15 bg-black/95 md:flex-row"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          drag={caseData.type === "pdf" ? "x" : false}
          dragConstraints={{ left: -80, right: 80 }}
          onDragEnd={(_, info) => handleSwipe(info)}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/[0.06] p-1.5 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            aria-label="Закрыть"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Left panel — media */}
          <div className="relative flex h-[40vh] min-h-[300px] w-full flex-shrink-0 items-center justify-center bg-neutral-900 md:h-auto md:w-[55%] md:min-w-[400px]">
            {caseData.type === "pdf" ? (
              <div className="relative h-full w-full overflow-hidden">
                {/* Page indicator */}
                <div className="absolute top-4 left-4 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white/70 backdrop-blur">
                  {numPages ? `${currentPage} / ${numPages}` : "Загрузка…"}
                </div>

                {/* Real PDF render */}
                <div className="relative h-full w-full flex items-center justify-center p-4">
                  {pdfError ? (
                    <div className="text-center text-white/50">
                      <svg className="mx-auto mb-3 h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <p>Не удалось загрузить PDF</p>
                      <p className="text-xs mt-1 text-white/30">Проверьте файл: {caseData.media}</p>
                    </div>
                  ) : (
                    <Document
                      file={caseData.media}
                      onLoadSuccess={onDocumentLoadSuccess}
                      onLoadError={onDocumentLoadError}
                      loading={
                        <div className="flex h-40 items-center justify-center">
                          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        </div>
                      }
                      error={null}
                      className="max-h-full"
                      renderMode="canvas"
                    >
                      <Page
                        pageNumber={currentPage}
                        width={600}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-2xl"
                        loading={<div className="h-40 animate-pulse bg-white/5 rounded" />}
                      />
                    </Document>
                  )}
                </div>

                {/* Nav arrows */}
                {numPages && numPages > 1 && currentPage > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPage((p) => Math.max(p - 1, 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white/60 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                )}
                {numPages && numPages > 1 && currentPage < numPages && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPage((p) => Math.min(p + 1, numPages!));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white/60 backdrop-blur-sm transition-colors hover:bg-black/80 hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                )}

                {/* Touch hint */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] text-white/20">
                  свайп ← → или стрелки
                </div>
              </div>
            ) : (
              <div className="relative h-full w-full overflow-hidden p-4">
                <img
                  src={caseData.media}
                  alt={caseData.title}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
          </div>

          {/* Right panel — description */}
          <div className="flex h-[35vh] flex-col overflow-y-auto border-t border-white/10 bg-black/50 p-6 md:h-auto md:w-[45%] md:border-t-0 md:border-l md:min-w-[300px]">
            <span className="mb-2 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              #{caseData.id} · {caseData.type === "pdf" ? `${numPages || "?"} стр.` : "Фотография"}
            </span>
            <h2 className="font-editorial text-2xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-3xl">
              {caseData.title}
            </h2>
            <div className="my-3 h-px bg-gradient-to-r from-zinc-500 to-transparent" />
            <p className="text-sm leading-relaxed text-white/70">
              {caseData.category}
            </p>
            <div className="mt-6">
              <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500">История</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{caseData.description}</p>
            </div>
            <div className="mt-auto pt-6">
              <button
                onClick={onClose}
                className="w-full rounded-full border border-white/20 bg-white/[0.04] py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10"
              >
                Закрыть
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}