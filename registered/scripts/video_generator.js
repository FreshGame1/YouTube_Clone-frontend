const musicChannelNames = [
    "Sound Waves", "Melody Masters", "Beat Factory", "Rhythm Revolution",
    "Harmony Hub", "Audio Architects", "Tune Tribe", "Vibe Vision",
    "Music Matrix", "Sonic Spectrum", "Chord Chronicles", "Pulse Players",
    "Note Nation", "Frequency Focus", "Soundscape Studio", "Audio Avenue",
    "Melodic Moments", "Beat Boulevard", "Harmony Highway", "Rhythm Realm"
];

const gamingChannelNames = [
    "Game Galaxy", "Play Portal", "Quest Quarters", "Level Legends",
    "Controller Kings", "Pixel Pioneers", "Gameverse Guides", "Playfield Pros",
    "Digital Dungeons", "Console Command", "Gamer's Gateway", "Playthrough Palace"
];

const travelChannelNames = [
    "Global Explorers", "Wanderlust Diaries", "Nomadic Adventures", "World Trekkers",
    "Journey Seekers", "Destination Unknown", "Travel Chronicles", "Roaming Souls"
];

const cookingChannelNames = [
    "Culinary Masters", "Flavor Fusion", "Gourmet Journey", "Kitchen Wizards",
    "Taste Explorers", "Recipe Revolution", "Food Artisans", "Cooking Canvas"
];

const musicTitles = [
    "How to Produce Electronic Music in 2025 - Beginner's Guide",
    "Top 10 Music Production Software Compared",
    "Mixing and Mastering Techniques for Perfect Sound",
    "Building Your Home Studio on a Budget",
    "Music Theory Explained - From Basics to Advanced",
    "Creating Catchy Melodies - Professional Tips",
    "Best VST Plugins for 2025 - Must Have Tools",
    "Vocals Processing - Make Your Voice Sound Professional",
    "Beat Making Tutorial - Hip Hop Patterns",
    "Live Performance Setup for Electronic Musicians",
    "Audio Engineering Secrets Revealed",
    "Music Business - How to Monetize Your Talent"
];

const gamingTitles = [
    "Gaming PC Build Guide 2025 - Best Components",
    "Top 5 Games to Play This Month - Must Try Titles",
    "E-Sports Training Routine - Become Pro Gamer",
    "Game Development Basics - Create Your First Game",
    "VR Gaming Setup - Immersive Experience Guide",
    "Console vs PC Gaming - Ultimate Comparison 2025",
    "Gaming Accessories That Will Change Your Experience",
    "Speedrunning Techniques - Break World Records",
    "Indie Games You Probably Missed But Should Play",
    "Multiplayer Strategies - Dominate Any Game"
];

const otherTitles = [
    "10 Hidden Gems in Europe You Must Visit This Year",
    "Traditional Italian Pasta Recipes You Can Make at Home",
    "How to Take Stunning Landscape Photos with Your Phone",
    "Morning Yoga Routine for Beginners - 15 Minute Session",
    "The Science Behind Perfect Sourdough Bread",
    "Budget Travel Tips - See the World for Less",
    "Watercolor Painting Techniques for Absolute Beginners",
    "Healthy Meal Prep Ideas for Busy Weekdays",
    "Exploring Ancient Ruins - History Comes Alive",
    "Mediterranean Diet Recipes for Longevity",
    "Urban Photography - Capturing City Life",
    "Home Workout Without Equipment - Get Fit Anywhere"
];

const shortTitles = [
    "New Beat Preview 🎵", "Gaming Clip of the Day 🎮", "Sunset in Bali 🌅",
    "5 Minute Chocolate Cake 🍫", "Music Production Tip 🔊", "Paris in 60 Seconds 🇫🇷",
    "Quick Arm Workout 💪", "Flower Arranging Tips 🌸", "Street Food Tour 🍜",
    "Meditation for Beginners 🧘‍♀️", "DIY Home Decor Ideas 🏠", "Game Montage 🎯"
];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatViews(views) {
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'K';
    } else {
        return views + '';
    }
}

