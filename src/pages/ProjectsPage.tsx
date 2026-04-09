import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolio';
import { useLanguage } from '../hooks/useLanguage';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { getPageSeoByPath } from '../lib/pageSeo';

const ProjectsPage = () => {
  const { lang } = useLanguage();

  usePageMetadata(getPageSeoByPath('/projects', lang));

  return (
    <section className="relative min-h-screen overflow-hidden pb-24 pt-10 md:pt-16">
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute left-[-8%] top-12 h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-8%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles className="h-4 w-4" />
            {lang === 'ar' ? 'كل مشاريعنا في مكان واحد' : 'All projects in one place'}
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white md:text-7xl">
            {lang === 'ar' ? 'اختر المشروع وافتحه مباشرة' : 'Pick a Project and Open It Directly'}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 md:text-xl md:leading-9">
            {lang === 'ar'
              ? 'رتبنا لك كل المشاريع في شبكة واضحة وبسيطة. اضغط على أي بطاقة وسيفتح المشروع الحي مباشرة بدون صفحات شرح إضافية.'
              : 'Every project is shown in a clean grid. Click any card to open the live project directly, without an extra explanation page.'}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              viewport={{ once: true, amount: 0.15 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ProjectCard linkMode="live" project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
