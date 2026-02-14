import { motion } from "framer-motion";

export const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <motion.div className="flex flex-col gap-2">
    {/* TEXT */}
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        show: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className="flex items-center justify-between"
    >
      <p className="text-md font-bold text-neutral-500">{label}</p>

      <h3 className="text-md font-bold text-neutral-950">{value}</h3>
    </motion.div>

    {/* BORDER */}
    <motion.div
      variants={{
        hidden: { scaleX: 0 },
        show: {
          scaleX: 1,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      style={{ transformOrigin: "left" }}
      className="border-b border-neutral-950"
    />
  </motion.div>
);
