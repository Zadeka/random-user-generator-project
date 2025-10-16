import { useState, useEffect, useCallback } from "react";
import type { User } from "../types/randomUser.type";
import { fetchRandomUser } from "../services/userService";
import { LoaderCircle, RefreshCw } from "lucide-react";
import { UserProfileHeader } from "./UserProfileHeader";
import { UserDetails } from "./UserDetails";
import { CardActions } from "./CardActions";

export const UserProfileCard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Fungsi untuk mengambil user baru, dibungkus dengan useCallback
  const handleGenerateUser = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null); // Reset error state
      const userData = await fetchRandomUser();
      setUser(userData);
    } catch (err) {
      setError("Failed to fetch user data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Memanggil fungsi fetch saat komponen pertama kali dimuat
  useEffect(() => {
    handleGenerateUser();
  }, [handleGenerateUser]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  if (isLoading && !user) {
    // Hanya tampilkan loader layar penuh pada load pertama
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
        <LoaderCircle className="animate-spin text-blue-500" size={48} />
      </div>
    );
  }

  if (error && !user) {
    // Hanya tampilkan error layar penuh jika tidak ada user sama sekali
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
        <p className="rounded-lg bg-red-100 p-4 text-red-500">{error}</p>
      </div>
    );
  }

  if (!user) return null;

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;

  return (
    <div className="relative mx-auto my-10 max-w-md overflow-hidden rounded-xl bg-white font-sans shadow-lg transition-colors duration-300 dark:bg-gray-800">
      <CardActions
        theme={theme}
        toggleTheme={toggleTheme}
        isLoggedIn={isLoggedIn}
        toggleLogin={toggleLogin}
      />

      <div className="p-8">
        <UserProfileHeader
          pictureUrl={user.picture.large}
          fullName={fullName}
          email={user.email}
        />

        {isLoggedIn && <UserDetails user={user} />}
      </div>

      {/* Tombol Generate di bagian bawah */}
      <div className="px-8 pb-8">
        <button
          onClick={handleGenerateUser}
          disabled={isLoading}
          className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-green-500 px-4 py-2 text-white transition-all duration-200 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 dark:bg-green-600 dark:hover:bg-green-700"
        >
          {isLoading ? (
            <LoaderCircle size={20} className="animate-spin" />
          ) : (
            <>
              <RefreshCw size={16} className="mr-2" />
              Generate New User
            </>
          )}
        </button>
      </div>
    </div>
  );
};
