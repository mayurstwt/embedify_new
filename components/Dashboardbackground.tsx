import DashboardNavbar from "./Dashboardnavbar";
import EmbedCodeGenerator from "./Embedcodegenerator";
import Navbar from "./navbar";
import FlickeringGrid from "./ui/flickering-grid";




export function DashboardFlickeringGridDemo() {
    return (
        <div className="relative rounded-lg w-full bg-background overflow-hidden">
            <FlickeringGrid
                className="z-0 absolute inset-0 size-full"
                squareSize={4}
                gridGap={30}
                color="#6B7280"
                maxOpacity={0.5}
                flickerChance={0.1}
            />

            <DashboardNavbar />
            <EmbedCodeGenerator/>
        </div>
    );

}
