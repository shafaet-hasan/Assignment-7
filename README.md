# Cricket Team Selection App

A responsive React-based web application for selecting and managing a cricket team with a budget, selection limit, and dynamic updates. Built following a Figma design using Tailwind CSS and Daisy UI.

## Live Demo
[Visit the live site](https://luxury-capybara-4b11b4.netlify.app/)

## Features

- **Player Selection:** Choose players based on a budget, with validation on budget limits and selection count.
- **Interactive Tabs:** Toggle between "Available Players" and "Selected Players" tabs.
- **Dynamic Coins Management:** Add coins to the user's balance and use them to "purchase" players.
- **Responsive Newsletter & Footer:** Dynamically styled and positioned Newsletter and Footer sections for all devices.
- **Toast Notifications:** React-Toastify for friendly feedback messages on successful actions or validation errors.
- **Add More Players Option:** Allows switching back to available players after reaching the selection limit.
### Selection Rules

1. **Maximum of 6 Players:** Users are restricted to selecting a maximum of 6 players. When a user attempts to select more than 6 players, a notification will alert them that they have reached the selection limit, preventing further additions. This helps ensure that users focus on building a balanced team rather than over-selecting.

2. **No Duplicate Selections:** A player can only be selected once. If the user tries to add the same player a second time, a notification will inform them that the player is already in their team. This maintains a realistic roster and prevents accidental re-selection.

3. **Coin Validation:** Each player has an associated "cost" in coins. Users must have sufficient coins to "purchase" a player. If the user’s coin balance is too low for the selected player, an alert will notify them of insufficient funds. This adds an extra layer of strategy, as users must manage their budget wisely to complete their team.

### Notifications

The application uses **React-Toastify** to display user-friendly alerts for each of these rules:
- **Player Already Selected Alert:** When the user tries to add the same player again.
- **Maximum Players Reached Alert:** When the user attempts to exceed the 6-player limit.
- **Insufficient Coins Alert:** When the user does not have enough coins to add a selected player.

## Technology used

- **React** for component-based architecture
- **Tailwind CSS** & **Daisy UI** for responsive and stylish UI design
- **React-Toastify** for notifications
- **JavaScript** for interactivity and functionality
- **Netlify** for deployment


