import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function HelloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12 text-center">
            {/* Main Hello Section */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hello
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                  Welcome to this beautiful, modern hello page built with Next.js 15, Tailwind CSS, and shadcn/ui components.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Modern Design</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Clean, responsive design that looks great on all devices with beautiful gradients and smooth animations.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">Next.js 15</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built with the latest Next.js 15 features including App Router and enhanced performance optimizations.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">shadcn/ui</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leveraging beautiful, accessible components from shadcn/ui with Tailwind CSS styling.
                  </p>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-12 space-y-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Ready to build something amazing? This hello page is just the beginning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </div>
  )
}