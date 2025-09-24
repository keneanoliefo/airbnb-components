import React, { useState } from "react";
import { SearchHeader } from "@/components/airbnb/SearchHeader";
import { PropertyCard } from "@/components/airbnb/PropertyCard";
import { FilterModal } from "@/components/airbnb/FilterModal";
import { LoginModal } from "@/components/airbnb/LoginModal";
import { PriceBreakdown } from "@/components/airbnb/PriceBreakdown";
import { SocialLoginButton } from "@/components/airbnb/SocialLoginButton";
import { OptionCard } from "@/components/airbnb/OptionCard";
import { NumberInput } from "@/components/airbnb/NumberInput";
import { RangeSlider } from "@/components/airbnb/RangeSlider";
import { FilterSection } from "@/components/airbnb/FilterSection";
import { GridLayout } from "@/components/airbnb/GridLayout";
import { TwoColumnLayout } from "@/components/airbnb/TwoColumnLayout";
import { NavigationTabs } from "@/components/airbnb/NavigationTabs";
import { SearchSuggestions } from "@/components/airbnb/SearchSuggestions";
import { HostProfile } from "@/components/airbnb/HostProfile";
import { AmenityList } from "@/components/airbnb/AmenityList";
import { BookingWidget } from "@/components/airbnb/BookingWidget";
import { GuestSelector } from "@/components/airbnb/GuestSelector";
import { PhotoGallery } from "@/components/airbnb/PhotoGallery";
import { ExploreSection } from "@/components/airbnb/ExploreSection";
import { Footer } from "@/components/airbnb/Footer";
import { DateRangeFilter } from "@/components/airbnb/DateRangeFilter";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import property images
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [numberValue, setNumberValue] = useState(2);
  const [rangeValue, setRangeValue] = useState<[number, number]>([100, 500]);

  // Sample property data
  const properties = [
    {
      id: "1",
      title: "At Mine | Spacious Suite in the Gaslamp Quarter",
      location: "Apartment in ...",
      images: [property1],
      rating: 4.89,
      reviewCount: 1564,
      price: 516,
      originalPrice: 583,
      nights: 3,
      badges: ["Guest favorite"],
      bedType: "1 king bed",
      cancellation: "Free cancellation",
    },
    {
      id: "2", 
      title: "Little Italy Bungalows | Unit 2",
      location: "Apartment in S...",
      images: [property2],
      rating: 4.96,
      reviewCount: 26,
      price: 559,
      nights: 3,
      badges: ["Superhost"],
      bedType: "1 bed",
      cancellation: "Free cancellation",
    },
    {
      id: "3",
      title: "Seahorse Beach Cottage",
      location: "Apartment in San...",
      images: [property3],
      rating: 5.0,
      reviewCount: 14,
      price: 466,
      nights: 3,
      badges: ["Save", "Guest favorite"],
      bedType: "1 sofa bed",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SearchHeader onFiltersClick={() => setShowFilters(true)} />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-12">
          {/* Component Library Showcase */}
          <section className="space-y-6">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-primary">Airbnb Component Library</h1>
              <p className="text-lg text-muted-foreground">
                A comprehensive collection of reusable UI components inspired by Airbnb's design system
              </p>
            </div>

            {/* Property Cards Grid */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Property Cards</h2>
              <GridLayout columns={3}>
                {properties.map((property) => (
                  <PropertyCard 
                    key={property.id} 
                    {...property}
                    onFavoriteClick={(id) => console.log(`Favorited: ${id}`)}
                    onCardClick={(id) => console.log(`Clicked: ${id}`)}
                  />
                ))}
              </GridLayout>
            </div>

            {/* Interactive Components */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Option Cards */}
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Option Cards</h3>
                <div className="grid grid-cols-2 gap-3">
                  <OptionCard label="Allows pets" icon="🐾" />
                  <OptionCard label="Guest favorite" icon="🏆" isSelected />
                  <OptionCard label="Free WiFi" icon="📶" />
                  <OptionCard label="Self check-in" icon="🔑" />
                </div>
              </Card>

              {/* Number Input */}
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Number Input</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Guests</span>
                    <NumberInput 
                      value={numberValue} 
                      onChange={setNumberValue}
                      min={1}
                      max={10}
                    />
                  </div>
                </div>
              </Card>

              {/* Social Login Buttons */}
              <Card className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Social Login</h3>
                <div className="space-y-3">
                  <SocialLoginButton provider="facebook" />
                  <SocialLoginButton provider="google" />
                  <SocialLoginButton provider="apple" />
                  <SocialLoginButton provider="email" />
                </div>
              </Card>
            </div>

            {/* Range Slider */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">Price Range Slider</h3>
              <RangeSlider
                min={0}
                max={1000}
                step={10}
                value={rangeValue}
                onChange={setRangeValue}
              />
            </Card>

            {/* Price Breakdown */}
            <Card className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">Price Breakdown</h3>
              <PriceBreakdown
                basePrice={194.25}
                nights={3}
                discount={{
                  label: "Early bird discount",
                  amount: -67.49,
                }}
                taxes={57.57}
                total={572.82}
              />
            </Card>

            {/* Two Column Layout Example */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Layout Components</h2>
              <TwoColumnLayout
                leftColumn={
                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Main Content Area</h3>
                      <p className="text-muted-foreground">
                        This demonstrates the two-column layout component. The left column
                        takes up 2/3 of the width on large screens and contains the main content.
                      </p>
                    </Card>
                    
                    <GridLayout columns={2} gap="4">
                      {properties.slice(0, 4).map((property) => (
                        <PropertyCard key={property.id} {...property} />
                      ))}
                    </GridLayout>
                  </div>
                }
                rightColumn={
                  <div className="space-y-4">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Sidebar Content</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        This sticky sidebar takes up 1/3 of the width and stays in view while scrolling.
                      </p>
                      <div className="space-y-3">
                        <Badge variant="outline">Filter Example</Badge>
                        <Badge variant="outline">Map View</Badge>
                        <Badge variant="outline">Saved Items</Badge>
                      </div>
                    </Card>
                  </div>
                }
                leftWidth="2/3"
              />
            </div>

            {/* New Navigation Components */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Navigation Tabs</h3>
                <NavigationTabs
                  tabs={[
                    { id: "homes", label: "Homes", icon: "🏠", isActive: true },
                    { id: "experiences", label: "Experiences", icon: "🎨", isNew: true },
                    { id: "services", label: "Services", icon: "🛎️", isNew: true },
                  ]}
                  onTabClick={(tabId) => console.log("Tab clicked:", tabId)}
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Search Suggestions</h3>
                <SearchSuggestions
                  suggestions={[
                    { id: "nearby", title: "Nearby", description: "Find what's around you", icon: "✈️", iconColor: "#059669" },
                    { id: "vegas", title: "Las Vegas, NV", description: "For sights like Stratosphere Tower", icon: "🏢", iconColor: "#dc2626" },
                    { id: "la", title: "Los Angeles, CA", description: "For its bustling nightlife", icon: "🎭", iconColor: "#ea580c" },
                  ]}
                  onSuggestionClick={(suggestion) => console.log("Suggestion clicked:", suggestion)}
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Date Range Filter</h3>
                <DateRangeFilter
                  onFilterSelect={(option) => console.log("Filter selected:", option)}
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Guest Selector</h3>
                <GuestSelector
                  adults={2}
                  children={1}
                  onGuestChange={(guests) => console.log("Guests changed:", guests)}
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Amenity List</h3>
                <AmenityList
                  amenities={[
                    { id: "wifi", name: "Wifi", icon: "wifi" },
                    { id: "parking", name: "Free street parking", icon: "parking" },
                    { id: "ac", name: "Air conditioning", icon: "ac" },
                    { id: "backyard", name: "Backyard", icon: "backyard" },
                  ]}
                />
              </Card>
            </div>

            {/* Host Profile Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Host Components</h2>
              <HostProfile
                name="Suzanna"
                avatar={property1}
                reviewCount={21}
                rating={4.81}
                monthsHosting={4}
                responseRate="100%"
                responseTime="Responds within an hour"
                location="Los Angeles, California"
                isVerified={true}
                onMessageHost={() => console.log("Message host clicked")}
              />
            </div>

            {/* Booking Widget with Two Column Layout */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Booking Components</h2>
              <TwoColumnLayout
                leftColumn={
                  <div className="space-y-6">
                    <Card className="p-6">
                      <h3 className="text-lg font-semibold mb-4">Property Description</h3>
                      <p className="text-muted-foreground mb-4">
                        Welcome to our charming carriage house studio, a cozy and private retreat perfect for 
                        solo travelers or couples. Featuring a comfortable queen-sized bed, a full bathroom with 
                        modern amenities, and a well-equipped kitchenette for light cooking.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🏠</span>
                          <div>
                            <div className="font-medium">Self check-in</div>
                            <div className="text-sm text-muted-foreground">Check yourself in with the lockbox.</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-lg">🌿</span>
                          <div>
                            <div className="font-medium">Peace and quiet</div>
                            <div className="text-sm text-muted-foreground">Guests say this home is in a quiet area.</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <span className="text-lg">📅</span>
                          <div>
                            <div className="font-medium">Free cancellation before Dec 18</div>
                            <div className="text-sm text-muted-foreground">Get a full refund if you change your mind.</div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                }
                rightColumn={
                  <BookingWidget
                    price={223}
                    originalPrice={257}
                    nights={2}
                    rating={4.81}
                    reviewCount={21}
                    onReserve={() => console.log("Reserve clicked")}
                  />
                }
                leftWidth="2/3"
              />
            </div>

            {/* Photo Gallery */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Media Components</h2>
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Photo Gallery</h3>
                <div className="max-h-96 overflow-hidden">
                  <PhotoGallery
                    categories={[
                      { 
                        id: "living", 
                        name: "Living area", 
                        thumbnail: property1,
                        photos: [property1, property2, property3]
                      },
                      { 
                        id: "kitchen", 
                        name: "Full kitchen", 
                        thumbnail: property2,
                        photos: [property2, property1, property3]
                      },
                      { 
                        id: "bedroom", 
                        name: "Bedroom area", 
                        thumbnail: property3,
                        photos: [property3, property1, property2]
                      },
                    ]}
                    onBack={() => console.log("Back clicked")}
                    onShare={() => console.log("Share clicked")}
                    onSave={() => console.log("Save clicked")}
                  />
                </div>
              </Card>
            </div>

            {/* Explore Section */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Discovery Components</h2>
              <Card className="p-6">
                <ExploreSection
                  categories={[
                    {
                      title: "Explore other options in and around Los Angeles",
                      destinations: [
                        { id: "socal", title: "Southern California", subtitle: "Vacation rentals" },
                        { id: "stanton", title: "Stanton", subtitle: "Vacation rentals" },
                        { id: "vegas", title: "Las Vegas", subtitle: "Vacation rentals" },
                        { id: "channel", title: "Channel Islands of California", subtitle: "Vacation rentals" },
                        { id: "sandiego", title: "San Diego", subtitle: "Vacation rentals" },
                        { id: "central", title: "Central California", subtitle: "Vacation rentals" },
                      ]
                    }
                  ]}
                  onDestinationClick={(destination) => console.log("Destination clicked:", destination)}
                />
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setShowFilters(true)}
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Open Filter Modal
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="px-6 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                Open Login Modal
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer
        sections={[
          {
            title: "Support",
            links: [
              { id: "help", label: "Help Center", href: "/help" },
              { id: "safety", label: "Get help with a safety issue", href: "/safety" },
              { id: "aircover", label: "AirCover", href: "/aircover" },
            ]
          },
          {
            title: "Hosting",
            links: [
              { id: "your-home", label: "Airbnb your home", href: "/host" },
              { id: "experience", label: "Airbnb your experience", href: "/experience" },
              { id: "service", label: "Airbnb your service", href: "/service" },
            ]
          },
          {
            title: "Airbnb",
            links: [
              { id: "newsroom", label: "Newsroom", href: "/news" },
              { id: "careers", label: "Careers", href: "/careers" },
              { id: "release", label: "2025 Summer Release", href: "/release" },
            ]
          }
        ]}
        onLinkClick={(link) => console.log("Footer link clicked:", link)}
      />

      {/* Modals */}
      <FilterModal
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        onApplyFilters={(filters) => console.log("Applied filters:", filters)}
      />

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={(phone) => console.log("Login with:", phone)}
      />
    </div>
  );
};

export default Index;