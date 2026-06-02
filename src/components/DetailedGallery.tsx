import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryItem {
  image: string;
  title?: string;
  description?: string;
  category?: string;
}

interface DetailedGalleryProps {
  items: GalleryItem[];
  title?: string;
  isArabic?: boolean;
}

const DetailedGallery: React.FC<DetailedGalleryProps> = ({
  items,
  title,
  isArabic = true,
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const categories = Array.from(
    new Set(items.map((item) => item.category).filter((category): category is string => Boolean(category)))
  );
  const filteredItems = filter
    ? items.filter((item) => item.category === filter)
    : items;

  return (
    <section className="py-16">
      {title && (
        <h2 className="font-display text-3xl font-bold text-white mb-8">
          {title}
        </h2>
      )}

      {/* Filter */}
      {categories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              filter === null
                ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-300 border border-white/10'
            }`}
          >
            {isArabic ? 'الكل' : 'All'}
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                filter === category
                  ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-300 border border-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={`${item.image}-${idx}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={() => setSelectedIdx(idx)}
              className="group relative overflow-hidden rounded-xl border border-white/10 cursor-pointer h-64 md:h-80"
            >
              <img
                src={item.image}
                alt={item.title || 'Gallery item'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              {(item.title || item.description) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-0 inset-x-0 p-4 text-white"
                >
                  {item.title && (
                    <p className="font-bold text-lg">{item.title}</p>
                  )}
                  {item.description && (
                    <p className="text-sm text-slate-200 mt-1">
                      {item.description}
                    </p>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedIdx(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[80vh] w-full"
            >
              <img
                src={filteredItems[selectedIdx].image}
                alt="Full size"
                className="w-full h-full object-contain rounded-xl"
              />

              {/* Navigation */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setSelectedIdx(
                    selectedIdx === 0 ? filteredItems.length - 1 : selectedIdx - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() =>
                  setSelectedIdx(
                    selectedIdx === filteredItems.length - 1 ? 0 : selectedIdx + 1
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedIdx(null)}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Info */}
              {(filteredItems[selectedIdx].title ||
                filteredItems[selectedIdx].description) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-white"
                >
                  {filteredItems[selectedIdx].title && (
                    <p className="font-bold text-lg">
                      {filteredItems[selectedIdx].title}
                    </p>
                  )}
                  {filteredItems[selectedIdx].description && (
                    <p className="text-slate-300 mt-2">
                      {filteredItems[selectedIdx].description}
                    </p>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DetailedGallery;
export type { GalleryItem, DetailedGalleryProps };
