import type { RandomUserResponse, User } from "../types/randomUser.type";

// API Configuration
const API_URL = 'https://randomuser.me/api/';

// Fetch Function
export const fetchRandomUser = async (): Promise<User> => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: RandomUserResponse = await response.json();

    if (data.results && data.results.length > 0) {
      // Mengembalikan user pertama dari array results
      return data.results[0];
    } else {
      throw new Error('No user data found');
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Melempar kembali error agar bisa ditangkap oleh komponen yang memanggil
    throw error;
  }
};