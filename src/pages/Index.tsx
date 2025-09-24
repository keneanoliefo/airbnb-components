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
import { ReviewCard } from "@/components/airbnb/ReviewCard";
import { ReviewList } from "@/components/airbnb/ReviewList";
import { CompactSearchBar } from "@/components/airbnb/CompactSearchBar";
import { CalendarPicker } from "@/components/airbnb/CalendarPicker";
import { PropertyFeatureList } from "@/components/airbnb/PropertyFeatureList";
import { RatingBreakdown } from "@/components/airbnb/RatingBreakdown";
import { PropertyImageGallery } from "@/components/airbnb/PropertyImageGallery";
import { SearchInputGroup } from "@/components/airbnb/SearchInputGroup";
import { FavoriteBadge } from "@/components/airbnb/FavoriteBadge";
import { CarouselNavigation } from "@/components/airbnb/CarouselNavigation";
import { SectionHeader } from "@/components/airbnb/SectionHeader";
import { Button } from "@/components/ui/button";
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
  const [selectedDates, setSelectedDates] = useState<[Date | null, Date | null]>([null, null]);

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

  // Sample review data
  const sampleReviews = [
    {
      id: "1",
      userName: "Vanessa",
      userAvatar: property1,
      location: "Sedona, Arizona",
      rating: 5,
      date: "3 weeks ago",
      stayDuration: "Stayed a few nights",
      reviewText: "We had an amazing stay at Suzanna's place! Very safe and peaceful neighborhood with easy street parking. The space was exactly as listed and we enjoyed waking up with the sun!",
    },
    {
      id: "2",
      userName: "Christina",
      userAvatar: property2,
      location: "Seattle, Washington",
      rating: 5,
      date: "August 2025",
      stayDuration: "Stayed a few nights",
      reviewText: "This is a lovely, light-filled cottage on a beautiful street, and the bed, pillows, and bedding are very comfy. I feel like it's a great deal for how charming and comfortable it is! You can walk to shops and restaurants easily.",
    },
    {
      id: "3",
      userName: "Matthew",
      userAvatar: property3,
      location: "New York, United States",
      rating: 5,
      date: "July 2025",
      stayDuration: "Stayed a few nights", 
      reviewText: "A lovely, cozy spot in Los Angeles! As described, it's on the small side... but if you are like us and just looking for a quiet place to sleep while you are spending your days out and about, this is perfect! Suzanna was very responsive and helpful.",
    },
  ];

  // Sample property features
  const propertyFeatures = [
    {
      id: "1",
      title: "Self check-in",
      description: "Check yourself in with the lockbox.",
      icon: "selfCheckIn" as const,
    },
    {
      id: "2", 
      title: "Peace and quiet",
      description: "Guests say this home is in a quiet area.",
      icon: "peaceAndQuiet" as const,
    },
    {
      id: "3",
      title: "Free cancellation before Dec 18",
      description: "Get a full refund if you change your mind.",
      icon: "freeCancellation" as const,
    },
  ];

  // Sample rating categories
  const ratingCategories = [
    { id: "1", name: "Cleanliness", rating: 4.8, icon: "cleanliness" as const },
    { id: "2", name: "Accuracy", rating: 5.0, icon: "accuracy" as const },
    { id: "3", name: "Check-in", rating: 5.0, icon: "checkin" as const },
    { id: "4", name: "Communication", rating: 5.0, icon: "communication" as const },
    { id: "5", name: "Location", rating: 5.0, icon: "location" as const },
    { id: "6", name: "Value", rating: 4.9, icon: "value" as const },
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

            {/* Design System Showcase */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Enhanced Button Variants</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="airbnb-primary">Airbnb Primary</Button>
                  <Button variant="airbnb-outline">Airbnb Outline</Button>
                  <Button variant="coral">Coral</Button>
                  <Button variant="coral-light">Coral Light</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                  <Button size="icon">🔍</Button>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Typography Scale</h3>
                <div className="space-y-3">
                  <div className="text-5xl font-bold">Heading 1 - 5XL Bold</div>
                  <div className="text-4xl font-semibold">Heading 2 - 4XL Semibold</div>
                  <div className="text-3xl font-semibold">Heading 3 - 3XL Semibold</div>
                  <div className="text-2xl font-semibold">Heading 4 - 2XL Semibold</div>
                  <div className="text-xl font-medium">Heading 5 - XL Medium</div>
                  <div className="text-lg font-medium">Heading 6 - LG Medium</div>
                  <div className="text-base">Body text - Base</div>
                  <div className="text-sm text-muted-foreground">Small text - SM Muted</div>
                  <div className="text-xs text-muted-foreground">Extra small - XS Muted</div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Color Palette</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Primary Colors</h4>
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-white text-xs">Primary</div>
                      <div className="w-16 h-16 bg-primary-hover rounded-lg flex items-center justify-center text-white text-xs">Hover</div>
                      <div className="w-16 h-16 bg-primary-light rounded-lg flex items-center justify-center text-primary text-xs">Light</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Airbnb Colors</h4>
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-airbnb-coral rounded-lg flex items-center justify-center text-white text-xs">Coral</div>
                      <div className="w-16 h-16 bg-airbnb-coral-dark rounded-lg flex items-center justify-center text-white text-xs">Dark</div>
                      <div className="w-16 h-16 bg-airbnb-coral-light rounded-lg flex items-center justify-center text-airbnb-coral text-xs">Light</div>
                      <div className="w-16 h-16 bg-airbnb-pink rounded-lg flex items-center justify-center text-white text-xs">Pink</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Gray Scale</h4>
                    <div className="flex gap-2">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg border"></div>
                      <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-300 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-400 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-500 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-600 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                      <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Semantic Colors</h4>
                    <div className="flex gap-2">
                      <div className="w-16 h-16 bg-success rounded-lg flex items-center justify-center text-white text-xs">Success</div>
                      <div className="w-16 h-16 bg-warning rounded-lg flex items-center justify-center text-white text-xs">Warning</div>
                      <div className="w-16 h-16 bg-info rounded-lg flex items-center justify-center text-white text-xs">Info</div>
                      <div className="w-16 h-16 bg-destructive rounded-lg flex items-center justify-center text-white text-xs">Error</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Shadows & Effects</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white rounded-lg shadow-card">Card Shadow</div>
                  <div className="p-4 bg-white rounded-lg shadow-card-hover">Hover Shadow</div>
                  <div className="p-4 bg-white rounded-lg shadow-button">Button Shadow</div>
                  <div className="p-4 bg-white rounded-lg shadow-modal">Modal Shadow</div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Utility Classes</h3>
                <div className="space-y-4">
                  <div className="p-4 airbnb-card">Airbnb Card (.airbnb-card)</div>
                  <button className="airbnb-button">Airbnb Button (.airbnb-button)</button>
                  <input className="airbnb-input w-full max-w-sm" placeholder="Airbnb Input (.airbnb-input)" />
                  <div className="text-gradient text-2xl font-bold">Gradient Text (.text-gradient)</div>
                  <div className="p-6 bg-gradient-primary text-white rounded-lg">Primary Gradient Background</div>
                </div>
              </Card>
            </div>

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

            {/* Latest Components from Homepage */}
            <div className="space-y-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Search Input Group</h3>
                <SearchInputGroup
                  destinationValue="San Diego, CA"
                  checkInValue="Dec 19"
                  checkOutValue="Dec 21"
                  guestsValue="2 guests"
                  onDestinationChange={(value) => console.log("Destination:", value)}
                  onCheckInChange={(value) => console.log("Check-in:", value)}
                  onCheckOutChange={(value) => console.log("Check-out:", value)}
                  onGuestsChange={(value) => console.log("Guests:", value)}
                  onSearch={() => console.log("Search clicked")}
                />
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Favorite Badge</h3>
                <div className="flex gap-4">
                  <FavoriteBadge text="Guest favorite" />
                  <FavoriteBadge text="Superhost" />
                  <FavoriteBadge text="New" />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Carousel Navigation</h3>
                <div className="flex justify-center">
                  <CarouselNavigation
                    onPreviousClick={() => console.log("Previous")}
                    onNextClick={() => console.log("Next")}
                  />
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Section Header with Navigation</h3>
                <SectionHeader
                  title="Popular homes in Los Angeles"
                  onPreviousClick={() => console.log("Previous section")}
                  onNextClick={() => console.log("Next section")}
                />
              </Card>
            </div>

            {/* Previous Navigation Components */}
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