function getTimeAgo() {
    const timeUnits = [
        { unit: 'week', divisor: 604800 },
        { unit: 'day', divisor: 86400 },
        { unit: 'month', divisor: 2592000 },
        { unit: 'year', divisor: 31536000 }
    ];
    
    const randomTime = getRandomInt(1, 52);
    const unitIndex = getRandomInt(0, 3);
    
    const unit = timeUnits[unitIndex].unit;
    const amount = Math.floor(randomTime / timeUnits[unitIndex].divisor * 10) || 1;

    let pluralUnit = unit;
    if (amount > 1) pluralUnit = unit + 's';
    
    return `${amount} ${pluralUnit} ago`;
}

function generateDuration() {
    const minutes = getRandomInt(5, 60);
    const seconds = getRandomInt(0, 59);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function getRandomChannelName() {
    const random = Math.random();
    if (random < 0.2) {
        return {
            name: musicChannelNames[getRandomInt(0, musicChannelNames.length - 1)],
            category: 'music'
        };
    } else if (random < 0.7) {
        return {
            name: gamingChannelNames[getRandomInt(0, gamingChannelNames.length - 1)],
            category: 'gaming'
        };
    } else if (random < 0.85) {
        return {
            name: travelChannelNames[getRandomInt(0, travelChannelNames.length - 1)],
            category: 'travel'
        };
    } else {
        return {
            name: cookingChannelNames[getRandomInt(0, cookingChannelNames.length - 1)],
            category: 'cooking'
        };
    }
}

function getRandomVideoTitle(category) {
    const random = Math.random();
    
    if (category === 'music' || random < 0.2) {
        return musicTitles[getRandomInt(0, musicTitles.length - 1)];
    } else if (random < 0.7) {
        return gamingTitles[getRandomInt(0, gamingTitles.length - 1)];
    } else {
        return otherTitles[getRandomInt(0, otherTitles.length - 1)];
    }
}

function generateGradient() {
    const gradientTypes = ['linear', 'radial'];
    const type = gradientTypes[getRandomInt(0, 1)];
    const colorCount = getRandomInt(2, 6);
    let colors = [];
    
    for (let i = 0; i < colorCount; i++) {
        colors.push(`hsl(${getRandomInt(0, 360)}, ${getRandomInt(70, 100)}%, ${getRandomInt(50, 90)}%)`);
    }
    
    if (type === 'linear') {
        const angle = getRandomInt(0, 360);
        return `linear-gradient(${angle}deg, ${colors.join(', ')})`;
    } else {
        return `radial-gradient(circle, ${colors.join(', ')})`;
    }
}

function getRandomColor() {
    return `hsl(${getRandomInt(0, 360)}, ${getRandomInt(70, 100)}%, ${getRandomInt(50, 90)}%)`;
}

function generateThumbnail(width, height, text) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (Math.random() > 0.3) {
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        const colorStops = getRandomInt(2, 6);
        for (let i = 0; i < colorStops; i++) {
            gradient.addColorStop(i / (colorStops - 1), getRandomColor());
        }
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = getRandomColor();
    }
    ctx.fillRect(0, 0, width, height);

    if (text) {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, width/2, height/2);
    }
    
    return canvas.toDataURL();
}

