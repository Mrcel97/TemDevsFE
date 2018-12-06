export interface DiscordUser {
  // Generate avatar url with the following url format: https://cdn.discordapp.com/avatars/<user_id>/<avatar>.png
  avatar: string;         // Avatar hash
  email: string;          // User email
  username: string;       // Discord display name
  discriminator: string;  // The number after the username
  id: string;             // Unique identifier of user
  locale: string;         // User locale: For example: es-ES
  verified: boolean;      // Verified email or not
}
