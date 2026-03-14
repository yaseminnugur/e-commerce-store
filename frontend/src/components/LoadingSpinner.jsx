const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
            <div className="relative">
                <div className="w-20 h-20 border-orange-200 border-2 rounded-full"></div>
                <div className="w-20 h-20 border-orange-500 border-t-2 rounded-full animate-spin absolute top-0 left-0"></div>
                <div className="sr-only">Loading</div>
            </div>
        </div>
    );
};

export default LoadingSpinner;