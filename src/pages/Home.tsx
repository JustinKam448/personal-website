import { useMediaQuery } from 'react-responsive';
import { StarBackground } from "../components/StarBackground";
import { PCNavBar } from "../components/PCNavBar";
import { MobileNavBar } from "../components/MobileNavBar";

export const Home = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    return  (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            
        { /* Background Effects */ }
        <StarBackground />

        { /* NavBar, renders mobile or PC depending on resolution */ }
        {isMobile ? <MobileNavBar /> : <PCNavBar />}

        { /* Main Content */ }

        { /* Footer */ }
    </div>
    );
}
