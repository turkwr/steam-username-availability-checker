# 🚀 Steam Username Availability Checker

Easily check for available Steam vanity URLs (custom profile names) by generating and testing random usernames.

---

## 📖 Overview

This tool automates the process of finding an available Steam username by:

- Generating random usernames based on your configuration.
- Checking each username's availability via Steam's public profile system.
- Stopping when an available username is found or after a set number of attempts.

---

## ⚠️ Disclaimer

> **This project is for educational and informational purposes only.**  
> The author is **not responsible** for any misuse, damage, or consequences resulting from the use of this script.  
> **Use at your own risk.**

---

## ⚙️ Configuration

Customize the username generation by editing the `config` object in the script:

| Option            | Description                                               | Default                |
|-------------------|----------------------------------------------------------|------------------------|
| `chars`           | Characters used for username generation                   | Lowercase `a-z`        |
| `length`          | Length of each generated username                         | `5`                    |
| `maxAttempts`     | Maximum usernames to try before stopping                  | `1000`                 |
| `includeNumbers`  | Include numbers (`0-9`) in generated usernames            | `false`                |

Example:
```js
const config = {
    chars: 'abcdefghijklmnopqrstuvwxyz',
    length: 5,
    maxAttempts: 1000,
    includeNumbers: false
};
```

---

## 🛠️ Usage

1. **Configure** the `config` object as needed.
2. **Run** the script:
     ```bash
     node scrape.js
     ```
3. **Monitor** the output:
     - The script prints the status of each attempted username.
     - Stops when an available username is found or after reaching the maximum attempts.

---

## 💡 Notes

- Only random usernames are tried; the process is **not exhaustive**.
- The script waits **3 seconds** between each attempt to avoid Steam rate-limiting.
- For best results, try adjusting `length` and `includeNumbers` to increase the chance of finding available usernames.

---

## 📬 Feedback & Contributions

Feel free to open issues or submit pull requests to improve this tool!

---
