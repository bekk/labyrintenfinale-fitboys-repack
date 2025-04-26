import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { ArrowRight } from "lucide-react";

const companyData = [
  { year: 2018, growth: 20, innovation: 30, impact: 10 },
  { year: 2019, growth: 40, innovation: 25, impact: 30 },
  { year: 2020, growth: 30, innovation: 45, impact: 40 },
  { year: 2021, growth: 50, innovation: 35, impact: 60 },
  { year: 2022, growth: 70, innovation: 60, impact: 50 },
  { year: 2023, growth: 90, innovation: 80, impact: 75 },
];

export default function Home() {
  const [isChartVisible, setIsChartVisible] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.5], [0, 1, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.7], [0, 1, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsChartVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const chartSection = document.getElementById("chart-section");
    if (chartSection) {
      observer.observe(chartSection);
    }

    return () => {
      if (chartSection) {
        observer.unobserve(chartSection);
      }
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-gray-900 font-sans"
      ref={containerRef}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"
          style={{ y: y1 }}
        />
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900"
          >
            Den beste ideen er alltid den neste
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-1 bg-blue-500 mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto text-gray-600"
          >
            Vi i <span className="text-blue-600 font-medium">ReNiew</span>{" "}
            tilbyr et banebrytende
            <span className="text-blue-600 font-medium">
              {" "}
              digitalt verktøy
            </span>{" "}
            for TV-produsenter som ønsker å bringe modernisering inn i bransjen.
          </motion.p>

          <div className="flex justify-center w-full mt-8 group">
            <a href="/start" className="flex items-center">
              <p className="text-lg font-medium text-gray-600 group-hover:underline">
                Kom i gang
              </p>

              <ArrowRight className="size-6 text-emerald-600 group-hover:text-emerald-700 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      <section
        id="chart-section"
        className="relative min-h-screen flex items-center py-24 bg-gray-50"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
                Kunstig intelligens møter TV-produksjon
              </h2>
              <div className="w-16 h-1 bg-blue-500 mb-8" />
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600 mb-8">
                Ved hjelp av{" "}
                <span className="text-blue-600 font-medium">
                  kunstig intelligens
                </span>{" "}
                og{" "}
                <span className="text-blue-600 font-medium">
                  omfattende datagrunnlag
                </span>
                , gir vi produksjonsteam innsikt i{" "}
                <span className="text-blue-600 font-medium">hva</span> som har
                fungert tidligere.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-600">
                Vi analyserer hvilke programledere som har lykkes, og hvilke
                målgrupper som i dag er underrepresentert i norske
                TV-programmer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isChartVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="relative h-[400px] md:h-[500px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={companyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <defs>
                    <linearGradient
                      id="colorGrowth"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorInnovation"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorImpact"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(0,0,0,0.1)"
                  />
                  <XAxis dataKey="year" stroke="#333333" />
                  <YAxis stroke="#333333" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid rgba(0,0,0,0.1)",
                      borderRadius: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      color: "#333",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="growth"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorGrowth)"
                    strokeWidth={3}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="innovation"
                    stroke="#8b5cf6"
                    fillOpacity={1}
                    fill="url(#colorInnovation)"
                    strokeWidth={3}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="impact"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorImpact)"
                    strokeWidth={3}
                    activeDot={{ r: 8, strokeWidth: 0 }}
                  />
                </AreaChart>
              </ResponsiveContainer>

              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-8 py-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600 p-10">Vekst</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Originalitet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Effekt</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight text-gray-900">
              Sterkere konsepter.
              <br />
              Bedre beslutninger.
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto mb-12" />
            <p className="text-xl md:text-3xl leading-relaxed text-gray-600 mb-16">
              Vårt verktøy hjelper produksjonsteam med å utvikle sterkere
              konsepter, treffe riktige beslutninger om cast og innhold, og
              identifisere nye, lovende publikumsgrupper for suksess.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-blue-600 text-2xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Dataanalyse
                </h3>
                <p className="text-gray-600">
                  Omfattende analyse av historiske TV-data for å identifisere
                  trender og mønstre.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-purple-600 text-2xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  AI-innsikt
                </h3>
                <p className="text-gray-600">
                  Kunstig intelligens som gir anbefalinger basert på
                  suksessfaktorer fra tidligere produksjoner.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Målgruppeanalyse
                </h3>
                <p className="text-gray-600">
                  Identifisering av underrepresenterte målgrupper med potensial
                  for høy engasjement.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
