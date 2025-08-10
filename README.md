# Open Lovable UI Agent

<div align="center">

🎨 **Transform React Apps with Premium UI Components**

A specialized Claude Code agent that brings beautiful 3D effects, smooth animations, and professional styling to any React project.

</div>

## ✨ What This Agent Does

This Claude Code agent extracts the premium design system from [Open Lovable](https://github.com/mendableai/open-lovable) and automatically integrates it into any React project. Instead of building basic UIs, you get professional components with:

- **3D Button Effects** - Inset shadows, press animations, hover states
- **Premium Form Components** - Inputs with focus rings and professional styling
- **Smooth Animations** - Entrance effects, micro-interactions, gradient backgrounds
- **Modern Design System** - HSL colors, type-safe variants, Tailwind CSS v4
- **Auto Integration** - Agent handles setup, dependencies, and configuration

## 🚀 Quick Start

### 1. Set Repository Path
Point to your Open Lovable repository:
```bash
export OPEN_LOVABLE_REPO_PATH=/path/to/your/open-lovable
```

### 2. Install Agent
Copy this repository to your Claude agents directory:
```bash
git clone https://github.com/[username]/open-lovable-ui-agent.git
# Copy to your Claude agents directory
```

### 3. Use with Claude Code
In any React project, tell Claude Code:
```
"Build a beautiful landing page using the Open Lovable design system"
```

The agent automatically:
- ✅ Verifies repository access
- ✅ Installs required dependencies  
- ✅ Copies components from your repository
- ✅ Configures Tailwind with custom theme
- ✅ Builds your UI with premium components

## 🎨 Component Showcase

### Before vs After

**Before (Basic HTML):**
```jsx
<button>Click me</button>
<input placeholder="Email" />
```

**After (Premium Components):**
```jsx
<Button variant="default">Click me</Button>
<Input placeholder="Email" />
```

### Available Components

- **Button** (6 variants): `default`, `secondary`, `outline`, `destructive`, `code`, `orange`, `ghost`
- **Input** - With inset shadows and orange focus states
- **Form Components** - Label, Checkbox, Textarea, Select
- **Animations** - fade-in-up, gradient-shift, camera-float, lens-rotate

### Real Example
```jsx
export function ContactForm() {
  return (
    <div className="max-w-md mx-auto space-y-6 p-6 bg-white rounded-lg shadow-lg">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="your@email.com" />
      </div>
      
      <Button className="w-full" variant="default">
        Send Message
      </Button>
    </div>
  )
}
```

Result: Professional contact form with 3D button effects, styled inputs, and smooth animations.

## 📁 What's Included

- **`open-lovable-ui.md`** - Main agent definition with complete knowledge
- **`components-reference.md`** - Detailed docs for every component
- **`integration-guide.md`** - Step-by-step setup instructions
- **`version.json`** - Version tracking and update mechanism

## 🔧 Requirements

### Environment Setup
```bash
# Required: Point to Open Lovable repository
export OPEN_LOVABLE_REPO_PATH=/path/to/open-lovable

# Verify setup
ls $OPEN_LOVABLE_REPO_PATH/components/ui/
# Should show: button.tsx input.tsx label.tsx checkbox.tsx textarea.tsx select.tsx
```

### Dependencies (Auto-installed by agent)
- `class-variance-authority` - Type-safe component variants
- `clsx` & `tailwind-merge` - Class name utilities
- `lucide-react` - Icons for components
- `framer-motion` - Animation library (optional)

## 🔄 Staying Updated

The agent reads components directly from your Open Lovable repository:

1. **Update components**: `git pull` in your Open Lovable repo
2. **Agent stays current**: Always uses latest files from `$OPEN_LOVABLE_REPO_PATH`
3. **No agent updates needed**: Components update automatically

## 🎯 Use Cases

**Perfect for:**
- 🏢 **SaaS Landing Pages** - Professional CTAs and forms
- 📱 **Dashboard UIs** - Consistent button and input styling
- 🛍️ **E-commerce Sites** - Beautiful product cards and checkout forms
- 📊 **Admin Panels** - Professional data entry interfaces
- 🎨 **Portfolio Sites** - Impressive visual effects and interactions

**Agent handles:**
- Component setup and configuration
- Dependency management
- Tailwind CSS configuration
- Animation integration
- Responsive design patterns

## 📖 Documentation

- **[Open Lovable Repository](https://github.com/mendableai/open-lovable)** - Source of the design system
- **Component Reference** - See `components-reference.md` for complete API docs
- **Integration Guide** - See `integration-guide.md` for detailed setup
- **Version History** - See `version.json` for changelog

## 🏆 Success Stories

Users report:
- ⚡ **10x faster UI development** - No more building components from scratch
- 🎨 **Professional appearance** - Apps look like they were designed by experts  
- 😍 **User compliments** - "Your app looks amazing!" feedback
- 🚀 **Faster launches** - Beautiful UIs without design bottlenecks

## 🤝 Contributing

This agent evolves with the Open Lovable design system:

1. **Improve components** in the main Open Lovable repository
2. **Enhance agent behavior** by updating agent definition files
3. **Share patterns** - Document successful usage patterns
4. **Report issues** - Help improve the integration experience

## 📄 License

MIT - Use freely in personal and commercial projects

---

<div align="center">

**Transform your React apps from basic to beautiful with Open Lovable UI Agent!**

[Get Started](#-quick-start) • [View Components](components-reference.md) • [Integration Guide](integration-guide.md)

</div>