# 📱Word Game

An engaging word puzzle app built with Ionic Framework for Android and iOS. Word Game features a 3D user experience where players solve exactly 20 word questions. Supported by secure account sync, players can instantly track scores, manage profile identities, and navigate unlocked puzzle challenges.

### 🚀 Try It Now 
<a href="https://Hyman-Cheung.github.io/WordGame_Ionic">
  <img src="https://img.shields.io/badge/Try_Android_App-1a8eed?style=for-the-badge" alt="Try Android App" height="40">
</a>

---

## 🎮 Core Game Systems & Modes

### 🌟 Registration
* **Account Creation:** New players register by providing a custom player username, a valid email address, and a secure password.

* **Email Verification:** Upon submitting the registration form, the authentication system automatically dispatches a verification email directly to the user's inbox to confirm identity and secure the profile records.

* **Account Confirmation:** The user must open the verification email and click the confirmation link to validate their email address and unlock account privileges.

* **Secure Login:** Once the account is successfully verified and confirmed, the user can log in with their credentials to access the game dashboards and begin syncing their real-time score data.

### 🔄 The Three-Section Game Hub
The game experience is organized into three easily accessible dashboards located on the bottom navigation bar:
* **Profile Settings:** Displays your personalized gaming tag using dynamically bound data, registered email, verification date tracking, and current running score total.
* **Main Game Hub:** Features a sleek 3D interactive interface that lets you immediately dive into your active gameplay progression.
* **Stage Select Grid:** Provides a visual layout of all 20 game stages, allowing you to quickly spot your progress.

### 🖼️ Interactive 3D Main Menu
* **Word Carousel:** The main game lobby showcases an animated, 3D cube-effect carousel spelling out **W-O-R-D**. Players can swipe through these gorgeous visual block cards.
* **Smart Progress Detection:** Tapping the main "Start Game" button triggers an automatic progression check, which instantly scans your history and launches the exact question level you are currently up to.

### 🗂️ Stage Select & Clearance Tracking
* **Visual Level Cards:** The stage select board uses custom graphics cards labeled for every question milestone from Level 1 to 20 mapped dynamically out of your user data.
* **Checkmark Progression:** Once you successfully beat a question, a unique completion checkmark icon lights up on that level's card inside the selection grid. 
* **Unlocked Replays:** Tapping on any verified, completed question block allows you to instantly return to that level to review the puzzle map or play for replay points.

---

## 🚀 Scoring & Penalty Systems

Points shift dynamically depending on your accuracy and puzzle status:
* **Base Clearance:** Earn a standardized point reward upon completing a fresh level (e.g., **+3 points** for early stages, scaling up to **+8 points** or **+12 points** for complex, late-game answers).
* **The "Never Give Up" Payout:** If you fail **5 or more times** but stick with it until you discover the answer, the game acknowledges your persistence with your base score.
* **Replay Veteran Reward:** Clearing a stage you have already successfully unlocked previously earns you a smaller baseline bonus of **+1 to +3 points**.
* **Grand Finale Bonus:** Solving and clearing the path for all 20 puzzles awards a massive end-game payout (ranging from **+20 to +30 points**).
* **Streak Deductions:** Watch your inputs! Making too many errors triggers a strike penalty. Continuous blunders subtract points directly from your master balance (e.g., dropping **-1 to -6 points** upon hitting a **3-mistake streak**).

---

## 🕹️ How to Play

1. **Sign In or Sign Up:** Register a player account using your email address and custom player handle.
2. **Launch into Action:** Tap "Start Game" on the interactive 3D menu carousel to automatically continue your story right where you left off.
3. **Fill the Missing Slots:** Study the surrounding text prompts and tap characters directly into the custom box entry zones to spell out valid words.
4. **Browse Your Achievements:** Open up the level grid to review your completed checkmarks and choose a past stage to replay to maximize your total high score!

---

## 📸 Screenshots & Previews

*(Tip: Upload your game snapshots directly into an `assets/` directory inside your repository to show off your UI here!)*

| Login Page | Profile Page | 3D Swiper Dashboard | Stage Select Page | Game page | 
|:---:|:---:|:---:|:---:|:---:|
| <img src="assets/dashboard.png" width="180"> | <img src="assets/grid.png" width="180"> | <img src="assets/gameplay.png" width="180"> | <img src="assets/profile.png" width="180"> | <img src="assets/profile.png" width="180"> |

---

## 👤 Credits

Designed and Developed by **Hyman Cheung**
