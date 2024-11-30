import IconCloud from "./ui/icon-cloud"; 

const slugs = [
    "typescript",
    "javascript",
    "dart",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "postgresql",
    "python",
    "ruby",
    "go",
    "swift",
    "kotlin",       
    "scala",        
    "php",
];

export function IconCloudDemo() {
    return (
        <div className="relative mx-auto z-50 flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background untouchable">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
