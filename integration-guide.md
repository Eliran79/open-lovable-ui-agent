# Open Lovable UI Integration Guide

## Step-by-Step Setup for Any React Project

This guide shows how to integrate the Open Lovable Design System into any existing or new React project.

## 📍 Prerequisites

### Set Environment Variable
Before starting, set the path to your Open Lovable repository:

**On macOS/Linux:**
```bash
export OPEN_LOVABLE_REPO_PATH=/path/to/your/open-lovable
```

**On Windows:**
```cmd
set OPEN_LOVABLE_REPO_PATH=C:\path\to\your\open-lovable
```

**Or add to your shell profile (recommended):**
```bash
# Add to ~/.bashrc, ~/.zshrc, or ~/.profile
echo 'export OPEN_LOVABLE_REPO_PATH=/path/to/your/open-lovable' >> ~/.zshrc
```

### Verify Repository Access
Ensure the path exists and contains the Open Lovable repository:
```bash
ls $OPEN_LOVABLE_REPO_PATH/components/ui/
# Should show: button.tsx input.tsx label.tsx checkbox.tsx textarea.tsx select.tsx
```

## 🚀 Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install class-variance-authority clsx tailwind-merge lucide-react framer-motion
```

### Step 2: Copy Core Utilities
Copy from repository to create `lib/utils.ts`:
```bash
mkdir -p lib
cp $OPEN_LOVABLE_REPO_PATH/lib/utils.ts lib/utils.ts
```

Or create manually:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 3: Update Tailwind Config
Copy from repository:
```bash
cp $OPEN_LOVABLE_REPO_PATH/tailwind.config.ts tailwind.config.ts
```

Or replace your `tailwind.config.js/ts` manually with:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```

### Step 4: Add CSS Variables and Animations
Copy from repository:
```bash
cp $OPEN_LOVABLE_REPO_PATH/app/globals.css app/globals.css
```

Or add manually to your global CSS file (usually `app/globals.css` or `src/index.css`):

```css
@import "tailwindcss";

/* Animation Keyframes */
@keyframes fadeIn {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pushUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInSmooth {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes camera-float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-10px) rotate(-5deg);
  }
  75% {
    transform: translateY(5px) rotate(5deg);
  }
}

@keyframes lens-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Theme Configuration for Tailwind CSS v4 */
@theme {
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(240 10% 3.9%);
  --color-card: hsl(0 0% 100%);
  --color-card-foreground: hsl(240 10% 3.9%);
  --color-popover: hsl(0 0% 100%);
  --color-popover-foreground: hsl(240 10% 3.9%);
  --color-primary: hsl(25 95% 53%);
  --color-primary-foreground: hsl(0 0% 98%);
  --color-secondary: hsl(240 4.8% 95.9%);
  --color-secondary-foreground: hsl(240 5.9% 10%);
  --color-muted: hsl(240 4.8% 95.9%);
  --color-muted-foreground: hsl(240 3.8% 46.1%);
  --color-accent: hsl(240 4.8% 95.9%);
  --color-accent-foreground: hsl(240 5.9% 10%);
  --color-destructive: hsl(0 84.2% 60.2%);
  --color-destructive-foreground: hsl(0 0% 98%);
  --color-border: hsl(240 5.9% 90%);
  --color-input: hsl(240 5.9% 90%);
  --color-ring: hsl(25 95% 53%);
  
  --radius: 0.5rem;
}

@layer utilities {
  /* Hide scrollbar for Chrome, Safari and Opera */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  
  /* Radial gradient utilities */
  .bg-gradient-radial {
    background-image: radial-gradient(circle, var(--tw-gradient-stops));
  }
  
  /* Conic gradient utilities */
  .bg-gradient-conic {
    background-image: conic-gradient(var(--tw-gradient-stops));
  }
  
  /* Custom Animation Classes */
  .animate-gradient-shift {
    background-size: 400% 400%;
    animation: gradient-shift 8s ease infinite;
  }
  
  .animate-camera-float {
    animation: camera-float 3s ease-in-out infinite;
  }
  
  .animate-lens-rotate {
    animation: lens-rotate 2s linear infinite;
  }
  
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  
  .animate-push-up {
    animation: pushUp 0.4s ease-out forwards;
  }
  
  .animate-fade-in-smooth {
    opacity: 0;
    animation: fadeInSmooth 0.6s ease-out forwards;
  }
  
  .animate-fade-in-up {
    opacity: 0;
    animation: fadeInUp 0.5s ease-out forwards;
  }
}

@layer base {
  * {
    border-color: theme('colors.border');
  }
  body {
    background-color: theme('colors.background');
    color: theme('colors.foreground');
  }
}
```

