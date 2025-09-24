import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface FooterLink {
  id: string;
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections: FooterSection[];
  onLinkClick?: (link: FooterLink) => void;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  sections,
  onLinkClick,
  className = "",
}) => {
  return (
    <footer className={`bg-muted/30 border-t ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <div className="space-y-3">
                {section.links.map((link) => (
                  <Button
                    key={link.id}
                    variant="ghost"
                    onClick={() => onLinkClick?.(link)}
                    className="p-0 h-auto justify-start text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <Separator className="mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© 2025 Airbnb, Inc.</span>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
              Terms
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
              Sitemap
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-foreground">
              Privacy
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-2">
              🌐 English (US)
            </Button>
            <Button variant="ghost" className="p-2">
              $ USD
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};