# Open Lovable UI Components Reference

## Complete Component Library Documentation

This reference provides every component available in the Open Lovable Design System with exact code snippets, props, and usage examples.

## 🎨 Button Component (Primary Component)

### Import
```jsx
import { Button, buttonVariants } from '@/components/ui/button'
```

### All Variants with Visual Description
```jsx
// Default - Black with 3D shadow effect and press animation
<Button variant="default">Primary Action</Button>

// Secondary - Light gray with 3D shadow effect
<Button variant="secondary">Secondary Action</Button>

// Outline - Border style with 3D shadow effect  
<Button variant="outline">Outlined Button</Button>

// Destructive - Red with 3D shadow effect for dangerous actions
<Button variant="destructive">Delete Item</Button>

// Code - Dark brown theme perfect for development/tech contexts
<Button variant="code">Run Code</Button>

// Orange - Bright orange for call-to-action buttons
<Button variant="orange">Get Started</Button>

// Ghost - Minimal with subtle hover effect
<Button variant="ghost">Subtle Action</Button>
```

### Sizes
```jsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

### Complete Button Props
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'destructive' | 'code' | 'orange' | 'ghost'
  size?: 'default' | 'sm' | 'lg'
  asChild?: boolean
  className?: string
}
```

### Animation Effects
The buttons automatically include:
- **3D Shadow Effects**: Inset shadows for depth
- **Press Animations**: `translate-y` and `scale` transforms on hover/active
- **Smooth Transitions**: 200ms duration for all states
- **Disabled States**: Proper opacity and cursor handling

---

## 📝 Input Component

### Import
```jsx
import { Input } from '@/components/ui/input'
```

### Basic Usage
```jsx
<Input placeholder="Enter your email" />
<Input type="password" placeholder="Password" />
<Input type="email" placeholder="email@example.com" />
<Input disabled placeholder="Disabled input" />
```

### Complete Input Props
```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: string
}
```

### Styling Features
- **Inset Shadow**: Creates depth with inner shadows
- **Focus States**: Orange ring and enhanced shadow on focus
- **Hover Effects**: Subtle shadow enhancement
- **Rounded Corners**: 10px border radius for modern look
- **Smooth Transitions**: 200ms duration for all state changes

---

## 🏷️ Label Component

### Import
```jsx
import { Label } from '@/components/ui/label'
```

### Usage
```jsx
<Label htmlFor="email">Email Address</Label>
<Label className="text-red-500">Required Field</Label>
```

### Complete Label Props
```typescript
interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  className?: string
}
```

---

## ✅ Checkbox Component

### Import
```jsx
import { Checkbox } from '@/components/ui/checkbox'
```

### Usage Examples
```jsx
// Basic checkbox
<Checkbox />

// With label
<Checkbox label="I agree to the terms" />

// Controlled
<Checkbox 
  defaultChecked={true}
  onChange={(checked) => console.log(checked)}
/>

// Disabled
<Checkbox label="Disabled option" disabled />
```

### Complete Checkbox Props
```typescript
interface CheckboxProps {
  label?: string
  defaultChecked?: boolean
  disabled?: boolean
  className?: string
  onChange?: (checked: boolean) => void
}
```

### Visual Features
- **3D Effect**: Inset shadows matching the design system
- **Orange Check**: Uses orange-500 when checked with check icon
- **Hover States**: Enhanced shadows on hover
- **Custom Check Icon**: Uses Lucide React Check icon

---

## 📋 Select Component

### Import
```jsx
import { Select } from '@/components/ui/select'
```

### Usage
```jsx
<Select>
  <option value="">Choose an option</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</Select>

<Select disabled>
  <option value="">Disabled select</option>
</Select>
```

### Complete Select Props
```typescript
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  children: React.ReactNode
}
```

---

## 📄 Textarea Component

### Import
```jsx
import { Textarea } from '@/components/ui/textarea'
```

### Usage
```jsx
<Textarea placeholder="Enter your message..." />
<Textarea rows={4} placeholder="Larger textarea" />
<Textarea disabled placeholder="Disabled textarea" />
```

### Complete Textarea Props
```typescript
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}
```

### Styling Features
- **Minimum Height**: 80px default minimum height
- **Consistent Styling**: Matches Input component design
- **Auto Resize**: Respects rows attribute
- **Same Shadow System**: Inset shadows and focus states

---

## 🛠️ Utility Functions

