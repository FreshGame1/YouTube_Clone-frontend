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

const userAccounts = [
    {
        name: "FreshGame",
        handle: "@FreshGame_YT",
        avatar: null
    },
    {
        name: "Gaming Pro",
        handle: "@gamingpro",
        avatar: null
    },
    {
        name: "Music Lover",
        handle: "@musiclover",
        avatar: null
    },
    {
        name: "Travel Explorer",
        handle: "@travelexplorer",
        avatar: null
    }
];

const notifications = [
    {
        channel: "Music Matrix",
        text: "uploaded a new video: Music Production Secrets Revealed",
        time: "2 hours ago",
        avatar: null,
        thumbnail: null
    },
    {
        channel: "Game Galaxy",
        text: "is live: Playing New Release - Join now!",
        time: "4 hours ago",
        avatar: null,
        thumbnail: null
    },
    {
        channel: "Culinary Masters",
        text: "uploaded: 5 Minute Recipes for Busy People",
        time: "1 day ago",
        avatar: null,
        thumbnail: null
    },
    {
        channel: "Travel Chronicles",
        text: "added a new short: Beautiful Sunset in Greece",
        time: "2 days ago",
        avatar: null,
        thumbnail: null
    }
];

let notificationCount = 3;

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

function generateUserAvatar() {
    const userAvatar = document.querySelector('.user-avatar');
    const userMenuAvatar = document.getElementById('user-menu-avatar');
    
    if (userAvatar) {
        const avatarUrl = generateAvatar(32, 'FreshGame');
        userAvatar.innerHTML = `<img src="${avatarUrl}" alt="User avatar" style="width: 100%; height: 100%; border-radius: 50%;">`;
        
        if (userMenuAvatar) {
            userMenuAvatar.src = avatarUrl;
        }
    }
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

function updateNotificationBadge() {
    const notificationBadges = document.querySelectorAll('.notification-badge');
    
    notificationBadges.forEach(badge => {
        if (notificationCount > 0) {
            badge.textContent = notificationCount > 99 ? '99+' : notificationCount.toString();
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

function generateRandomNotificationCount() {
    const random = Math.random();
    
    if (random < 0.7) {
        notificationCount = getRandomInt(1, 9);
    } else if (random < 0.9) {
        notificationCount = getRandomInt(10, 20);
    } else {
        notificationCount = 0;
    }
    
    updateNotificationBadge();
}

function generateUserAccounts() {
    const accountsList = document.getElementById('other-accounts');
    const currentAccountAvatar = document.getElementById('current-account-avatar');
    const currentAccountName = document.getElementById('current-account-name');
    const currentAccountHandle = document.getElementById('current-account-handle');
    
    if (!accountsList) return;
    
    accountsList.innerHTML = '';
    
    if (userAccounts.length > 0 && !userAccounts[0].avatar) {
        userAccounts[0].avatar = generateAvatar(32, userAccounts[0].name);
    }
    
    if (currentAccountAvatar && userAccounts.length > 0) {
        currentAccountAvatar.src = userAccounts[0].avatar;
        currentAccountName.textContent = userAccounts[0].name;
        currentAccountHandle.textContent = userAccounts[0].handle;
    }
    
    userAccounts.slice(1).forEach(account => {
        if (!account.avatar) {
            account.avatar = generateAvatar(32, account.name);
        }
        
        const accountItem = document.createElement('div');
        accountItem.className = 'other-account-item';
        accountItem.innerHTML = `
            <div class="other-account-avatar">
                <img src="${account.avatar}" alt="${account.name} avatar">
            </div>
            <div class="other-account-details">
                <div class="other-account-name">${account.name}</div>
                <div class="other-account-handle">${account.handle}</div>
            </div>
        `;
        
        accountItem.addEventListener('click', () => {
            currentAccountAvatar.src = account.avatar;
            currentAccountName.textContent = account.name;
            currentAccountHandle.textContent = account.handle;
            
            const userMenuAvatar = document.getElementById('user-menu-avatar');
            const userMenuName = document.getElementById('user-menu-name');
            const userMenuHandle = document.getElementById('user-menu-handle');
            
            if (userMenuAvatar) userMenuAvatar.src = account.avatar;
            if (userMenuName) userMenuName.textContent = account.name;
            if (userMenuHandle) userMenuHandle.textContent = account.handle;
            
            const headerAvatar = document.querySelector('.user-avatar img');
            if (headerAvatar) headerAvatar.src = account.avatar;
            
            const accountSwitchMenu = document.getElementById('account-switch-menu');
            const userMenu = document.getElementById('user-menu');
            
            accountSwitchMenu.classList.remove('active');
            userMenu.classList.add('active');
            
            generateRandomNotificationCount();
            generateNotifications();
        });
        
        accountsList.appendChild(accountItem);
    });
}

function generateNotifications() {
    const notificationsContent = document.getElementById('notifications-content');
    if (!notificationsContent) return;
    
    notificationsContent.innerHTML = '';
    
    if (notificationCount === 0) {
        notificationsContent.innerHTML = `
            <div class="no-notifications">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>No notifications yet</p>
                <p style="font-size: 12px; margin-top: 8px;">Check back later for new notifications</p>
            </div>
        `;
        return;
    }
    
    const notificationsToShow = Math.min(notificationCount, 10);
    
    for (let i = 0; i < notificationsToShow; i++) {
        const channel = getRandomChannelName();
        const channelName = channel.name;
        
        const notificationTypes = [
            `uploaded a new video: ${getRandomVideoTitle(channel.category)}`,
            `is live: ${getRandomVideoTitle(channel.category)} - Join now!`,
            `added a new short: ${shortTitles[getRandomInt(0, shortTitles.length - 1)]}`,
            `liked your comment on: ${getRandomVideoTitle(channel.category)}`,
            `mentioned you in a comment`
        ];
        
        const notificationText = notificationTypes[getRandomInt(0, notificationTypes.length - 1)];
        
        const timeOptions = [
            "just now",
            "5 minutes ago", 
            "15 minutes ago",
            "1 hour ago",
            "2 hours ago",
            "4 hours ago",
            "1 day ago",
            "2 days ago"
        ];
        
        const notificationTime = timeOptions[getRandomInt(0, timeOptions.length - 1)];
        const avatarUrl = generateAvatar(40, channelName);
        const thumbnailUrl = generateThumbnail(60, 34, '');
        
        const notificationItem = document.createElement('div');
        notificationItem.className = 'notification-item';
        notificationItem.innerHTML = `
            <div class="notification-avatar">
                <img src="${avatarUrl}" alt="${channelName} avatar">
            </div>
            <div class="notification-content">
                <div class="notification-text">
                    <span class="notification-channel">${channelName}</span>
                    ${notificationText}
                </div>
                <div class="notification-time">${notificationTime}</div>
            </div>
            <div class="notification-thumbnail">
                <img src="${thumbnailUrl}" alt="Video thumbnail">
            </div>
        `;
        
        notificationsContent.appendChild(notificationItem);
    }
}

function generateSubscriptions() {
    const subscriptionsContainer = document.getElementById('subscriptions-container');
    if (!subscriptionsContainer) return;
    
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
    
    const selectedChannels = allChannels.slice(0, 100);

    selectedChannels.forEach(channel => {
        const channelItem = document.createElement('a');
        channelItem.className = 'sidebar-item';
        channelItem.href = '#';
        
        const avatarUrl = generateAvatar(24, channel.name);
        
        channelItem.innerHTML = `
            <span class="sidebar-item-icon">
                <img src="${avatarUrl}" alt="${channel.name} avatar" style="width: 24px; height: 24px; border-radius: 50%;">
            </span>
            <span>${channel.name}</span>
        `;
        
        subscriptionsContainer.appendChild(channelItem);
    });
}

function generateVideos() {
    const videosContainer = document.getElementById('videos-container');
    if (!videosContainer) return;
    
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
    if (!videosContainer) return;
    
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
            <button class="scroll-button scroll-button-left" aria-label="Scroll left">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="shorts-container" id="shorts-container"></div>
            <button class="scroll-button scroll-button-right" aria-label="Scroll right">
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

function addTestNotification() {
    notificationCount += 1;
    updateNotificationBadge();
    generateNotifications();
}

function addTestChannel() {
    const channel = getRandomChannelName();
    const channelName = channel.name;
    const avatarUrl = generateAvatar(24, channelName);
    
    const subscriptionsContainer = document.getElementById('subscriptions-container');
    if (subscriptionsContainer) {
        const channelItem = document.createElement('a');
        channelItem.className = 'sidebar-item';
        channelItem.href = '#';
        channelItem.innerHTML = `
            <span class="sidebar-item-icon">
                <img src="${avatarUrl}" alt="${channelName} avatar" style="width: 24px; height: 24px; border-radius: 50%;">
            </span>
            <span>${channelName}</span>
        `;
        subscriptionsContainer.appendChild(channelItem);
    }
}

function addTestVideo() {
    const channel = getRandomChannelName();
    const channelName = channel.name;
    const videoTitle = getRandomVideoTitle(channel.category);
    const views = formatViews(getRandomInt(10000, 5000000));
    const timeAgo = getTimeAgo();
    const duration = generateDuration();
    
    const thumbnailDataUrl = generateThumbnail(300, 169, 'New Video');
    const avatarUrl = generateAvatar(40, channelName);
    
    const videosContainer = document.getElementById('videos-container');
    if (videosContainer) {
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

function addTestShort() {
    const titleIndex = getRandomInt(0, shortTitles.length - 1);
    const shortTitle = shortTitles[titleIndex];
    const views = formatViews(getRandomInt(100000, 10000000));
    const shortThumbnail = generateThumbnail(170, 300, 'New Short');
    
    const shortsContainer = document.getElementById('shorts-container');
    if (shortsContainer) {
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
}

function createTestPanel() {
    const testPanel = document.createElement('div');
    testPanel.id = 'test-panel';
    testPanel.style.cssText = `
        position: fixed;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.9);
        border: 2px solid #ff0000;
        border-radius: 10px;
        padding: 15px;
        z-index: 10000;
        color: white;
        font-family: Arial, sans-serif;
        min-width: 200px;
        backdrop-filter: blur(10px);
    `;
    
    testPanel.innerHTML = `
        <div style="margin-bottom: 15px; font-weight: bold; text-align: center; border-bottom: 1px solid #ff0000; padding-bottom: 8px;">
            🛠️ Test Panel
        </div>
        <button id="test-notification" style="width: 100%; padding: 8px; margin: 5px 0; background: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Add Notification
        </button>
        <button id="test-channel" style="width: 100%; padding: 8px; margin: 5px 0; background: #2196F3; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Add Channel
        </button>
        <button id="test-video" style="width: 100%; padding: 8px; margin: 5px 0; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Add Video
        </button>
        <button id="test-short" style="width: 100%; padding: 8px; margin: 5px 0; background: #FF9800; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Add Short
        </button>
        <button id="test-close" style="width: 100%; padding: 8px; margin: 5px 0; background: #666; color: white; border: none; border-radius: 5px; cursor: pointer;">
            Close Panel
        </button>
    `;
    
    document.body.appendChild(testPanel);
    
    document.getElementById('test-notification').addEventListener('click', addTestNotification);
    document.getElementById('test-channel').addEventListener('click', addTestChannel);
    document.getElementById('test-video').addEventListener('click', addTestVideo);
    document.getElementById('test-short').addEventListener('click', addTestShort);
    document.getElementById('test-close').addEventListener('click', () => {
        testPanel.remove();
    });
}

function toggleTestPanel() {
    const existingPanel = document.getElementById('test-panel');
    if (existingPanel) {
        existingPanel.remove();
    } else {
        createTestPanel();
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'F9') {
        e.preventDefault();
        toggleTestPanel();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    generateSubscriptions();
    generateVideos();
    generateShorts();
    generateUserAvatar();
    generateUserAccounts();
    
    generateRandomNotificationCount();
    generateNotifications();
});
