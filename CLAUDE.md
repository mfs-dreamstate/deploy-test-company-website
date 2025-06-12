# CLAUDE.md

## 🚨 CRITICAL: CUSTOMER SPECIFICATIONS ARE THE ABSOLUTE TRUTH 🚨

This is a website project for Deploy Test Company.

### PRIORITY ORDER:
1. **MVP.md** - This is the TRUTH for features and content
2. **THEME.md** - This is the TRUTH for design and styling  
3. **Customer data below** - This is the TRUTH for all details
4. **Template files** - These are ONLY a starting point

### Customer Data (THIS OVERRIDES EVERYTHING):
```json
{
  "companyInfo": {
    "name": "Deploy Test Company",
    "industry": "Technology",
    "email": "contact@example.com"
  },
  "brandDesign": {
    "fontPreference": "modern",
    "designStyle": "minimal",
    "primaryColor": "#000000"
  },
  "content": {
    "home": {
      "bulletPoints": [],
      "headline": "Deploy Test Company",
      "description": "Welcome to our website"
    },
    "about": {
      "bulletPoints": [],
      "headline": "About Us",
      "description": "Learn more about us"
    },
    "services": {
      "servicesList": [
        {
          "name": "Our Services",
          "description": "We provide quality services",
          "features": []
        }
      ]
    },
    "contact": {
      "showContactForm": true,
      "showMap": false
    }
  },
  "targetAudience": {
    "painPoints": [],
    "goals": [],
    "description": "Our target audience includes anyone interested in our services"
  },
  "features": {
    "seo": true,
    "analytics": true,
    "contactForm": true,
    "newsletter": false,
    "socialMedia": false,
    "blog": false,
    "testimonials": false,
    "gallery": false,
    "ecommerce": false
  }
}
```

### Your Task:
1. **READ MVP.md FIRST** - This contains what the customer ACTUALLY wants
2. **READ THEME.md SECOND** - This contains how it should ACTUALLY look
3. **IGNORE template defaults if they conflict with customer specs**
4. If template says "blue" but customer wants "orange" - USE ORANGE
5. If template has a header but customer doesn't want one - REMOVE IT
6. Customer specifications are SACRED - template is just scaffolding

### Examples of Customer Priority:
- Template has glassmorphism CSS but customer wants minimal? DELETE the glassmorphism
- Template uses Inter font but customer wants Roboto? CHANGE to Roboto
- Template has 3 sections but customer wants 5? CREATE 5 sections
- Template has English but customer provided Danish? USE DANISH

The template saves time on boilerplate. Your job is to TRANSFORM it based on customer needs.