### CN Function (Required)
```jsx
import { cn } from '@/lib/utils'

// Merges class names intelligently
const className = cn(
  'base-classes',
  condition && 'conditional-classes',
  props.className
)
```

### Utils Implementation
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 🎬 Animation Classes

### Available Animations
```css
/* Entrance Animations */
.animate-fade-in-up        /* Fade in with upward motion */
.animate-fade-in-smooth    /* Simple fade in */
.animate-push-up           /* Push up effect */

/* Background Animations */
.animate-gradient-shift    /* Moving gradient background */

/* Interactive Animations */
.animate-camera-float      /* Floating camera effect */
.animate-lens-rotate       /* Rotating lens effect */

/* Delay Classes */
.animation-delay-200       /* 200ms delay */
.animation-delay-[400ms]   /* Custom delay */
```

### Usage Examples
```jsx
// Hero section with staggered animations
<div className="text-center space-y-8">
  <h1 className="text-5xl font-bold animate-fade-in-up">
    Welcome to Our App
  </h1>
  <p className="text-xl animate-fade-in-up animation-delay-200">
    Build something amazing
  </p>
  <Button className="animate-fade-in-up animation-delay-[400ms]" variant="default">
    Get Started
  </Button>
</div>
```

---

## 🎨 Design Tokens

### Colors (HSL-based)
```css
--color-primary: hsl(25 95% 53%)           /* Orange */
--color-background: hsl(0 0% 100%)         /* White */
--color-foreground: hsl(240 10% 3.9%)     /* Dark Gray */
--color-muted: hsl(240 4.8% 95.9%)        /* Light Gray */
--color-border: hsl(240 5.9% 90%)         /* Border Gray */
--color-ring: hsl(25 95% 53%)             /* Focus Orange */
```

### Border Radius
```css
--radius: 0.5rem                          /* 8px base radius */
```

### Shadow System
```css
/* Light 3D effect */
box-shadow: inset 0px -2px 0px 0px #e4e4e7, 0px 1px 6px 0px rgba(228, 228, 231, 30%)

/* Enhanced hover */  
box-shadow: inset 0px -2px 0px 0px #d4d4d8, 0px 1px 6px 0px rgba(212, 212, 216, 40%)

/* Focus state */
box-shadow: inset 0px -2px 0px 0px #f97316, 0px 1px 6px 0px rgba(249, 115, 22, 30%)
```

---

## 📱 Component Composition Examples

### Form Layout
```jsx
export function ContactForm() {
  return (
    <div className="max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-lg">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Your name" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" placeholder="Your message..." />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter" className="text-sm">
          Subscribe to newsletter
        </Label>
      </div>
      
      <Button className="w-full" variant="default">
        Send Message
      </Button>
    </div>
  )
}
```

### Button Group
```jsx
<div className="flex gap-3">
  <Button variant="default">Primary</Button>
  <Button variant="outline">Secondary</Button>
  <Button variant="ghost">Tertiary</Button>
</div>
```

### Hero Section
```jsx
<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-white">
  <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
    <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up">
      Build Beautiful Apps
    </h1>
    <p className="text-xl text-gray-600 animate-fade-in-up animation-delay-200">
      Professional UI components with 3D effects
    </p>
    <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-[400ms]">
      <Button variant="default" size="lg">Get Started</Button>
      <Button variant="outline" size="lg">Learn More</Button>
    </div>
  </div>
</section>
```

---

## 📦 Required Dependencies

### Core Dependencies
```json
{
  "class-variance-authority": "^0.7.1",
  "clsx": "^2.1.1", 
  "tailwind-merge": "^3.3.1",
  "lucide-react": "^0.532.0",
  "framer-motion": "^12.23.12"
}
```

### Tailwind CSS Configuration Required
The components depend on custom Tailwind configuration for colors, animations, and utilities. See `integration-guide.md` for complete setup instructions.

---

## 💡 Best Practices

### Do's
✅ Always use the component variants instead of creating custom styles  
✅ Combine components following the composition patterns  
✅ Use the animation classes for smooth interactions  
✅ Leverage the HSL color system for easy theming  
✅ Apply consistent spacing with Tailwind utilities  

### Don'ts
❌ Don't create custom button styles - use Button variants  
❌ Don't override the 3D shadow effects - they're carefully tuned  
❌ Don't use basic HTML elements when components exist  
❌ Don't ignore the animation system - it adds professional polish  
❌ Don't mix different design systems - stick to this one for consistency  

---

This reference provides everything needed to build beautiful, consistent UIs with the Open Lovable Design System!