function generateAvatar(size, channelName) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    if (Math.random() > 0.3) {
        const gradientType = Math.random() > 0.5 ? 'linear' : 'radial';
        
        if (gradientType === 'linear') {
            const angle = getRandomInt(0, 360);
            const gradient = ctx.createLinearGradient(
                0, 0, 
                size * Math.cos(angle * Math.PI/180), 
                size * Math.sin(angle * Math.PI/180)
            );
            
            const colorCount = getRandomInt(2, 4);
            for (let i = 0; i < colorCount; i++) {
                gradient.addColorStop(
                    i / (colorCount - 1), 
                    `hsl(${getRandomInt(0, 360)}, ${getRandomInt(70, 100)}%, ${getRandomInt(50, 90)}%)`
                );
            }
            ctx.fillStyle = gradient;
        } else {
            const gradient = ctx.createRadialGradient(
                size/2, size/2, 0,
                size/2, size/2, size/2
            );
            
            const colorCount = getRandomInt(2, 4);
            for (let i = 0; i < colorCount; i++) {
                gradient.addColorStop(
                    i / (colorCount - 1), 
                    `hsl(${getRandomInt(0, 360)}, ${getRandomInt(70, 100)}%, ${getRandomInt(50, 90)}%)`
                );
            }
            ctx.fillStyle = gradient;
        }
    } else {
        ctx.fillStyle = `hsl(${getRandomInt(0, 360)}, ${getRandomInt(70, 100)}%, ${getRandomInt(50, 90)}%)`;
    }
    
    ctx.fillRect(0, 0, size, size);

    if (channelName) {
        const initials = channelName.split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .substring(0, 2);

        ctx.fillStyle = '#ffffff';
        ctx.font = `bold ${size * 0.4}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(initials, size/2, size/2);
    }

    if (Math.random() > 0.7) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = size * 0.03;
        ctx.globalAlpha = 0.3;
        
        if (Math.random() > 0.5) {
            const circleCount = getRandomInt(1, 3);
            for (let i = 0; i < circleCount; i++) {
                const radius = size * (0.1 + Math.random() * 0.3);
                ctx.beginPath();
                ctx.arc(
                    getRandomInt(size * 0.2, size * 0.8),
                    getRandomInt(size * 0.2, size * 0.8),
                    radius,
                    0,
                    Math.PI * 2
                );
                ctx.stroke();
            }
        } else {
            const lineCount = getRandomInt(1, 3);
            for (let i = 0; i < lineCount; i++) {
                ctx.beginPath();
                ctx.moveTo(
                    getRandomInt(0, size),
                    getRandomInt(0, size)
                );
                ctx.lineTo(
                    getRandomInt(0, size),
                    getRandomInt(0, size)
                );
                ctx.stroke();
            }
        }
        ctx.globalAlpha = 1;
    }

    return canvas.toDataURL();
}

function generateSubscriptions() {
    const subscriptionsContainer = document.getElementById('subscriptions-container');
    subscriptionsContainer.innerHTML = '';
    
    const allChannels = [
        ...musicChannelNames.map(name => ({ name, category: 'music' })),
        ...gamingChannelNames.map(name => ({ name, category: 'gaming' })),
        ...travelChannelNames.map(name => ({ name, category: 'travel' })),
        ...cookingChannelNames.map(name => ({ name, category: 'cooking' }))
    ];
    
    for (let i = allChannels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allChannels[i], allChannels[j]] = [allChannels[j], allChannels[i]];
    }
    
    const selectedChannels = allChannels.slice(0, 40);

    selectedChannels.forEach(channel => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';
        
        const avatarUrl = generateAvatar(40, channel.name);
        
        channelItem.innerHTML = `
            <div class="channel-avatar">
                <img src="${avatarUrl}" alt="${channel.name} avatar">
            </div>
            <span class="subscription-name">${channel.name}</span>
        `;
        
        subscriptionsContainer.appendChild(channelItem);
    });
}

function generateVideos() {
    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = '';
    
    for (let i = 0; i < 12; i++) {
        const channel = getRandomChannelName();
        const channelName = channel.name;
        
        const videoTitle = getRandomVideoTitle(channel.category);
        const views = formatViews(getRandomInt(10000, 5000000));
        const timeAgo = getTimeAgo();
        const duration = generateDuration();
        
        const thumbnailDataUrl = generateThumbnail(300, 169, `Video ${i+1}`);
        const avatarUrl = generateAvatar(40, channelName);
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        
        videoCard.innerHTML = `
            <div class="thumbnail-container">
                <img src="${thumbnailDataUrl}" alt="Video thumbnail" class="thumbnail">
                <div class="video-duration">${duration}</div>
            </div>
            <div class="video-info">
                <div class="channel-avatar-md">
                    <img src="${avatarUrl}" alt="${channelName} avatar">
                </div>
                <div class="video-details">
                    <h3 class="video-title">${videoTitle}</h3>
                    <p class="channel-name">${channelName}</p>
                    <p class="video-metadata">${views} views<span class="dot-separator">•</span> ${timeAgo}</p>
                </div>
            </div>
        `;
        
        videosContainer.appendChild(videoCard);
    }
}

function generateShorts() {
    const videosContainer = document.getElementById('videos-container');
    
    const shortsSection = document.createElement('div');
    shortsSection.className = 'shorts-section';
    
    shortsSection.innerHTML = `
        <div class="section-title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.94 122.88" width="24" height="24" style="enable-background:new 0 0 98.94 122.88" xml:space="preserve">
                <path d="M63.49 2.71c11.59-6.04 25.94-1.64 32.04 9.83 6.1 11.47 1.65 25.66-9.94 31.7l-9.53 5.01c8.21.3 16.04 4.81 20.14 12.52 6.1 11.47 1.66 25.66-9.94 31.7l-50.82 26.7c-11.59 6.04-25.94 1.64-32.04-9.83-6.1-11.47-1.65-25.66 9.94-31.7l9.53-5.01c-8.21-.3-16.04-4.81-20.14-12.52-6.1-11.47-1.65-25.66 9.94-31.7l50.82-26.7zM36.06 42.53l30.76 18.99-30.76 18.9V42.53z" fill="#f40407"/>
                <path d="M36.06,42.53 V 80.42 L 66.82,61.52Z" fill="#fff"/>
            </svg>
            <span>Shorts</span>
        </div>
        <div class="shorts-scroll-container">
            <button class="scroll-button scroll-button-left" aria-label="Прокрутить влево">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="shorts-container" id="shorts-container"></div>
            <button class="scroll-button scroll-button-right" aria-label="Прокрутить вправо">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    `;
    
    videosContainer.appendChild(shortsSection);
    
    const shortsContainer = document.getElementById('shorts-container');
    const scrollLeftBtn = shortsSection.querySelector('.scroll-button-left');
    const scrollRightBtn = shortsSection.querySelector('.scroll-button-right');
    
    for (let i = 0; i < 15; i++) {
        const titleIndex = getRandomInt(0, shortTitles.length - 1);
        const shortTitle = shortTitles[titleIndex];
        const views = formatViews(getRandomInt(100000, 10000000));
        
        const shortThumbnail = generateThumbnail(170, 300, `Short ${i+1}`);
        
        const shortCard = document.createElement('div');
        shortCard.className = 'short-card';
        
        shortCard.innerHTML = `
            <div class="short-thumbnail">
                <img src="${shortThumbnail}" alt="Short thumbnail">
            </div>
            <h3 class="short-title">${shortTitle}</h3>
            <p class="short-views">${views} views</p>
        `;
        
        shortsContainer.appendChild(shortCard);
    }
    
    scrollLeftBtn.addEventListener('click', () => {
        shortsContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });
    
    scrollRightBtn.addEventListener('click', () => {
        shortsContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });
    
    const checkScrollButtons = () => {
        const scrollLeft = shortsContainer.scrollLeft;
        const maxScrollLeft = shortsContainer.scrollWidth - shortsContainer.clientWidth;
        
        scrollLeftBtn.style.display = scrollLeft > 0 ? 'flex' : 'none';
        scrollRightBtn.style.display = scrollLeft < maxScrollLeft - 5 ? 'flex' : 'none';
    };
    
    shortsContainer.addEventListener('scroll', checkScrollButtons);
    window.addEventListener('resize', checkScrollButtons);
    checkScrollButtons();
}

document.addEventListener('DOMContentLoaded', function() {
    generateSubscriptions();
    generateVideos();
    generateShorts();
});
