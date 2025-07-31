const config = {
    chars: 'abcdefghijklmnopqrstuvwxyz',
    length: 3,
    maxAttempts: 100,
    includeNumbers: false
};

if (config.includeNumbers) {
    config.chars += '0123456789';
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function checkSteamUsername(username) {
    const url = `https://steamcommunity.com/id/${username}`;
    const res = await fetch(url, { method: 'GET' });
    const text = await res.text();
    return text.includes('The specified profile could not be found');
}

async function findAvailableUsernames() {
    const tried = new Set();

    function getRandomUsername() {
        let username;
        do {
            username = '';
            for (let i = 0; i < config.length; i++) {
                username += config.chars[Math.floor(Math.random() * config.chars.length)];
            }
        } while (tried.has(username));
        tried.add(username);
        return username;
    }

    for (let attempt = 0; attempt < config.maxAttempts; attempt++) {
        const username = getRandomUsername();
        const available = await checkSteamUsername(username);
        console.log(`${username}: ${available ? 'Available' : 'Taken'}`);
        if (available) {
            console.log(`Found available username: ${username}`);
            return;
        }
        await sleep(3000);
    }
    console.log('No available username found in random attempts.');
}

findAvailableUsernames();
