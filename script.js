document.addEventListener('DOMContentLoaded', function () {
    
    const wardrobeData = [
        { name: 'Crewneck T-Shirts (x5)', category: 'Tops', colors: 'White, Black, Charcoal, Olive, Beige' },
        { name: 'Knitted Polo Shirts (x3)', category: 'Tops', colors: 'Black, Cream, Sage Green' },
        { name: 'Cuban Collar Shirts (x3)', category: 'Tops', colors: 'Solids or subtle prints' },
        { name: 'Henley Shirts (x2)', category: 'Tops', colors: 'Charcoal, Cream' },
        { name: 'Knitwear (x2)', category: 'Tops', colors: 'Sweater & Vest' },
        { name: 'Cargo Pants (x3)', category: 'Bottoms', colors: 'Black, Olive, Stone' },
        { name: 'Wide-Leg Trousers (x3)', category: 'Bottoms', colors: 'Beige, Black, Charcoal' },
        { name: 'Parachute/Tech Pants (x2)', category: 'Bottoms', colors: 'Black, Dark Grey' },
        { name: 'Relaxed-Fit Denim (x2)', category: 'Bottoms', colors: 'Light-wash & Black' },
        { name: 'Tailored Shorts (x2)', category: 'Bottoms', colors: 'Black, Beige' },
        { name: 'Bomber Jacket (x1)', category: 'Outerwear', colors: 'Black or Olive' },
        { name: 'Cropped Hoodie (x1)', category: 'Outerwear', colors: 'Charcoal or Black' },
        { name: 'Denim Jacket (x1)', category: 'Outerwear', colors: 'Washed Blue' },
        { name: 'Overshirt / Shacket (x1)', category: 'Outerwear', colors: 'Mocha or Stone' },
        { name: 'White Leather Sneakers', category: 'Footwear', colors: 'White' },
        { name: 'Chunky Trainers', category: 'Footwear', colors: 'Neutral tones' },
        { name: 'Loafers', category: 'Footwear', colors: 'Black or Brown' },
        { name: 'Slides', category: 'Footwear', colors: 'Black or Beige' },
        { name: 'Silver Jewelry', category: 'Accessories', colors: 'Chain & Rings' },
        { name: 'Watch', category: 'Accessories', colors: 'Minimalist style' },
        { name: 'Bags', category: 'Accessories', colors: 'Tote & Crossbody' },
        { name: 'Headwear', category: 'Accessories', colors: 'Baseball Caps' },
    ];

    const lookbookData = [
        { name: 'The Classic', occasion: 'College', items: 'Slim white tee + Light-wash denim + White sneakers' },
        { name: 'Soft Tones', occasion: 'College', items: 'Slim beige tee + Olive cargos + Chunky trainers' },
        { name: 'Monochrome', occasion: 'College', items: 'Slim black tee + Black cargos + Black slides' },
        { name: 'Layered Comfort', occasion: 'College', items: 'Cropped hoodie + White tee + Tech pants + Chunky trainers' },
        { name: 'Smart Casual', occasion: 'College', items: 'Knit polo + Wide-leg chinos + White sneakers' },
        { name: 'Easy Does It', occasion: 'College', items: 'Charcoal Henley + Light-wash denim + Slides' },
        { name: 'The Charmer', occasion: 'Dates', items: 'Black knit polo + Pleated trousers + Loafers + Watch' },
        { name: 'Summer Evening', occasion: 'Dates', items: 'White Cuban collar shirt + Pleated trousers + Loafers' },
        { name: 'Minimalist Edge', occasion: 'Dates', items: 'Slim black tee + Wide-leg chinos + White sneakers' },
        { name: 'Knit Vest Layer', occasion: 'Dates', items: 'White tee + Knit vest + Pleated trousers + Loafers' },
        { name: 'Smart Texture', occasion: 'Dates', items: 'Charcoal sweater + Light-wash denim + White sneakers' },
        { name: 'Streetwear Statement', occasion: 'Travel', items: 'Bomber jacket + White tee + Black cargos + Chunky trainers' },
        { name: 'Clean Lines', occasion: 'Travel', items: 'Black Cuban collar shirt + Parachute pants + White sneakers' },
        { name: 'Old Money Twist', occasion: 'Travel', items: 'Overshirt + White tee + Pleated trousers + Loafers' },
        { name: 'Travel Day', occasion: 'Travel', items: 'Cropped hoodie + Tech pants + Chunky trainers + Cap' },
        { name: 'Denim on Denim', occasion: 'Travel', items: 'Denim jacket + White tee + Black jeans + White sneakers' },
        { name: 'Architectural', occasion: 'Travel', items: 'Charcoal sweater + Parachute pants + Chunky trainers' },
        { name: 'The Uniform', occasion: 'Errands', items: 'Olive tee + Tailored shorts + White sneakers' },
        { name: 'All-Weather', occasion: 'Errands', items: 'Denim jacket + Black tee + Olive cargos + Chunky trainers' },
        { name: 'Simple & Clean', occasion: 'Errands', items: 'White tee + Beige shorts + Slides + Cap' },
        { name: 'Relaxed Henley', occasion: 'Errands', items: 'Cream Henley + Tech pants + Slides' },
        { name: 'Pre-Workout', occasion: 'Gym', items: 'Muscle-fit tee + Tech pants + Chunky trainers' },
        { name: 'Post-Workout Layer', occasion: 'Gym', items: 'Cropped hoodie over gym tee + Tech pants/shorts' },
        { name: 'Coffee After Cardio', occasion: 'Gym', items: 'Gym tee + Olive cargos + Chunky trainers' },
        { name: 'Sunday Comfort', occasion: 'Gym', items: 'Slim-fit tee + Parachute pants + Slides' },
    ];

    const wardrobeGrid = document.getElementById('wardrobe-grid');
    const wardrobeFilters = document.getElementById('wardrobe-filters');
    const lookbookGrid = document.getElementById('lookbook-grid');
    const lookbookFilters = document.getElementById('lookbook-filters');
    const generateOutfitBtn = document.getElementById('generate-outfit-btn');
    const aiPromptInput = document.getElementById('ai-prompt-input');
    const aiOutfitSuggestion = document.getElementById('ai-outfit-suggestion');

    function renderWardrobe(filter = 'all') {
        wardrobeGrid.innerHTML = '';
        const filteredData = filter === 'all' ? wardrobeData : wardrobeData.filter(item => item.category === filter);
        filteredData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card bg-white p-4 rounded-lg shadow-sm text-center';
            card.innerHTML = `
                <h4 class="font-bold text-gray-800">${item.name}</h4>
                <p class="text-sm text-gray-500">${item.colors}</p>
            `;
            wardrobeGrid.appendChild(card);
        });
    }

    function renderLookbook(filter = 'all') {
        lookbookGrid.innerHTML = '';
        const filteredData = filter === 'all' ? lookbookData : lookbookData.filter(item => item.occasion === filter);
        filteredData.forEach(outfit => {
            const card = document.createElement('div');
            card.className = 'card bg-white p-6 rounded-lg shadow-sm';
            card.innerHTML = `
                <span class="text-xs font-semibold uppercase text-[#A37E63]">${outfit.occasion}</span>
                <h4 class="font-bold text-lg text-gray-800 mt-1 mb-2">${outfit.name}</h4>
                <p class="text-gray-600">${outfit.items}</p>
            `;
            lookbookGrid.appendChild(card);
        });
    }
    
    // --- AI Stylist Logic ---
    function getAiOutfitSuggestion() {
        const userInput = aiPromptInput.value.trim();
        if (!userInput) {
            aiOutfitSuggestion.innerHTML = 'Please describe an occasion or vibe first!';
            return;
        }

        aiOutfitSuggestion.innerHTML = '<p>Generating your outfit...<p>';
        
        // This is where you would call a real AI API.
        // We'll simulate a delay and a response for this demo.
        setTimeout(() => {
            const aiPrompt = `
                You are a Gen Z fashion stylist. Your task is to create a stylish outfit based on the user's request: "${userInput}".
                You must use ONLY items from the following wardrobe list:
                ${JSON.stringify(wardrobeData, null, 2)}
                
                RULES:
                1. Stick to the principle: fitted top, relaxed bottom.
                2. Choose items that are color-coordinated.
                3. Construct a complete outfit including a top, a bottom, footwear, and at least one accessory.
                4. Provide a name for the outfit and a brief explanation for your choices.
                
                Example Response Format:
                {
                  "outfitName": "Urban Explorer",
                  "items": "Black Crewneck T-Shirt + Olive Cargo Pants + Chunky Trainers + Silver Chain",
                  "reason": "This look is perfect for a day out in the city. It's comfortable, functional, and hits the modern streetwear trend."
                }
            `;
            
            console.log("--- AI Prompt ---");
            console.log(aiPrompt);

            // Simulated AI Responses (in a real app, this would come from an API call)
            const simulatedResponses = [
                {
                  "outfitName": "Campus Cool",
                  "items": "White Crewneck T-Shirt + Light-wash Relaxed-Fit Denim + White Leather Sneakers + Tote Bag",
                  "reason": "A timeless and comfortable look for attending classes or hanging out on campus. The classic white tee and denim combination is elevated by clean leather sneakers and a practical tote."
                },
                {
                  "outfitName": "Café Minimalist",
                  "items": "Black Knitted Polo Shirt + Charcoal Wide-Leg Trousers + Black Loafers + Minimalist Watch",
                  "reason": "This sophisticated outfit is perfect for a stylish café visit or a casual date. The knit polo adds texture, while the wide-leg trousers and loafers create a sharp, modern silhouette."
                },
                 {
                  "outfitName": "Creative Mood",
                  "items": "Charcoal Sweater + Black Cargo Pants + Chunky Trainers + Baseball Cap",
                  "reason": "This is a strong, contemporary look ideal for a creative setting like a photoshoot or gallery visit. The monochrome palette feels intentional and stylish."
                }
            ];

            const randomResponse = simulatedResponses[Math.floor(Math.random() * simulatedResponses.length)];

            aiOutfitSuggestion.innerHTML = `
                <h4 class="font-bold text-lg text-gray-800 mb-2">${randomResponse.outfitName}</h4>
                <p class="text-gray-700 mb-3"><span class="font-semibold">Wear this:</span> ${randomResponse.items}</p>
                <p class="text-sm text-gray-500 italic">"${randomResponse.reason}"</p>
            `;

        }, 1200);
    }

    wardrobeFilters.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('#wardrobe-filters .active').classList.remove('active');
            e.target.classList.add('active');
            renderWardrobe(e.target.dataset.filter);
        }
    });

    lookbookFilters.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            document.querySelector('#lookbook-filters .active').classList.remove('active');
            e.target.classList.add('active');
            renderLookbook(e.target.dataset.filter);
        }
    });

    generateOutfitBtn.addEventListener('click', getAiOutfitSuggestion);
    aiPromptInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            getAiOutfitSuggestion();
        }
    });


    const colorPaletteChartCtx = document.getElementById('colorPaletteChart').getContext('2d');
    new Chart(colorPaletteChartCtx, {
        type: 'doughnut',
        data: {
            labels: ['Neutrals', 'Accents'],
            datasets: [{
                label: 'Color Palette',
                data: [80, 20],
                backgroundColor: ['#A37E63', '#D6C3B3'],
                borderColor: '#FDFBF8',
                borderWidth: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    const itemCountChartCtx = document.getElementById('itemCountChart').getContext('2d');
    const itemCounts = wardrobeData.reduce((acc, item) => {
        const count = parseInt(item.name.match(/x(\d+)/)?.[1] || 1);
        acc[item.category] = (acc[item.category] || 0) + count;
        return acc;
    }, {});
    new Chart(itemCountChartCtx, {
        type: 'bar',
        data: {
            labels: Object.keys(itemCounts),
            datasets: [{
                label: '# of Items',
                data: Object.values(itemCounts),
                backgroundColor: '#D6C3B3',
                borderColor: '#A37E63',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                     grid: {
                        display: false
                    }
                }
            }
        }
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    renderWardrobe();
    renderLookbook();
});
