// ============================================
// 🎂 CUSTOMIZE YOUR BIRTHDAY WEBSITE HERE 🎂
// ============================================

const CONFIG = {
    // Birthday person's name
    valentineName: "Lily",

    // Browser tab title
    pageTitle: "Happy Birthday, Jade! 🎂",

    // Floating background emojis
    floatingEmojis: {
        hearts: ['🎈', '🎉', '✨', '🎂', '🌟'],  // Birthday vibes
        bears: ['🧸', '🍰']                      // Cute extras
    },

    // Questions and interactions
    questions: {
        first: {
            text: "Are you ready for your birthday surprise?",
            yesBtn: "Yes 🎉",
            noBtn: "Let me think 🤔",
            secretAnswer: "Too late. It’s your day. 🎂"
        },
        second: {
            text: "How happy are you today?",
            startText: "This happy!",
            nextBtn: "Next ✨"
        },
        third: {
            text: "Make a wish before you continue... 🌟",
            yesBtn: "Done 🎂",
            noBtn: "Wait a second"
        }
    },

    // Happiness meter messages
    loveMessages: {
        extreme: "Maximum birthday energy detected! 🚀🎉",
        high: "That’s a strong birthday mood! ✨",
        normal: "A perfectly good birthday vibe 🎂"
    },

    // Final celebration screen
    celebration: {
        title: "Happy Birthday! 🎉🎂✨",
        message: "Wishing you a calm, bright, and genuinely good year ahead.",
        emojis: "🎉🎈🎂✨🌟"
    },

    // Softer birthday color scheme
    colors: {
        backgroundStart: "#fbc2eb",      // Soft pastel pink
        backgroundEnd: "#a6c1ee",        // Soft blue
        buttonBackground: "#7aa2f7",     
        buttonHover: "#9bbcff",
        textColor: "#444444"
    },

    // Animation settings (unchanged)
    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    // Background Music
    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;
