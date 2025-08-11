// AFTER: Beautiful Open Lovable UI login page with 3D effects and smooth animations

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export function LoginLovable() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-orange-100 to-white relative overflow-hidden">
      {/* Background decoration with animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 via-orange-200/10 to-orange-600/5 animate-gradient-shift" />
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,_rgb(0,0,0)_1px,_transparent_0)] [background-size:24px_24px]" />
      
      {/* Main login card with entrance animation */}
      <div className="max-w-md w-full mx-4 animate-fade-in-up">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-2xl border border-orange-100/50 [box-shadow:0_20px_25px_-5px_rgba(251,_146,_60,_0.1),_0_10px_10px_-5px_rgba(251,_146,_60,_0.04)]">
          
          {/* Header with staggered animation */}
          <div className="text-center mb-8 animate-fade-in-up animation-delay-200">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg animate-camera-float">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600">
              Sign in to your account to continue
            </p>
          </div>
          
          {/* Form with premium Open Lovable components */}
          <form className="space-y-6 animate-fade-in-up animation-delay-[400ms]">
            {/* Email field with Label and Input components */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="transition-all duration-200 hover:shadow-lg focus:shadow-lg"
              />
            </div>
            
            {/* Password field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="transition-all duration-200 hover:shadow-lg focus:shadow-lg"
              />
            </div>
            
            {/* Remember me checkbox with custom styling */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Checkbox 
                  id="remember" 
                  className="transition-all duration-200"
                />
                <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                  Remember me for 30 days
                </Label>
              </div>
              
              <a 
                href="#" 
                className="text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 hover:underline"
              >
                Forgot password?
              </a>
            </div>
            
            {/* Submit button with Orange variant for CTA */}
            <div className="space-y-4">
              <Button 
                type="submit" 
                variant="orange" 
                size="lg"
                className="w-full font-semibold text-base"
              >
                Sign In to Dashboard
              </Button>
              
              {/* Secondary action with Outline variant */}
              <Button 
                type="button" 
                variant="outline" 
                size="lg"
                className="w-full font-medium text-gray-700"
              >
                Continue with Google
              </Button>
            </div>
          </form>
          
          {/* Footer links with enhanced styling */}
          <div className="mt-8 text-center space-y-4 animate-fade-in-up animation-delay-[600ms]">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            
            <p className="text-gray-600">
              Don't have an account?{' '}
              <a 
                href="#" 
                className="font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200"
              >
                Create free account
              </a>
            </p>
            
            <div className="flex justify-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-gray-700 transition-colors duration-200">
                Help Center
              </a>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-6 text-center animate-fade-in-up animation-delay-[800ms]">
          <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-tl from-orange-300/15 to-orange-500/10 rounded-full blur-3xl animate-pulse animation-delay-[2s]"></div>
    </div>
  )
}

/*
🎨 OPEN LOVABLE UI SHOWCASE FEATURES:

✅ Premium Button Components:
   - Orange variant for primary CTA with 3D shadow effects
   - Outline variant for secondary actions
   - Automatic hover/press animations with scale transforms

✅ Enhanced Input Components:
   - Inset shadows for depth and professionalism
   - Orange focus rings matching design system
   - Smooth transitions on hover and focus states

✅ Complete Form Component System:
   - Label components with proper typography
   - Checkbox with custom styling and 3D effects
   - Consistent spacing and visual hierarchy

✅ Professional Animation System:
   - Staggered entrance animations with fade-in-up
   - Custom delay classes for perfect timing
   - Background gradient shifts and floating effects
   - Smooth micro-interactions throughout

✅ Design System Integration:
   - Orange gradient background matching brand
   - HSL-based color tokens for consistent theming
   - Professional shadow system with multiple layers
   - Modern rounded corners and spacing scale

✅ Advanced Layout Features:
   - Backdrop blur for modern glass effect
   - Decorative gradient orbs with pulse animations
   - Subtle pattern overlay for texture
   - Trust indicators and enhanced footer styling

🚀 TRANSFORMATION ACHIEVED:
This login page demonstrates the complete transformation from basic HTML 
to premium UI using every aspect of the Open Lovable Design System.
Every interactive element uses the premium components with 3D effects,
smooth animations, and professional styling that users will notice and appreciate.
*/