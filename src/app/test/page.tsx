export default function TestPage() {
  return (
    <div className="min-h-screen bg-red-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Simple Test - Red Background
        </h1>
        
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            If you see this styled, Tailwind is working
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-red-100 p-4 rounded border border-red-300">
              <h3 className="text-lg font-medium text-red-800">Red Box</h3>
              <p className="text-red-600">This should be red themed</p>
            </div>
            
            <div className="bg-green-100 p-4 rounded border border-green-300">
              <h3 className="text-lg font-medium text-green-800">Green Box</h3>
              <p className="text-green-600">This should be green themed</p>
            </div>
            
            <div className="bg-blue-100 p-4 rounded border border-blue-300">
              <h3 className="text-lg font-medium text-blue-800">Blue Box</h3>
              <p className="text-blue-600">This should be blue themed</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <p className="text-gray-700">
              If you see this page with colors and styling, then Tailwind is working.
              If you see plain text without styling, then Tailwind CSS is not loading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
