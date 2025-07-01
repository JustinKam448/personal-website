import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";

export const Home = () => {
    return  (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        { /* NavBar */ }
        <NavBar />

        { /* Background Effects */ }
        <StarBackground />

        { /* Main Content */ }

        { /* Footer */ }
    </div>
    );
}
