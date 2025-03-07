# Wanderlust Travel Recommendations 🌍✈️

![Wanderlust Banner](https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&h=300&q=80)

## About The Project

Wanderlust is a comprehensive travel recommendation website designed to help users discover ideal destinations based on their preferences. With interactive displays and detailed destination information, Wanderlust provides a personalized travel discovery experience.

### Key Features

- **Personalized Recommendations**: Discover destinations tailored to your interests and preferences
- **Rich Visual Content**: High-quality images showcase each destination's unique appeal
- **Detailed Information**: Comprehensive overviews help you make informed travel decisions
- **User-Friendly Interface**: Intuitive navigation and responsive design across all devices
- **Interactive Elements**: Dynamic content that engages users throughout their journey

## Project Structure

```
wanderlust/
├── index.html           # Home page with destination recommendations
├── about.html           # About Us page with company information
├── contact.html         # Contact form and company details
├── styles.css           # Styling for all pages
├── script.js            # JavaScript functionality
└── README.md            # Project documentation
```

## Pages Overview

### Home Page
The main landing page features:
- Hero section with an engaging call-to-action
- Introduction to the Wanderlust concept
- Three recommendation categories:
  - Beach Getaways (Maldives and Bali)
  - Temple Explorations (Angkor Wat and Kyoto)
  - Country Exploration (Venice and Amalfi Coast)
- Interactive destination cards with modal details

### About Us Page
Learn about the company through:
- Our founding story and mission
- Team member profiles
- Core values and philosophy
- Visually appealing layout with supporting imagery

### Contact Us Page
Reach out through:
- A comprehensive contact form
- Company contact information
- Frequently asked questions section
- Support details

## Technical Implementation

### HTML
- Semantic HTML5 structure
- Responsive meta tags
- Accessible form elements

### CSS
- Custom CSS variables for consistent theming
- Responsive grid layout system
- Flexbox for aligned content
- Smooth transitions and animations
- Mobile-first approach

### JavaScript
- Interactive navigation for mobile devices
- Modal functionality for destination details
- Form validation and submission handling
- Dynamic content loading
- Smooth scrolling functionality

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Basic understanding of HTML, CSS, and JavaScript for modifications

### Installation

1. Clone the repository or download the ZIP file
   ```
   git clone https://github.com/yourusername/wanderlust-travel.git
   ```

2. Navigate to the project directory
   ```
   cd wanderlust-travel
   ```

3. Open the index.html file in your browser or set up a local server
   ```
   # Using Python's built-in server
   python -m http.server
   ```

4. Access the website at `http://localhost:8000`

## Customization

### Changing Destinations
Edit the recommendation cards in `index.html` to feature different destinations:

```html
<div class="recommendation-card">
    <img src="your-image-url" alt="Destination Name">
    <div class="card-content">
        <h4>Destination Name</h4>
        <p>Your description here.</p>
        <button class="view-details" data-id="destination-id">View Details</button>
    </div>
</div>
```

### Modifying Styles
Update the color scheme by changing the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    /* other variables */
}
```

## Project Requirements Fulfilled

- ✅ Website contains Home, About Us, and Contact Us pages
- ✅ Navigation bar with active state indicators
- ✅ Introduction section on the Home page
- ✅ Complete About Us page with team and mission information
- ✅ Contact Us page with email form
- ✅ Beach recommendations with two destinations and images
- ✅ Temple recommendations with two destinations and images
- ✅ Country-based recommendations with two destinations and images

## Future Enhancements

- User accounts for saving favorite destinations
- Trip planning functionality
- Weather API integration
- Currency converter
- Interactive maps
- Booking integration
- User reviews and ratings

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- Images from [Unsplash](https://unsplash.com/)
- Icons by [FontAwesome](https://fontawesome.com/)
- Inspiration from top travel websites

---

Built with ❤️ for travel enthusiasts everywhere