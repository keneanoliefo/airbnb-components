# Airbnb-Inspired Component Library

A comprehensive collection of reusable UI components inspired by Airbnb's design system, built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🎨 Design System

The component library uses a carefully crafted design system that captures Airbnb's aesthetic:

- **Primary Color**: Airbnb Red (#FF385C)
- **Typography**: Clean, modern font stack
- **Spacing**: Consistent spacing scale
- **Shadows**: Subtle elevation with hover states
- **Borders**: Rounded corners for friendly feel
- **Animations**: Smooth transitions and micro-interactions

## 📦 Component Structure

```
src/components/airbnb/
├── PropertyCard.tsx        # Main property listing cards
├── SearchHeader.tsx        # Top navigation with search
├── FilterModal.tsx         # Comprehensive filters modal
├── FilterSection.tsx       # Reusable filter sections
├── OptionCard.tsx         # Selectable option cards
├── NumberInput.tsx        # Counter input with +/- buttons
├── RangeSlider.tsx        # Price range slider with histogram
├── SocialLoginButton.tsx  # Social media login buttons
├── PriceBreakdown.tsx     # Detailed price breakdown
├── LoginModal.tsx         # Login/signup modal
├── GridLayout.tsx         # Responsive grid layouts
└── TwoColumnLayout.tsx    # Two-column layout with sticky sidebar
```

## 🧩 Component Reference

### PropertyCard

Display property listings with images, ratings, pricing, and interactive elements.

**Props:**
- `id: string` - Unique identifier
- `title: string` - Property title
- `location: string` - Property location
- `images: string[]` - Array of image URLs
- `rating: number` - Star rating (0-5)
- `reviewCount: number` - Number of reviews
- `price: number` - Nightly price
- `originalPrice?: number` - Original price (for discounts)
- `nights?: number` - Number of nights
- `badges?: string[]` - Tags like "Guest favorite"
- `isFavorite?: boolean` - Heart icon state
- `bedType?: string` - Bed configuration
- `cancellation?: string` - Cancellation policy
- `onFavoriteClick?: (id: string) => void`
- `onCardClick?: (id: string) => void`

**Example:**
```tsx
<PropertyCard
  id="1"
  title="Cozy Apartment in Downtown"
  location="San Francisco, CA"
  images={["/images/property.jpg"]}
  rating={4.8}
  reviewCount={124}
  price={150}
  badges={["Guest favorite"]}
  onCardClick={(id) => navigateTo(id)}
/>
```

### SearchHeader

Navigation header with search functionality and filters.

**Props:**
- `onSearch?: (params: SearchParams) => void`
- `onFiltersClick?: () => void`
- `className?: string`

**Features:**
- Location search input
- Date range selection
- Guest count
- Filters button
- Responsive design

### FilterModal

Comprehensive filtering modal with multiple sections.

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `onApplyFilters?: (filters: FilterData) => void`

**Filter Categories:**
- Recommended options
- Property types
- Price range with histogram
- Room and bed counts
- Amenities
- Booking options
- Host languages

### OptionCard

Selectable cards for filters and options.

**Props:**
- `label: string` - Display text
- `icon?: string` - Emoji or icon
- `isSelected?: boolean` - Selection state
- `onClick?: () => void`

**Example:**
```tsx
<OptionCard 
  label="Free WiFi"
  icon="📶"
  isSelected={true}
  onClick={() => toggleOption('wifi')}
/>
```

### NumberInput

Counter input with increment/decrement buttons.

**Props:**
- `value: number` - Current value
- `onChange: (value: number) => void`
- `min?: number` - Minimum value (default: 0)
- `max?: number` - Maximum value (default: 99)

**Example:**
```tsx
<NumberInput
  value={guests}
  onChange={setGuests}
  min={1}
  max={10}
/>
```

### RangeSlider

Price range selector with histogram visualization.

**Props:**
- `min: number` - Minimum value
- `max: number` - Maximum value
- `step?: number` - Step increment
- `value: [number, number]` - Current range
- `onChange: (value: [number, number]) => void`

**Features:**
- Visual histogram showing price distribution
- Dual thumb slider
- Input fields for precise values

### SocialLoginButton

Branded social media login buttons.

**Props:**
- `provider: "facebook" | "google" | "apple" | "email"`
- `onClick?: () => void`

**Supported Providers:**
- Facebook (with brand colors)
- Google (with brand icons)
- Apple (with brand styling)
- Email (generic email option)

### PriceBreakdown

Detailed pricing breakdown component.

**Props:**
- `basePrice: number` - Nightly rate
- `nights: number` - Number of nights
- `discount?: { label: string; amount: number }`
- `taxes: number` - Tax amount
- `total: number` - Final total
- `currency?: string` - Currency code (default: "USD")

### LoginModal

Authentication modal with phone and social login.

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `onLogin?: (phone: string) => void`

**Features:**
- Country code selection
- Phone number input
- Social login options
- Privacy policy links

### Layout Components

#### GridLayout
Responsive grid for property cards.

**Props:**
- `columns?: number` - Number of columns (1-4)
- `gap?: string` - Gap size
- `children: React.ReactNode`

#### TwoColumnLayout
Two-column layout with sticky sidebar.

**Props:**
- `leftColumn: React.ReactNode`
- `rightColumn: React.ReactNode`
- `leftWidth?: "1/2" | "2/3" | "3/4"`

## 🚀 Usage

### Installation

The components use shadcn/ui as a foundation. Make sure you have the following dependencies:

```bash
npm install @radix-ui/react-dialog @radix-ui/react-slider @radix-ui/react-select
npm install lucide-react class-variance-authority clsx tailwind-merge
```

### Import Components

```tsx
import { PropertyCard } from "@/components/airbnb/PropertyCard";
import { SearchHeader } from "@/components/airbnb/SearchHeader";
import { FilterModal } from "@/components/airbnb/FilterModal";
// ... other components
```

### Basic Layout

```tsx
function App() {
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <div>
      <SearchHeader onFiltersClick={() => setShowFilters(true)} />
      
      <main className="container mx-auto">
        <GridLayout columns={3}>
          {properties.map(property => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </GridLayout>
      </main>
      
      <FilterModal 
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
      />
    </div>
  );
}
```

## 🎯 Features

### Interactive Elements
- Hover effects and animations
- Loading states
- Form validation
- Responsive design

### Accessibility
- Keyboard navigation
- ARIA labels
- Focus management
- Screen reader support

### Performance
- Lazy loading support
- Optimized re-renders
- Tree shaking compatible

## 🛠 Customization

### Theming

The components use CSS variables for theming. Customize colors in `src/index.css`:

```css
:root {
  --airbnb-red: 351 83% 58%;
  --airbnb-red-dark: 351 83% 52%;
  /* ... other variables */
}
```

### Component Variants

Many components support variants through the `variant` prop:

```tsx
<Button variant="airbnb">Book Now</Button>
<Button variant="airbnb-outline">Save</Button>
```

### Custom Styling

Override styles using Tailwind classes:

```tsx
<PropertyCard 
  className="hover:scale-105 transition-transform"
  {...props} 
/>
```

## 📱 Responsive Design

All components are mobile-first and responsive:

- **Mobile**: Single column layouts
- **Tablet**: Two-column layouts
- **Desktop**: Multi-column grids with sidebars

## 🔧 Development

### Adding New Components

1. Create component in `src/components/airbnb/`
2. Follow TypeScript interfaces
3. Use Tailwind for styling
4. Add to the showcase in `Index.tsx`

### Design Tokens

Use semantic color tokens from the design system:

```tsx
// ❌ Don't use direct colors
className="text-red-500 bg-white"

// ✅ Use design system tokens  
className="text-primary bg-background"
```

## 📄 License

This component library is built for demonstration purposes and follows Airbnb's design inspiration while maintaining original implementation.
