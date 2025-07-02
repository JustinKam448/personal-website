import { StarBackground } from "../components/StarBackground";
import { PCNavBar } from "../components/PCNavBar";
import { MobileNavBar } from "../components/MobileNavBar";

export const Home = () => {
    return  (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
        { /* Background Effects */ }
        <StarBackground />

        { /* NavBar */ }
        <div className="hidden md:flex">
            <PCNavBar />
        </div>

        {/* MobileNavBar: visible on <md screens */}
        <div className="md:hidden">
            <MobileNavBar />
        </div>

        { /* Main Content */ }

        { /* Footer */ }
    </div>
    );
}
