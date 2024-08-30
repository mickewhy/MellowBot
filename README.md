<a name="top"></a>
![JavaScript Badge](https://img.shields.io/badge/JavaScript-000?logo=javascript&logoColor=F7DF1E&style=for-the-badge)
![Discord Badge](https://img.shields.io/badge/Discord-000?logo=discord&logoColor=5865F2&style=for-the-badge)

# MellowBot
This DiscordJS bot acted as a verification and security bot, aiming to add a layer of protection from raids and bot account joins. This bot did so through the following steps:
1. Generate a random password that is 5 characters long (adjustable) through `generatePassword()`
2. Edit a message to include the newly generated password on a set interval using `setInterval()`
3. Listen for new messages in the verification channel and match them to the current password
4. Give the user a verified role that gives them access to the server, if the password matches
5. Shuffle the password when the interval time is up
