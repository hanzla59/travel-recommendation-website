// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation functionality
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle navigation
            nav.classList.toggle('nav-active');
            
            // Burger animation
            burger.classList.toggle('toggle');
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('destination-modal');
    const modalDetails = document.getElementById('modal-details');
    const detailButtons = document.querySelectorAll('.view-details');
    const closeModal = document.querySelector('.close-modal');
    
    if (detailButtons.length > 0) {
        detailButtons.forEach(button => {
            button.addEventListener('click', () => {
                const destinationId = button.getAttribute('data-id');
                const destinationData = getDestinationData(destinationId);
                
                if (destinationData) {
                    populateModal(destinationData);
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
                }
            });
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Explore button scroll functionality
    const exploreBtn = document.getElementById('explore-btn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            const recommendationsSection = document.querySelector('.recommendations');
            recommendationsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Simulate form submission
            const formStatus = document.getElementById('form-status');
            formStatus.textContent = `Thank you, ${name}! Your message has been sent. We'll get back to you soon.`;
            formStatus.classList.remove('hidden');
            formStatus.classList.add('success');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formStatus.classList.add('hidden');
            }, 5000);
        });
    }
    
    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get email input
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            // Show alert (in real app, this would send to a server)
            alert(`Thank you for subscribing with ${email}! You'll receive our next newsletter soon.`);
            
            // Reset form
            newsletterForm.reset();
        });
    }
});