### Step 5: Copy Components
Copy components from the repository:
```bash
# Create directory
mkdir -p components/ui

# Copy essential components
cp $OPEN_LOVABLE_REPO_PATH/components/ui/button.tsx components/ui/button.tsx
cp $OPEN_LOVABLE_REPO_PATH/components/ui/input.tsx components/ui/input.tsx
cp $OPEN_LOVABLE_REPO_PATH/components/ui/label.tsx components/ui/label.tsx

# Copy additional components as needed
cp $OPEN_LOVABLE_REPO_PATH/components/ui/checkbox.tsx components/ui/checkbox.tsx
cp $OPEN_LOVABLE_REPO_PATH/components/ui/textarea.tsx components/ui/textarea.tsx
cp $OPEN_LOVABLE_REPO_PATH/components/ui/select.tsx components/ui/select.tsx
```

## 📁 Component Files Reference

### Essential Components 

#### Button Component
The source code is at `$OPEN_LOVABLE_REPO_PATH/components/ui/button.tsx`:
```typescript
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-zinc-900 text-white hover:bg-zinc-800 [box-shadow:inset_0px_-2px_0px_0px_#18181b,_0px_1px_6px_0px_rgba(24,_24,_27,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#18181b,_0px_1px_3px_0px_rgba(24,_24,_27,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#18181b,_0px_1px_2px_0px_rgba(24,_24,_27,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100",
        secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 [box-shadow:inset_0px_-2px_0px_0px_#d4d4d8,_0px_1px_6px_0px_rgba(161,_161,_170,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#d4d4d8,_0px_1px_3px_0px_rgba(161,_161,_170,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#d4d4d8,_0px_1px_2px_0px_rgba(161,_161,_170,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100",
        outline: "border border-zinc-300 bg-transparent hover:bg-zinc-50 text-zinc-900 [box-shadow:inset_0px_-2px_0px_0px_#e4e4e7,_0px_1px_6px_0px_rgba(228,_228,_231,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#e4e4e7,_0px_1px_3px_0px_rgba(228,_228,_231,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#e4e4e7,_0px_1px_2px_0px_rgba(228,_228,_231,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100",
        destructive: "bg-red-500 text-white hover:bg-red-600 [box-shadow:inset_0px_-2px_0px_0px_#dc2626,_0px_1px_6px_0px_rgba(239,_68,_68,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#dc2626,_0px_1px_3px_0px_rgba(239,_68,_68,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#dc2626,_0px_1px_2px_0px_rgba(239,_68,_68,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100",
        code: "bg-[#36322F] text-white hover:bg-[#4a4542] [box-shadow:inset_0px_-2px_0px_0px_#171310,_0px_1px_6px_0px_rgba(58,_33,_8,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#171310,_0px_1px_3px_0px_rgba(58,_33,_8,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#171310,_0px_1px_2px_0px_rgba(58,_33,_8,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100",
        orange: "bg-orange-500 text-white hover:bg-orange-600 [box-shadow:inset_0px_-2px_0px_0px_#c2410c,_0px_1px_6px_0px_rgba(234,_88,_12,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#c2410c,_0px_1px_3px_0px_rgba(234,_88,_12,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#c2410c,_0px_1px_2px_0px_rgba(234,_88,_12,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-sm",
        lg: "h-12 px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "button" : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

#### Input Component
Create `components/ui/input.tsx`:
```typescript
import * as React from "react"

