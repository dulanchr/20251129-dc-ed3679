import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <p className="text-lg text-muted-foreground">
        This project is set up with React, Vite, shadcn/ui, Tailwind CSS,
        Firebase, and Framer Motion.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">⚡ Vite</h3>
          <p className="text-sm text-muted-foreground">
            Lightning fast development with HMR
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">🎨 shadcn/ui</h3>
          <p className="text-sm text-muted-foreground">
            Beautiful, accessible components
          </p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="font-semibold mb-2">🔥 Firebase</h3>
          <p className="text-sm text-muted-foreground">
            Authentication, database, and storage
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
