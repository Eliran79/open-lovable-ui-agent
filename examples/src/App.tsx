import React, { useState } from 'react'
import { LoginBasic } from '../before-after/login-basic'
import { LoginLovable } from '../before-after/login-lovable'
import { Button } from '@/components/ui/button'

function App() {
  const [currentView, setCurrentView] = useState<'basic' | 'lovable'>('basic')

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white rounded-lg shadow-lg p-2 border flex space-x-2">
          <Button
            variant={currentView === 'basic' ? 'default' : 'outline'}
            onClick={() => setCurrentView('basic')}
            size="sm"
          >
            Basic HTML
          </Button>
          <Button
            variant={currentView === 'lovable' ? 'orange' : 'outline'}
            onClick={() => setCurrentView('lovable')}
            size="sm"
          >
            Open Lovable UI
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full h-full">
        {currentView === 'basic' ? <LoginBasic /> : <LoginLovable />}
      </div>

      {/* Info Badge */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 border max-w-xs">
        <h3 className="font-semibold text-sm mb-1">
          {currentView === 'basic' ? '❌ Basic HTML' : '✨ Open Lovable UI'}
        </h3>
        <p className="text-xs text-gray-600">
          {currentView === 'basic' 
            ? 'Standard HTML form - pale and uninspiring'
            : 'Premium components with 3D effects and animations'
          }
        </p>
      </div>
    </div>
  )
}

export default App