// Function to get destination data based on ID
function getDestinationData(id) {
    const destinations = {
        // Beach destinations
        'maldives': {
            name: 'Maldives',
            type: 'Beach Destination',
            description: `
                <p>The Maldives is a tropical paradise consisting of 26 ring-shaped atolls, which are made up of more than 1,000 coral islands. Known for its stunning blue lagoons, extensive reefs, and pristine white sandy beaches, the Maldives is the ultimate luxury beach destination.</p>
                
                <h4>Why Visit the Maldives?</h4>
                <ul>
                    <li>Experience the famous overwater bungalows and villas</li>
                    <li>Explore colorful coral reefs with abundant marine life</li>
                    <li>Enjoy world-class diving and snorkeling spots</li>
                    <li>Witness bioluminescent beaches that glow at night</li>
                    <li>Indulge in premium spa treatments with ocean views</li>
                </ul>
                
                <h4>Best Time to Visit</h4>
                <p>November to April offers the best weather with little rain, clear skies, and optimal visibility for underwater activities.</p>
                
                <h4>Local Cuisine</h4>
                <p>Don't miss trying Maldivian cuisine, including Garudhiya (fish soup), Mas Huni (shredded smoked fish with coconut), and fresh seafood grilled on the beach.</p>
            `,
            images: [
                'https://images.unsplash.com/photo-1573843981267-be1999ff37cd',
                'https://images.unsplash.com/photo-1514282401047-d79a71a590e8'
            ]
        },
        'bali': {
            name: 'Bali, Indonesia',
            type: 'Beach Destination',
            description: `
                <p>Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beautiful beaches, and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple and offers a perfect blend of relaxation and adventure.</p>
                
                <h4>Why Visit Bali?</h4>
                <ul>
                    <li>Experience the unique blend of spectacular beaches and rich culture</li>
                    <li>Explore the sacred monkey forest sanctuary in Ubud</li>
                    <li>Visit ancient temples with stunning ocean backdrops</li>
                    <li>Take surfing lessons at beginner-friendly beaches</li>
                    <li>Enjoy affordable luxury accommodations and spa treatments</li>
                </ul>
                
                <h4>Best Time to Visit</h4>
                <p>April to October is the dry season with less humidity and more sunshine, ideal for beach activities and exploring.</p>
                
                <h4>Local Experiences</h4>
                <p>Take a cooking class to learn how to prepare Balinese specialties, join a traditional dance performance, or wake up early to hike Mount Batur for a spectacular sunrise view.</p>
            `,
            images: [
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
                'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2'
            ]
        },
        
        // Temple destinations
        'angkor': {
            name: 'Angkor Wat, Cambodia',
            type: 'Temple Destination',
            description: `
                <p>Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world. Originally constructed as a Hindu temple dedicated to the god Vishnu for the Khmer Empire, it was gradually transformed into a Buddhist temple.</p>
                
                <h4>Why Visit Angkor Wat?</h4>
                <ul>
                    <li>Explore the largest religious monument in the world</li>
                    <li>Witness stunning examples of Khmer architecture</li>
                    <li>See intricate bas-reliefs telling stories of Hindu mythology</li>
                    <li>Experience sunrise or sunset over the iconic silhouette</li>
                    <li>Discover the Temple of Ta Prohm where nature and architecture intertwine</li>
                </ul>
                
                <h4>Best Time to Visit</h4>
                <p>November to February offers cooler temperatures and less rainfall, making it more comfortable to explore the vast temple complex.</p>
                
                <h4>Visiting Tips</h4>
                <p>Purchase a multi-day pass to explore at a leisurely pace, hire a knowledgeable guide to understand the historical significance, and bring a flashlight to explore darker corridors and chambers.</p>
            `,
            images: [
                'https://images.unsplash.com/photo-1540503626474-83eed78ad8c9',
                'https://images.unsplash.com/photo-1539130430452-81932e4baf1b'
            ]
        },
        'kyoto': {
            name: 'Kyoto, Japan',
            type: 'Temple Destination',
            description: `
                <p>Kyoto, once the capital of Japan for more than a thousand years, is home to over 1,600 Buddhist temples and 400 Shinto shrines. The city perfectly balances preserving its ancient cultural heritage while embracing modernity.</p>
                
                <h4>Why Visit Kyoto's Temples?</h4>
                <ul>
                    <li>Experience Fushimi Inari Shrine with its thousands of vermillion torii gates</li>
                    <li>Visit Kinkaku-ji (Golden Pavilion), a Zen temple covered in gold leaf</li>
                    <li>Explore Arashiyama's bamboo grove and nearby temples</li>
                    <li>Witness traditional tea ceremonies at historic temple gardens</li>
                    <li>See cherry blossoms or fall foliage around ancient temple grounds</li>
                </ul>
                
                <h4>Best Time to Visit</h4>
                <p>Spring (March to May) for cherry blossoms and autumn (October to November) for colorful fall foliage offer the most picturesque views of temples.</p>
                
                <h4>Cultural Experiences</h4>
                <p>Stay in a temple lodging (shukubo) for a truly immersive experience, participate in Zen meditation sessions, or attend a morning prayer service to experience Japanese spiritual traditions firsthand.</p>
            `,
            images: [
                'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
                'https://images.unsplash.com/photo-1528360983277-13d401cdc186'
            ]
        },
        
        // Italy destinations
        'venice': {
            name: 'Venice, Italy',
            type: 'Italian Destination',
            description: `
                <p>Venice is a unique city built on more than 100 small islands in a lagoon in the Adriatic Sea. Instead of roads, Venice uses canals – including the Grand Canal thoroughfare – lined with Renaissance and Gothic palaces.</p>
                
                <h4>Why Visit Venice?</h4>
                <ul>
                    <li>Experience the romance of a gondola ride through ancient canals</li>
                    <li>Explore St. Mark's Square and Basilica with its Byzantine architecture</li>
                    <li>Visit the historic Doge's Palace and cross the Bridge of Sighs</li>
                    <li>Get lost in the maze of narrow streets and discover hidden gems</li>
                    <li>Experience the famous Venetian Carnival or Biennale art exhibition</li>
                </ul>
                
                <h4>Best Time to Visit</h4>
                <p>April to June or September to October offers pleasant weather and fewer crowds compared to the peak summer season.</p>
                
                <h4>Venetian Specialties</h4>
                <p>Try cicchetti (Venetian tapas) at local bacari (wine bars), sample fresh seafood risotto, and indulge in traditional tiramisu where it was invented.</p>
            `,
            images: [
                'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9',
                'https://images.unsplash.com/photo-1534113414509-0eec2bfb493f'
            ]
        },
        'amalfi': {
            name: 'Amalfi Coast, Italy',
            type: 'Italian Destination',
            description: `
                <p>The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy's Sorrentine Peninsula. It's known for its sheer cliffs, pastel-colored fishing villages, and narrow, winding roads overlooking the Mediterranean Sea.</p>
                
                <h4>Why Visit the Amalfi Coast?</h4>
                <ul>
                    <li>Explore the picturesque towns of Positano, Amalfi, and Ravello</li>
                    <li>Drive along one of the world's most scenic coastal roads</li>
                    <li>Enjoy the Mediterranean beaches and crystal-clear waters</li>
                    <li>Sample authentic Italian cuisine and limoncello made from local lemons</li>
                    <li>Hike the "Path of the Gods" for breathtaking panoramic views</li>
                </ul>
                
                <h4>Best Time to Visit</h4>
                <p>May to June and September to October offer warm weather, fewer crowds, and more affordable accommodations than the peak summer months.</p>
                
                <h4>Local Experiences</h4>
                <p>Take a boat tour to see the coast from the water, visit lemon groves and learn how limoncello is made, or attend a cooking class to master traditional Campanian dishes.</p>
            `,
            images: [
                'https://images.unsplash.com/photo-1612698093934-b02a49146661',
                'https://images.unsplash.com/photo-1633321088355-d0f41cd93162'
            ]
        }
    };
    
    return destinations[id];
}

// Function to populate modal with destination data
function populateModal(destination) {
    let modalContent = `
        <div class="modal-header">
            <h2>${destination.name}</h2>
            <span class="destination-type">${destination.type}</span>
        </div>
        <div class="modal-image-gallery">
    `;
    
    // Add images to gallery
    destination.images.forEach(image => {
        modalContent += `<img src="${image}" alt="${destination.name}">`;
    });
    
    modalContent += `
        </div>
        <div class="modal-description">
            ${destination.description}
        </div>
    `;
    
    document.getElementById('modal-details').innerHTML = modalContent;
}