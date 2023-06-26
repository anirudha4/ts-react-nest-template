import Button from "@components/custom/Button";
import { motion } from "framer-motion";
const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            {/* HERO */}
            <div className="flex flex-col items-center justify-center gap-10" style={{ minHeight: 'calc(100vh - 6rem)' }}>
                <div className="-mt-20">
                    <div className="max-w-4xl text-secondary-foreground mx-auto text-center text-6xl text-display leading-normal">
                        Stay Organized and Accomplish More with <span className="text-primary">moneybolt</span>.
                    </div>
                    <div className="mt-5 text-secondary-foreground text-center text-lg font-light max-w-lg mx-auto tracking-wide">
                        Effortlessly manage your tasks, boost productivity, and enjoy a beautifully designed interface.
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <Button className="w-[180px]" variant="primary" size="lg">Try Free Forever</Button>
                    <Button className="w-[180px]" variant="outline" size="lg">Contact Us</Button>
                </div>
            </div>
            {/* END HERO */}
        </motion.div>
    )
}
export default Home;