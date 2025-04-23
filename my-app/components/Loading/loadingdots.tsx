export default function LoadingDots() {
    return (
        <div className="w-full flex items-center flex-wrap justify-center gap-10 mt-40 mb-30">
            <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600" />
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600" />
                <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600" />
            </div>
        </div>
    );
}