import { cn } from "@/lib/utils"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-[10px] border border-zinc-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [box-shadow:inset_0px_-2px_0px_0px_#e4e4e7,_0px_1px_6px_0px_rgba(228,_228,_231,_30%)] hover:[box-shadow:inset_0px_-2px_0px_0px_#d4d4d8,_0px_1px_6px_0px_rgba(212,_212,_216,_40%)] focus-visible:[box-shadow:inset_0px_-2px_0px_0px_#f97316,_0px_1px_6px_0px_rgba(249,_115,_22,_30%)] transition-all duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

### Additional Components

All components are available in the repository at:
- `$OPEN_LOVABLE_REPO_PATH/components/ui/label.tsx` - Form labels
- `$OPEN_LOVABLE_REPO_PATH/components/ui/checkbox.tsx` - Custom styled checkboxes  
- `$OPEN_LOVABLE_REPO_PATH/components/ui/textarea.tsx` - Text areas
- `$OPEN_LOVABLE_REPO_PATH/components/ui/select.tsx` - Select dropdowns

Copy as needed using the `cp` commands shown above.

## 🔧 Usage Verification

After setup, test with this simple component:

```jsx
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function TestComponent() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold animate-fade-in-up">
        Open Lovable UI Test
      </h1>
      
      <div className="space-y-4 animate-fade-in-up animation-delay-200">
        <Input placeholder="Test input with 3D effects" />
        
        <div className="flex gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="orange">Orange</Button>
        </div>
      </div>
    </div>
  )
}
```

If you see:
✅ Buttons with 3D shadow effects and press animations  
✅ Input with inset shadows and orange focus ring  
✅ Smooth animations and transitions  
✅ Professional styling and polish  

Then the integration was successful!

## 🔄 Automated Setup Script

For faster setup, you can use this bash script:

```bash
#!/bin/bash
# setup-open-lovable-ui.sh

echo "Setting up Open Lovable UI Design System..."

# Check if OPEN_LOVABLE_REPO_PATH is set
if [ -z "$OPEN_LOVABLE_REPO_PATH" ]; then
    echo "❌ Error: OPEN_LOVABLE_REPO_PATH environment variable not set"
    echo "Please set it with: export OPEN_LOVABLE_REPO_PATH=/path/to/open-lovable"
    exit 1
fi

# Verify repository exists
if [ ! -d "$OPEN_LOVABLE_REPO_PATH" ]; then
    echo "❌ Error: Repository not found at $OPEN_LOVABLE_REPO_PATH"
    exit 1
fi

echo "✅ Repository found at $OPEN_LOVABLE_REPO_PATH"

# Install dependencies
npm install class-variance-authority clsx tailwind-merge lucide-react framer-motion

# Create directories
mkdir -p lib
mkdir -p components/ui

# Copy core files
cp $OPEN_LOVABLE_REPO_PATH/lib/utils.ts lib/utils.ts
cp $OPEN_LOVABLE_REPO_PATH/tailwind.config.ts tailwind.config.ts
cp $OPEN_LOVABLE_REPO_PATH/app/globals.css app/globals.css

# Copy essential components
cp $OPEN_LOVABLE_REPO_PATH/components/ui/button.tsx components/ui/button.tsx
cp $OPEN_LOVABLE_REPO_PATH/components/ui/input.tsx components/ui/input.tsx
cp $OPEN_LOVABLE_REPO_PATH/components/ui/label.tsx components/ui/label.tsx

echo "✅ Open Lovable UI Design System setup complete!"
echo "🎨 Available components: Button, Input, Label"
echo "📋 To add more components:"
echo "   cp \$OPEN_LOVABLE_REPO_PATH/components/ui/checkbox.tsx components/ui/checkbox.tsx"
echo "   cp \$OPEN_LOVABLE_REPO_PATH/components/ui/textarea.tsx components/ui/textarea.tsx"
echo "   cp \$OPEN_LOVABLE_REPO_PATH/components/ui/select.tsx components/ui/select.tsx"
```

## 🚨 Troubleshooting

### Common Issues

**Issue**: Components don't have 3D effects
- **Fix**: Ensure CSS variables are properly loaded in globals.css
- **Check**: Verify Tailwind config includes the custom theme

**Issue**: Animations not working
- **Fix**: Copy all keyframe animations from the CSS section above
- **Check**: Make sure animation classes are in the utilities layer

**Issue**: `cn` function not found
- **Fix**: Ensure `lib/utils.ts` exists and is properly imported
- **Check**: Verify clsx and tailwind-merge are installed

**Issue**: TypeScript errors with component props
- **Fix**: Install `@types/react` and ensure React version compatibility
- **Check**: Verify class-variance-authority is installed

### Path Alias Setup

If using `@/` imports, ensure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

For Next.js projects, this is usually configured automatically.

## 🎯 Integration Complete!

Once setup is complete, you'll have:
- ✅ Premium UI components with 3D effects
- ✅ Smooth animations and micro-interactions  
- ✅ Professional design system ready for any project
- ✅ Type-safe component variants
- ✅ Modern Tailwind CSS v4 configuration

Your project is now ready to build beautiful applications with the Open Lovable Design System!